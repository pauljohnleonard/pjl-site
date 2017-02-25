import { Ticker } from "./ticker"
import { Savable } from "./savable"
import { SettingsService } from '../services/settings.service'
import { Thing } from './thing'
import { Ramper } from "./ramper"

declare var audioContext: any

/**
 *
 *   Contract is to call the tick of tickers.
 *
 *    The beat will advance by  beat/ticksperbeat after each call
 * 
 *    The client can use this.beat and this.time to determine the position of play and the associated timen to 
 *    play an event at this time.
 *
 *    The intention is that clients can schedule all the events up to the beat. 
 *
 *    The time of any beat can be found using this get this.getTimeOfBeat(beat).
 *
 *    All the pulse times are offset by lookahead which should be greater than the maximum beat.
 * 
 *       
 * 
 *  
 *    real TIme   
 *   
 */

export class Pulse extends Savable implements Thing {

    /**  current beat to be used by clients */
    timeSigs: any = ["3/4", "4/4", "3:2/4", "2:3/4", "3:3/8", "3:2:2/8", "3:3:3:3/8"]
    type: string = "Pulse"
    beat: number

    /**   time to use for scheduling event on current beat. Maybe ahead of real time to avoid underruns */
    time: number

    running: boolean = false
    bpm: number
    tickLen: number
    private clients: Array<Ticker> = []
    state: Array<number>
    pauseTime: number
    lookahead: number = 0.5

    timeSig: string                 //  See time sigs

    pulsesPerBeat: number            //  1/4    is 1    1/8 is 2  
    subDivs: Array<number>           // substructure pulse per submetric
    patternLength: number            // total of pulses per bar
    accents: Array<number>

    rampers: Array<Ramper>=[]


    constructor(ticksPerBeat: number, bpm: number, public settings: SettingsService) {
        super()
        this.bpm = bpm
        this.beat = 0
        this.tickLen = 1 / ticksPerBeat
        this.clients = []
    
        this.rampers=[]
        for (let i=0;i<4;i++) this.rampers.push(new Ramper(this));
        this.setTimeSig("4/4")
    }

    setRampersFromSig() {

        // Each bar

        this.rampers[0].setTicks([0, this.patternLength / this.pulsesPerBeat])
        
        // Each pulse
        this.rampers[1].setTicks([0, 1 / this.pulsesPerBeat])

        var ticks = [0]
        var sum = 0
        this.subDivs.forEach((s: number) => {
            sum += s
            ticks.push(sum / this.pulsesPerBeat)
        })
        
        this.rampers[2].setTicks(ticks)

    }

    setTimeSig(sig: string) {
        this.timeSig = sig
        var toks = sig.split('/')
        var subs = toks[0].split(":")
        this.subDivs = []
        var sum = 0
        this.accents = []

        subs.forEach((x: string) => {
            this.accents.push(1)
            var val: number = +x
            this.subDivs.push(val)
            sum += val
            for (let i = 1; i < val; i++) {
                this.accents.push(2)
            }
        })
        this.accents[0] = 0
        this.patternLength = sum
        this.pulsesPerBeat = +toks[1] / 4
        this.setRampersFromSig()    
    }


    tick(): void {
        if (this.running) {
            var delta = this.getTime() - this.time
            var nextBeat = this.beat + delta * this.bpm / 60
            while (this.beat + this.tickLen <= nextBeat) {
                this.state = []
                this.clients.forEach((client) => { client.tick() })
                this.beat += this.tickLen
                this.time += this.tickLen * 60 / this.bpm
            }
        }
    }


    addClient(client: Ticker): void {
        this.clients.push(client)
    }

    removeClient(client: Ticker): void {

        let index = 0

        for (let i = 0; index < this.clients.length; index++) {
            if (this.clients[index] === client) {
                this.clients.splice(index, 1);
                return;
            }
        }

    }


    /** get the current time with */

    getTime(): number {
        return audioContext.currentTime + this.settings.playahead
    }


    /** return the time to schedule a beat */

    getTimeOfBeat(beat: number): number {
        var dBeat: number = beat - this.beat

        var t: number = this.time + dBeat * 60 / this.bpm

        if (t < audioContext.currentTime) {
            console.log(" beat in the past " + t + " " + audioContext.currentTime)
            console.log(new Error().stack)
        }
        return t
    }

    /** return beat that would be playing at this instant in time
    */
    getBeatNow(): any {
        var dT = this.getTime() - this.time
        var beat = this.beat + dT * this.bpm / 60
        return beat
    }

    stop(): void {
        this.running = false
        this.clients.forEach((c) => {
            if (c.stop !== undefined) {
                c.stop()
            }
        })
    }

    start(): void {
        this.beat = 0
        this.time = this.getTime()
        this.running = true

        this.clients.forEach((c) => {
            if (c.start !== undefined) {
                c.start()
            }
        })
    }

    pause(): void {
        if (this.running === true) {
            this.pauseTime = this.getTime()
            this.running = false
        } else {
            this.time += this.getTime() - this.pauseTime
            this.running = true
        }
    }


    saveDB(saver: any): any {

        if (this.id !== null) return this.id

        var postItems: any = {}

        postItems.type = "Pulse"
        postItems.bpm = this.bpm
        postItems.sig = this.timeSig

        var id = saver.newIDItem('players', postItems)
        return id
    }

    loadSnap(pulseSnap: any) {

        this.bpm = pulseSnap.child("bpm").val()
        var sig = pulseSnap.child("sig").val()
        if (sig !== null) this.setTimeSig(sig)

    }


}