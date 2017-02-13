import { Ticker } from "./ticker"
import { Pulse } from "./pulse"
import { SamplesService } from "../services/samples.service"

declare var audioContext: any

var TOL: number = 0.0001

export class Metro implements Ticker {

    beatNext: number = 0
    accent: any
    ord: any
    active: boolean = false
    nDivs:number = 16
    currentIndex:number = 0

    constructor(public pulse: Pulse, private samplesService: SamplesService) {
  
        this.pulse.clients.push(this)

        samplesService.load("sounds/metro/1.wav").then((source: any) => {
            this.accent = source
        }).catch((reason: any) => {
            console.log(reason)
        });

        samplesService.load("sounds/metro/2.wav").then((source: any) => {
            this.ord = source
        }).catch((reason: any) => {
            console.log(reason)
        });
    }


    start() {
        this.beatNext = 0
    }

    stop() { 


    }



    tick() {


           
        if (!this.active) return
        
        //console.log(this.pulse.beat)
        var beatNow:number = Math.floor(this.pulse.beat + TOL);
        var fract=this.pulse.beat-beatNow

        if (Math.abs(fract) > 2*TOL) return

                var source: any = audioContext.createBufferSource();
                if ((beatNow % 4) === 0) {
                    source.buffer = this.accent
                //   console.log("A " + this.pulse.beat + " " + this.beatNext)
                } else {
                    source.buffer = this.ord
                //    console.log("O " + this.pulse.beat + " " + this.beatNext)
                }

                if (source.buffer) {
                    source.connect(audioContext.destination);
                    source.start(this.pulse.time)
                }
        
        
    }
}
