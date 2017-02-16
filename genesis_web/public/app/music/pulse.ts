import { Ticker } from "./ticker"

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

export class Pulse {

 /**  current beat to be used by clients */
    beat: number
 
 /**   time to use for scheduling event on current beat. Maybe ahead of real time to avoid underruns */
    time: number
 
    running: boolean = false
    beatsPerSec: number
    tickLen: number
    private clients: Array<Ticker> = []
    state: Array<number>
    pauseTime: number
    lookahead:number = 0.1

    constructor(ticksPerBeat: number, beatsPerSec: number) {
        this.beatsPerSec = beatsPerSec
        this.beat = 0
        this.tickLen = 1 / ticksPerBeat
        this.clients = []
    }

    tick():void {
        if (this.running) {
            var delta = this.getTime()- this.time
            var nextBeat = this.beat + delta * this.beatsPerSec
            while (this.beat + this.tickLen <= nextBeat) {
                this.state = []
                this.clients.forEach((client) => { client.tick() })
                this.beat += this.tickLen
                this.time += this.tickLen / this.beatsPerSec
            }
        }
    }

    

    addClient(client:Ticker):void {
        this.clients.push(client)
    }
    
    removeClient(client:Ticker):void {

        let index=0

        for (let i=0;index<this.clients.length;index++) {
            if (this.clients[index]===client) {    
                 this.clients.splice(index, 1);
                 return;
            }
        }

    }


/** get the current time with */

    private getTime():number {
        return audioContext.currentTime + this.lookahead
    }


/** return the time to schedule a beat */

    getTimeOfBeat(beat:number):number {
        var dBeat:number=beat-this.beat
       
        var t:number=this.time + dBeat/this.beatsPerSec
       
        if (t < audioContext.currentTime) {
            console.log(" beat in the past " + t + " " + audioContext.currentTime)
            console.log(new Error().stack)
        }
        return t
    }

/** return beat that would be playing at this instant in time
*/
    getBeatNow(): any {
        var dT =  audioContext.currentTime - this.time
        var beat = this.beat + dT * this.beatsPerSec
        return beat
    }

    stop():void {
        this.running = false
        this.clients.forEach((c) => {
            if (c.stop !== undefined) {
                c.stop()
            }
        })
    }

    start():void {
        this.beat = 0
        this.time = this.getTime()
        this.running = true

        this.clients.forEach((c) => {
            if (c.start !== undefined) {
                c.start()
            }
        })
    }

    pause():void {
        if (this.running === true) {
            this.pauseTime = this.getTime()
            this.running = false
        } else {
            this.time += this.getTime() - this.pauseTime
            this.running = true
        }
    }

}