import { DBService } from '../app/services/db.service'
import { NetService } from '../app/services/net.service'
import { SamplesService } from '../app/services/samples.service'
import { SettingsService } from '../app/services/settings.service'
import { AI } from './ai';
import { AISquencer } from './aisequencer';
import { Metro } from './metro'
import { Mapper, MappedPlayer } from './mapper';
import { Instrument } from './instrument'
import { Pulse } from './pulse'
import { Player } from './player'
import { MidiEvent } from './midievent'
import { MidiSequencer } from './midisequencer'
import { Savable } from './savable'
import { Generator } from './generator'
import { Thing } from './thing'
import { Midi } from './midi'
import { SFService } from 'app/services/sf.service';


declare var firebase: any


export class Music extends Savable {

    playerTypes: Array<string> = ['AI', 'midi']
    things: Array<Thing> = []
    pulse: Pulse


    metro: Metro
    recording = false
    recordBuffer: Array<any> = []
    playHead = 0
    title = 'A Song'

    constructor(private dbService: DBService, private samplesService: SamplesService,
        private netService: NetService, private monitor: any,
        public settings: SettingsService,
        public sfService: SFService) {
        super()
        console.log('new music constructed')
        const self = this
        if (window.navigator['requestMIDIAccess']) {        //  does not exist in some browsers
            window.navigator['requestMIDIAccess']().then(
                (midiAccess: any) => {
                    midiAccess.inputs.forEach(function (midiInput: any) {
                        console.log(midiInput)
                        midiInput.onmidimessage = function (event: any) {
                            //  console.log(event.data)

                            if (self.recording && self.pulse.running) {
                                const stamp = self.pulse.getBeatNow()
                                self.recordBuffer.push([stamp, event.data])
                            }
                            self.things.forEach((p) => {
                                if (p instanceof Player) {
                                    if (p.recording) { p.inst.playEvent(event.data, 0) }
                                }
                            })
                        }
                    })
                }).catch((err) => {
                    console.log(err)
                })
        }
        this.setID(0)
        this.constructorX()
    }


