import { DBService } from '../services/db.service'
import { NetService } from '../services/net.service'
import { SamplesService } from '../services/samples.service'
import { SettingsService } from '../services/settings.service'
import { AI } from './ai';
import { AISquencer } from './aisequencer';
import { Metro } from './metro'
import { Mapper, MappedPlayer } from './mapper';
import { Instrument } from './instrument'
import { Pulse } from './pulse'
import { Player } from "./player"

import { MidiSequencer } from './midisequencer'
import { Savable } from './savable'
import { Generator } from './generator'
import { Thing } from './thing'

"use strict"

declare var firebase: any

export class Music extends Savable {

    playerType: string = "AI"
    playerTypes: Array<string> = ["AI", "midi"]
    things: Array<Thing> = []
    pulse: Pulse
    selectedPlayer: Player

    metro: Metro
    recording: boolean = false
    recordBuffer: Array<any> = []
    playHead: number = 0
    title: string = "A Song"

    constructor(private dbService: DBService, private samplesService: SamplesService, private netService: NetService, private monitor: any, public settings: SettingsService) {
        super()
        console.log("new music constructed")
        var self = this
        window.navigator["requestMIDIAccess"]().then(
            (midiAccess: any) => {
                midiAccess.inputs.forEach(function (midiInput: any) {
                    console.log(midiInput)
                    midiInput.onmidimessage = function (event: any) {
                        //  console.log(event.data)

                        if (self.recording && self.pulse.running) {
                            let stamp = self.pulse.getBeatNow()
                            self.recordBuffer.push([stamp, event.data])
                        }

                        self.things.forEach((p) => {
                            if (p instanceof Player) {
                                if (p.details.inst.recording) p.details.inst.playEvent(event.data, 0)
                            }
                        })

                    }
                })
            })

        this.setID(0)
        this.constructorX()
    }


    saveDB(saver: any): any {
        if (this.isSaved()) return
        var itemIDs: Array<any> = []

        let playerPos = 0
        var postItems: any = {
        }



        this.things.forEach((p: Player) => {
            var itemID: string = p.saveDB(saver)
            if (itemID !== null) {
                postItems[itemID] = playerPos++
            }
        })

        this.setID(saver.newIDItem('songs', postItems))

        postItems = {
            title: this.title,
        }

        saver.newIDItem('songinfo/' + saver.user.uid, postItems, this.id)

    }

    loadPlayer(playerSnap: any, pos: number) {


        switch (playerSnap.child("type").val()) {

            case "MidiSequencer":
                var instName = playerSnap.child("inst").val()
                var midiPlayer = this.addMidiPlayer(instName, pos)
                midiPlayer.setID(playerSnap.key)
                var midiKey = playerSnap.child("midi").val()
                if (midiKey !== null) {
                    var midiRef = firebase.database().ref("midi").child(midiKey);
                    midiRef.once("value").then((midi: any) => {
                        var midiData: any = JSON.parse(midi.val())
                        var seq: MidiSequencer = <MidiSequencer>midiPlayer.ticker
                        seq.setBuffer(midiData, midiKey)
                    })
                }
                break


            case "AISequencer":
                var instName = playerSnap.child("inst").val()
                var aiKey = playerSnap.child("ai").val()
                var aiRef = firebase.database().ref("ai").child(aiKey);
                aiRef.once("value").then((aiSnap: any) => {

                    var netKey = aiSnap.child("net").val()
                    var netRef = firebase.database().ref("net").child(netKey)
                    netRef.once("value").then((netSnap: any) => {
                        var netInfo = netSnap.val()
                        this.addAIPlayer(instName, netInfo, pos)
                    })
                })
                break;


            case "Pulse":
                this.pulse.loadSnap(playerSnap)

                break
            default:
                console.log("UNKOWN TYPE : " + playerSnap.child("type").val())
        }

    }

    loadDB(songref: any) {
        songref.once("value").then((song: any) => {
            song.forEach((player: any) => {

                var playerref = firebase.database().ref("players").child(player.key);
                playerref.once("value").then((playerSnap: any) => {
                    this.loadPlayer(playerSnap, player.val())

                })
            })
        })
    }

    constructorX() {

        let ticksPerBeat: number = 12
        let bpm: number = 120

        this.pulse = new Pulse(ticksPerBeat, bpm, this.settings)
        this.things.push(this.pulse)

       

        //var majorSeed = [0, 2, 4, 5, 7, 9, 11]
        //var stack3 = [0, 2, 4, 6, 8, 10, 12]

        this.metro = new Metro(this.pulse, this.samplesService, this.monitor)

    }


    addMidiPlayer(name: string, pos: number): Player {
        let player = new Player(this)
        if (pos === null || pos === true ) this.things.push(player)
        else this.things[pos] = player
        var inst = new Instrument(name, this.monitor)
        player.details.inst = inst
        var midiPlayer = new MidiSequencer(player)
        player.ticker = midiPlayer
        this.change()
        return player
    }



    addAIPlayer(instName: string, net: any, pos: number): Player {

        if (!net) net = {}

        if (net.nOut === undefined) net.nOut = 20
        if (net.nHidden === undefined) net.nHidden = [20]
        if (net.nIn === undefined) net.nIn = this.pulse.rampers.length

        let player = new Player(this)

        if (pos === null) this.things.push(player)
        else this.things[pos] = player

        let ai = new AI(this.dbService, this.netService)

        player.details.ai = ai


        if (instName === undefined) instName = "marimba"
        player.details.name = instName

        var inst = new Instrument(instName, this.monitor)
        player.details.inst = inst


        if (net.seed === undefined) {
            net.seed = Math.random()
        }
        var generator = new Generator(net.seed)

        ai.init(this.pulse, net)

        var base: Array<number> = [0, 3, 5, 7, 10]

        var mapper = new Mapper(40, base)
        player.details.mapper = mapper

        var mapPlayer = new MappedPlayer(inst, mapper)

        let playerAI = new AISquencer(ai, mapPlayer, this.pulse)
        player.ticker = playerAI
        this.change()   //  TODO not if we are loading
        return player

    }

    removePlayer(player: Player) {

        this.pulse.removeClient(player)
        let index = 0
        for (let i = 0; index < this.things.length; index++) {
            if (this.things[index] === player) {
                this.things.splice(index, 1);
                this.change()
                if (this.things.length === 0) this.setID(0)
                return;
            }
        }

    }

    tick(): void {

        try {
            this.pulse.tick()
        } catch (err) {
            console.log(err.stack)
        }

        this.playHead = this.pulse.beat
    }

    record(yes: boolean) {
        this.recording = yes
    }

    start() {
        this.pulse.start()
    }

    stop() {
        this.pulse.stop()
        if (this.recordBuffer.length > 0) {
            this.things.forEach((p) => {
                if (p instanceof Player) {
                    if (p.details.inst.recording && (p.ticker instanceof MidiSequencer)) {
                        p.ticker.setBuffer(this.recordBuffer, null)
                        p.change()
                    }
                }
            })
        }
        this.recordBuffer = []
    }

    pause() {
        this.pulse.pause()
    }

    isRunning(): boolean {
        return this.pulse.running
    }

    /*
     setPlayerType(t:string) {
         this.playerType=t
     }
 
     /*
     window.navigator.requestMIDIAccess().then(function(midiAccess) {
         midiAccess.inputs.forEach(function(midiInput) {
             self.focusPlayer.listenToMidi(midiInput)
         });
     });
     */

} 