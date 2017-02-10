import { Ticker } from "./ticker"
import { Pulse } from "./pulse"
import { SamplesService } from "../services/samples.service"

declare var audioContext: any



export class Metro implements Ticker {

    nDivs: number
    currentIndex = 0
    accent: any
    ord: any

    constructor(public pulse: Pulse, private samplesService: SamplesService) {
        this.nDivs = 16
        this.currentIndex = 0

        samplesService.load("sounds/metro/1.wav").then((source:any) => {
            this.accent = source
        }).catch((reason:any)=>{
            console.log(reason)
        });

         samplesService.load("sounds/metro/2.wav").then((source:any) => {
            this.ord = source
        }).catch((reason:any)=>{
            console.log(reason)
        });
    }


    start() {
        this.currentIndex = 0
    }
    stop() { }



    tick() {

        //console.log(this.pulse.beat)
        var indexBig = Math.floor(0.5 + this.pulse.beat);

        while (this.currentIndex <= indexBig) {
            var rhythmIndex = this.currentIndex % this.nDivs
            if ((rhythmIndex % 2 == 0)) { 
                var source: any = audioContext.createBufferSource();
                if ((rhythmIndex % 8 == 0))
                    source.buffer = this.accent
                else 
                    source.buffer = this.ord

                
            // Convert noteTime to audioContext time.
               
                source.connect(audioContext.destination);
                source.start()
            }
            this.currentIndex += 1

        }
    }


}