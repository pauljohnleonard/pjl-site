import { Ticker } from "./ticker"
import { Pulse } from "./pulse"
import { SamplesService } from "../services/samples.service"

declare var audioContext: any



@Component({
    selector: "drumkit-component",
    template: ` HELLO METRO `
})




export class MetroComponent implements Ticker {





    nDivs: number
    currentIndex = 0
    accent: any

    constructor(public pulse: Pulse, private sampleService: SamplesService) {
        this.nDivs = 16
        this.currentIndex = 0

        sampleService.load("sounds/drum_samples/Kit3/snare.wav").then((source) => {
            this.accent = source
        });
    }


    start() {
        this.currentIndex = 0
    }
    stop() { }



    tick() {


        var indexBig = Math.floor(0.5 + this.pulse.beat);

        while (this.currentIndex < indexBig) {
            this.currentIndex += 1
            var rhythmIndex = this.currentIndex % this.nDivs
            if (rhythmIndex %8) { 
            // Convert noteTime to audioContext time.
                var source: any = audioContext.createBufferSource();
                source.buffer = this.accent
                 source.connect(audioContext.destination);
                source.start()
            }

        }
    }


}