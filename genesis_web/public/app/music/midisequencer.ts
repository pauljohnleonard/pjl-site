import { Player } from "./player"
import { Pulse } from "./pulse"
import { Ticker } from "./ticker"
import { Savable } from './savable'
import { MidiBuffer } from './midibuffer'

const playAhead: number = 0.0
declare var audioContext: any

export class MidiSequencer implements Ticker {

    buffPtr: number = 0
    midiBuff: MidiBuffer = null
    pulse: Pulse
    player: Player
    type:string="MidiSequencer"
    
    constructor(player: Player) {
        this.player = player
        this.pulse = player.music.pulse
    }

    tick(): void {

        if (this.midiBuff) {

            var beatNow = this.pulse.getBeatNow() + playAhead

            while ((this.buffPtr < this.midiBuff.buff.length)) {

                let midiBeat = this.midiBuff.buff[this.buffPtr][0]

                let t = this.pulse.getTimeOfBeat(midiBeat)

                if (t < audioContext.currentTime) {
                    console.log(" UNDERRUN " + t + " " + audioContext.currentTime)
                }

                if (midiBeat > beatNow) break
                let ev = this.midiBuff.buff[this.buffPtr][1]
                this.player.inst.playEvent(ev, t)
                this.buffPtr++
            }
        }
    }


    setBuffer(buff: Array<any>, id: any): void {
        // TODO SAVE PREV
        this.midiBuff = new MidiBuffer(buff, id)
    }

    start(): void {
        this.buffPtr = 0
    }

    stop(): void {

    }

    addPostItems(items: any, saver: any) {
        items.type = this.type
        if (this.midiBuff !== null) {
            var id = this.midiBuff.saveDB(saver)
            if (id !== null) items.midi = id
        }
    }

}


