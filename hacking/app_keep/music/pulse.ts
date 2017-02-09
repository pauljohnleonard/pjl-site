import {Ticker} from "./ticker"

declare var audioContext:any

export class Pulse {

    running:boolean=false
    beatsPerSec:number
    beat:number
    tickLen:number
    clients:Array<Ticker>=[]
    lastTime:number
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
            var delta = audioContext.currentTime - this.lastTime
            var nextBeat = this.beat + delta * this.beatsPerSec
            while (this.beat + this.tickLen <= nextBeat) {
                this.state = []
                this.beat += this.tickLen
                this.lastTime += this.tickLen / this.beatsPerSec
                this.clients.forEach((client) => { client.tick() })
            }
        }
    }


    stop() {
        this.running = false
    }

    start() {
        this.beat = 0
        this.lastTime = audioContext.currentTime
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
            this.lastTime += audioContext.currentTime - this.pauseTime
            this.running = true
        }
    }

}