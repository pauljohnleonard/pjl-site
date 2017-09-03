
import { SamplesService } from '../services/samples.service'
import { Instrument } from '../model/instrument';

declare const audioContext: any

const TOL = 0.0001

export class Sample {
    gain: any

    constructor(public role: string, public buffer: any, public name: string) {
        this.gain = audioContext.createGain();
        this.gain.connect(audioContext.destination);
    }


    play(when: number, vel: number): void {
        this.gain.gain.value = 0.1
        const source: any = audioContext.createBufferSource();
        source.buffer = this.buffer
        source.connect(this.gain);
        source.start(when)
    }

    setBuffer(name: string, buffer): void {
        this.buffer = buffer
        this.name = name
    }

    setGain(val: number): void {
        this.gain.gain.value = val
    }
}


export class SamplePlayer extends Instrument {


    static _samples: Array<any> = []

    static pallete: Array<any> = []
    static _names: Array<string> = []

    active = false

    samples: Array<Sample> = []

    type = 'SamplePlayer'

    names: Array<string> = []



    playNote(key: any, vel: number, when: number) {

        const sample = this.samples[key]
        if (sample !== undefined) {
            sample.play(when, vel)

            if (when > 0 && this.monitor) {
                this.monitor.spareTime(when - audioContext.currentTime)

            }
        }
    }

    mute(yes: boolean) {
        throw new Error("Method not implemented.");
    }

}
