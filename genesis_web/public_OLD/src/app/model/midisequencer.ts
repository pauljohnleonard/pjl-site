import { Player } from './player'
import { Pulse } from './pulse'
import { Ticker } from './ticker'
import { Savable } from './savable'
import { MidiBuffer } from './midibuffer'

const playAhead = 0.0

declare var audioContext: any

export class MidiSequencer implements Ticker {

    buffPtr = 0
    midiBuff: MidiBuffer = null
    pulse: Pulse
    player: Player
    type = 'MidiSequencer'

    constructor(player: Player) {
        this.player = player
        this.pulse = player.music.pulse
    }

    tick(): void {

        if (this.midiBuff) {

            const beatNow = this.pulse.getBeatNow() + playAhead

            while ((this.buffPtr < this.midiBuff.buff.length)) {

                const midiBeat = this.midiBuff.buff[this.buffPtr].stamp

                const t = this.pulse.getTimeOfBeat(midiBeat)

                if (t < audioContext.currentTime) {
                    console.log(' UNDERRUN ' + t + ' ' + audioContext.currentTime)
                }

                if (midiBeat > beatNow) { break }
                const ev = this.midiBuff.buff[this.buffPtr].effect
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
            const id = this.midiBuff.saveDB(saver)
            if (id !== null) { items.midi = id }
        }
    }

}
