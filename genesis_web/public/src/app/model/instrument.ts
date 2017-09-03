/**
 *
 * Abstract class that reperesenents an instrument
 *  Similar to a midi channel
 */

import { Midi } from './midi'

declare var audioContext: any

export abstract class Instrument {
    started = {}
    sustaining = false
    sustainedKeys: Array<boolean> = new Array(128)
    muted = false

    constructor(public name: string, public monitor: any) {
        this.sustainedKeys.fill(false)
    }

    abstract playNote(key: any, vel: number, when: number);
    abstract mute(yes: boolean)

    sustain(yes: boolean, when: number) {

        if (yes) {
            this.sustaining = true
            return
        }

        this.sustaining = false

        this.sustainedKeys.forEach((v: boolean, key: number) => {
            if (v) {
                this.started[key].stop(when)
                delete this.started[key]
                this.sustainedKeys[key] = false
            }
        })
    }

    playEvent(event: Array<number>, when: number) {

        // tslint:disable-next-line:no-bitwise
        const etype = event[0] & Midi.SYSEX_EVENT_MASK   // 0xF0

        if (etype === Midi.NOTE_ON_MASK) {    // 144
            //  console.log(etype)
            const key = event[1]
            const vel = event[2]
            this.playNote(key, vel / 127, when)
        } else if (etype === Midi.NOTE_ON_MASK) { //  128
            //   console.log(etype)
            const key = event[1]
            this.playNote(key, 0, when)
        } else if (etype === Midi.CONTROL_MASK) {  //   176) {
            const cc = event[1]
            if (cc === 64) {
                if (event[2] > 0) {
                    this.sustain(true, when)
                } else {
                    this.sustain(false, when)
                }
            }
        }

    }
}
