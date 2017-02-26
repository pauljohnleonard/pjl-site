import { Ticker } from "./ticker"
import { Pulse } from "./pulse"
import { SamplesService } from "../services/samples.service"

declare var audioContext: any

var TOL: number = 0.0001



export class MetroSample {
    gain: any

    constructor(public role:string,public buffer: any, public name: string) {
        this.gain = audioContext.createGain();
        this.gain.gain.value = 0.1
        this.gain.connect(audioContext.destination);
    }

    play(when: number): void {
        let source: any = audioContext.createBufferSource();
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

    active: boolean = false

    samples: Array<MetroSample> = []
    type: string = "Metro"
    static _names:Array<string> =[]
    names:Array<string>=[]

    constructor(public pulse: Pulse, private samplesService: SamplesService, public monitor: any) {

        this.pulse.addClient(this)
        this.names = Metro._names
        var count = 0

        for (let name in Metro._samples) {
            var i = count++
            samplesService.load(Metro._samples[name]).then((buff: any) => {
                Metro.pallete[name] = buff
                if (name === "Clave") this.samples[0] = new MetroSample("bar",Metro.pallete[name], name)
                if (name === "Taktell") this.samples[1] = new MetroSample("pulse",Metro.pallete[name], name)
                if (name === "DanBeat") this.samples[2] = new MetroSample("accent",Metro.pallete[name], name)
            }).catch((reason: any) => {
                console.log(reason)
            });
        }

    }


    start() {

    }

    stop() {

    }


    tick() {

        //console.log(this.pulse.time  + " " + audioContext.currentTime)

        if (!this.active) return

        //console.log(this.pulse.beat)
        var pulseNow: number = Math.floor(this.pulse.beat * this.pulse.pulsesPerBeat + TOL);

        var fract = this.pulse.beat * this.pulse.pulsesPerBeat - pulseNow

        if (Math.abs(fract) > 2 * TOL) return


        var index = (pulseNow % this.pulse.patternLength) | 0

        var ii = this.pulse.accents[index]

        var sample = this.samples[ii]

        if (sample !== undefined) sample.play(this.pulse.time)

        if (this.monitor) this.monitor.spareTime(this.pulse.time - audioContext.currentTime)


    }

    addPostItems(items: any, saver: any): void {
        console.log(" DO NOTHING ")
    }
}


Metro._samples["Clave"] = "sounds/metro/christeck/Metronom Claves.wav"
Metro._samples["Taktell"] = "sounds/metro/christeck/Metronom Taktell Junior.wav"
Metro._samples["DanBar"] = "sounds/metro/dan/metro_bar.wav"
Metro._samples["DanBeat"] = "sounds/metro/dan/metro_beat.wav"
Metro._samples["FrankBar"] = "sounds/metro/frank/metro_1.wav"
Metro._samples["FrankBeat"] = "sounds/metro/frank/metro_other.wav"

for(let n in Metro._samples) {
    Metro._names.push(n)
}
