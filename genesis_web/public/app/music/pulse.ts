import {Ticker} from "./ticker"

declare var audioContext:any

export class Pulse {

    running:boolean=false
    beatsPerSec:number
    beat:number
    tickLen:number
    clients:Array<Ticker>=[]
    time:number
    state:Array<number>
    pauseTime:number


    constructor(ticksPerBeat:number, beatsPerSec:number) {
        this.beatsPerSec = beatsPerSec
        this.beat = 0
        this.tickLen = 1 / ticksPerBeat
        this.clients = []   
    }

    tick() {
        
        if (this.running) {
            var delta = audioContext.currentTime - this.time
            var nextBeat = this.beat + delta * this.beatsPerSec
            while (this.beat + this.tickLen <= nextBeat) {
                this.state = []
             
                this.clients.forEach((client) => { client.tick() })

                
                this.beat += this.tickLen
                this.time += this.tickLen / this.beatsPerSec    
        }
        }
    }


    stop() {
        this.running = false
          this.clients.forEach((c) => {
            if (c.stop !== undefined) {
                c.stop()
            }
        })
    }

    start() {
        this.beat = 0
        this.time = audioContext.currentTime
        this.running = true

        this.clients.forEach((c) => {
            if (c.start !== undefined) {
                c.start()
            }
        })

    }

    pause() {

        if (this.running === true) {
            this.pauseTime = audioContext.currentTime
            this.running = false
        } else {
            this.time += audioContext.currentTime - this.pauseTime
            this.running = true
        }
    }

}