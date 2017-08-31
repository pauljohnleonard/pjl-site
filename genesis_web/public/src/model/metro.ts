import { Ticker } from './ticker'
import { Pulse } from './pulse'
import { SamplesService } from '../app/services/samples.service'

declare const audioContext: any

const TOL = 0.0001



export class MetroSample {
    gain: any

    constructor(public role: string, public buffer: any, public name: string) {
        this.gain = audioContext.createGain();
        this.gain.gain.value = 0.1
        this.gain.connect(audioContext.destination);
    }

    play(when: number): void {
        const source: any = audioContext.createBufferSource();
        source.buffer = this.buffer
        source.connect(this.gain);
        source.start(when)
    }

    setBuffer(name: string): void {
        this.buffer = Metro.pallete[name]
        this.name = name
    }

    setGain(val: number): void {
        this.gain.gain.value = val
    }
}




export class Metro implements Ticker {

    static _samples: Array<any> = []


    static pallete: Array<any> = []
    static _names: Array<string> = []

    active = false

    samples: Array<MetroSample> = []
    type = 'Metro'

    names: Array<string> = []

    constructor(public pulse: Pulse, private samplesService: SamplesService, public monitor: any) {

        this.pulse.addClient(this)
        this.names = Metro._names
        let count = 0

        for (const name in Metro._samples) {
            if (name) {
                const i = count++
                samplesService.load(Metro._samples[name]).then((buff: any) => {
                    Metro.pallete[name] = buff
                    if (name === 'Clave') {
                        this.samples[0] = new MetroSample('bar', Metro.pallete[name], name)
                    } else if (name === 'Taktell') {
                        this.samples[1] = new MetroSample('pulse', Metro.pallete[name], name)
                    } else if (name === 'DanBeat') {
                        this.samples[2] = new MetroSample('accent', Metro.pallete[name], name)
                    }
                }).catch((reason: any) => {
                    console.log(reason)
                });
            }
        }

    }


    start() {

    }

    stop() {

    }


    tick() {

        // console.log(this.pulse.time  + ' ' + audioContext.currentTime)

        if (!this.active) { return }

        // console.log(this.pulse.beat)
        const pulseNow: number = Math.floor(this.pulse.beat * this.pulse.pulsesPerBeat + TOL);

        const fract = this.pulse.beat * this.pulse.pulsesPerBeat - pulseNow

        if (Math.abs(fract) > 2 * TOL) { return }


        // tslint:disable-next-line:no-bitwise
        const index = (pulseNow % this.pulse.patternLength) | 0

        const ii = this.pulse.accents[index]

        const sample = this.samples[ii]

        if (sample !== undefined) { sample.play(this.pulse.time) }

        if (this.monitor) { this.monitor.spareTime(this.pulse.time - audioContext.currentTime) }


    }

    addPostItems(items: any, saver: any): void {
        console.log(' DO NOTHING ')
    }
}


Metro._samples['Clave'] = 'assets/sounds/metro/christeck/Metronom Claves.wav'
Metro._samples['Taktell'] = 'assets/sounds/metro/christeck/Metronom Taktell Junior.wav'
Metro._samples['DanBar'] = 'assets/sounds/metro/dan/metro_bar.wav'
Metro._samples['DanBeat'] = 'assets/sounds/metro/dan/metro_beat.wav'
Metro._samples['FrankBar'] = 'assets/sounds/metro/frank/metro_1.wav'
Metro._samples['FrankBeat'] = 'assets/sounds/metro/frank/metro_other.wav'


for (const n in Metro._samples) {
    if (n) {
        Metro._names.push(n)
    }
}