    saveDB(saver: any): any {
        if (this.isSaved()) { return }
        const itemIDs: Array<any> = []

        let playerPos = 0
        let postItems: any = {
        }



        this.things.forEach((p: Player) => {
            const itemID: string = p.saveDB(saver)
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

        let instName;
        switch (playerSnap.child('type').val()) {

            case 'MidiSequencer':
                instName = playerSnap.child('inst').val()
                const midiPlayer = this.addMidiPlayer(instName, pos)
                midiPlayer.setID(playerSnap.key)
                const midiKey = playerSnap.child('midi').val()
                if (midiKey !== null) {
                    const midiRef = firebase.database().ref('midi').child(midiKey);
                    midiRef.once('value').then((midi: any) => {
                        const midiData: any = JSON.parse(midi.val())
                        const seq: MidiSequencer = <MidiSequencer>midiPlayer.ticker
                        seq.setBuffer(midiData, midiKey)
                    })
                }
                break


            case 'AISequencer':
                instName = playerSnap.child('inst').val()
                const aiKey = playerSnap.child('ai').val()
                const aiRef = firebase.database().ref('ai').child(aiKey);
                aiRef.once('value').then((aiSnap: any) => {

                    const netKey = aiSnap.child('net').val()
                    const netRef = firebase.database().ref('net').child(netKey)
                    netRef.once('value').then((netSnap: any) => {
                        const netInfo = netSnap.val()
                        this.addAIPlayer(instName, netInfo, pos)
                    })
                })
                break;


            case 'Pulse':
                this.pulse.loadSnap(playerSnap)

                break
            default:
                console.log('UNKOWN TYPE : ' + playerSnap.child('type').val())
        }

    }

    loadDB(songref: any) {
        songref.once('value').then((song: any) => {
            song.forEach((player: any) => {

                const playerref = firebase.database().ref('players').child(player.key);
                playerref.once('value').then((playerSnap: any) => {
                    this.loadPlayer(playerSnap, player.val())

                })
            })
        })
    }


    loadMidi(midi) {

        const ticksPerBeat = midi.header.ticksPerBeat;
        let pos = 0;
        midi.tracks.forEach(track => {
            const lane = new Array<MidiEvent>()
            let instName = null
            let ticks = 0;
            let beat = 0
            track.forEach(element => {
                ticks += element.deltaTime;
                beat = ticks / ticksPerBeat
                switch (element.type) {
                    case 'meta':    /// TODO Meta track
                        switch (element.subtype) {
                            case 'setTempo':
                                const bpm = (1000000 / element.microsecondsPerBeat) * 60 ;
                                console.log('BPM:' + bpm)
                                this.pulse.bpm = bpm
                                break;
                            case 'timeSigniture':
                                const sig = element.numerator + '/' + element.denominator
                                this.pulse.setTimeSig(sig)
                                console.log(' Sig : ' + sig)
                                break;
                            case 'endOfTrack':
                                console.log(' EOT : ' + element.deltaTime)
                                break;
                            case 'trackName':
                                instName = element.text
                                break
                            default:
                                console.log(' Unkown meta subtype : ' + element.subtype)
                        }
                        break

                    case 'channel':

                        switch (element.subtype) {
                            case 'noteOn':
                                lane.push(new MidiEvent(beat, [Midi.NOTE_ON_MASK, element.noteNumber, element.velocity]))
                                break;
                            case 'noteOff':
                                lane.push(new MidiEvent(beat, [Midi.NOTE_OFF_MASK, element.noteNumber, element.velocity]))
                                break;
                            default:
                                console.log(' channel sub type not imlemented yet ; ' + element.subtype)
                        }
                        break;

                    default:
                        console.log(' type not imlemented yet ; ' + element.type)
                }

            })

            if (instName !== null) {

                const midiPlayer = this.addMidiPlayer(instName, pos)
                pos++

                const seq: MidiSequencer = <MidiSequencer>midiPlayer.ticker
                seq.setBuffer(lane, null)
            }
        })
    }


    constructorX() {

        const ticksPerBeat = 12
        const bpm = 120

        this.pulse = new Pulse(ticksPerBeat, bpm, this.settings)
        this.things.push(this.pulse)



        // const majorSeed = [0, 2, 4, 5, 7, 9, 11]
        // const stack3 = [0, 2, 4, 6, 8, 10, 12]

        this.metro = new Metro(this.pulse, this.samplesService, this.monitor)

    }


    addMidiPlayer(name: string, pos: any): Player {
        const player = new Player(this)
        if (pos === null || pos === true) {
            this.things.push(player)
        } else {
            this.things[pos] = player
        }
        const inst = new Instrument(name, this.monitor, this.sfService)
        player.inst = inst
        const midiPlayer = new MidiSequencer(player)
        player.ticker = midiPlayer
        this.change()
        return player
    }



    addAIPlayer(instName: string, net: any, pos: number): Player {

        if (!net) { net = {} }

        if (net.nOut === undefined) { net.nOut = 20 }
        if (net.nHidden === undefined) { net.nHidden = [20] }
        if (net.nIn === undefined) { net.nIn = this.pulse.rampers.length }

        const player = new Player(this)

        if (pos === null) {
            this.things.push(player)
        } else {
            this.things[pos] = player
        }
        const ai = new AI( this.netService )

        player.ai = ai


        if (instName === undefined) { instName = 'marimba' }
        player.name = instName

        const inst = new Instrument(instName, this.monitor, this.sfService)
        player.inst = inst


        if (net.seed === undefined) {
            net.seed = Math.random()
        }
        const generator = new Generator(net.seed)

        ai.init(this.pulse, net)

        const base: Array<number> = [0, 3, 5, 7, 10]

        const mapper = new Mapper(40, base)
        player.mapper = mapper

        const mapPlayer = new MappedPlayer(inst, mapper)

        const playerAI = new AISquencer(ai, mapPlayer, this.pulse)
        player.ticker = playerAI
        this.change()   //  TODO not if we are loading
        return player

    }

    removePlayer(player: Player) {

        this.pulse.removeClient(player)
        let index = 0
        for (; index < this.things.length; index++) {
            if (this.things[index] === player) {
                this.things.splice(index, 1);
                this.change()
                if (this.things.length === 0) {
                    this.setID(0)
                }
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
                    if (p.recording && (p.ticker instanceof MidiSequencer)) {
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
