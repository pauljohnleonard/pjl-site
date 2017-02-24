import { Ticker } from "./ticker"
import { Pulse } from "./pulse"
import { SamplesService } from "../services/samples.service"

declare var audioContext: any

var TOL: number = 0.0001

export class Metro implements Ticker {

    pulseNext: number = 0
    accent: any
    ord: any
    active: boolean = false
    nDivs: number = 16
    currentIndex: number = 0
    samples: Array<any> = []
    gain: any
    type:string ="Metro"


    constructor(public pulse: Pulse, private samplesService: SamplesService, public monitor: any) {

        this.pulse.addClient(this)

        samplesService.load("sounds/metro/christeck/Metronom Claves.mp3").then((source: any) => {
            this.samples[0] = source
        }).catch((reason: any) => {
            console.log(reason)
        });

        samplesService.load("sounds/metro/dan/metro_bar.mp3").then((source: any) => {
            this.samples[1] = source
        }).catch((reason: any) => {
            console.log(reason)
        });

        samplesService.load("sounds/metro/dan/metro_beat.mp3").then((source: any) => {
            this.samples[2] = source
        }).catch((reason: any) => {
            console.log(reason)
        });

        this.gain = audioContext.createGain();
        this.gain.gain.value = 0.1
        this.gain.connect(audioContext.destination);
    }


    start() {
        this.pulseNext = 0
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

        var source: any = audioContext.createBufferSource();

        var index = (pulseNow % this.pulse.patternLength) | 0

        var ii = this.pulse.accents[index]
        source.buffer = this.samples[ii]


        source.connect(this.gain);
        source.start(this.pulse.time)

        if (this.monitor) this.monitor.spareTime(this.pulse.time - audioContext.currentTime)


    }

    addPostItems(items: any, saver: any): void {
        console.log(" DO NOTHING ")
    }
}
