import { Pulse } from "./pulse"
import { Ticker } from "./ticker"

/*
class RamperDisplayer(ramp,element) {
    this.ramp = Ramper
    this.element = element  

}   	

RamperDisplayer.prototype.tick = function () {
    this.element.innerHTML = this.ramp.toHTML()
}
*/


const TOL = 0.00001

export class Ramper implements Ticker {

    tickPtr: number
    tStart: number
    val: number
    type: string = "Ramper"
    ticks: Array<number>

    constructor(private pulse: Pulse,) {
        this.pulse = pulse
        this.pulse.addClient(this)
    }

    setTicks(ticks: Array<number>) {
        this.ticks=ticks
    }
            

    start() {
        this.tickPtr = 0
        this.tStart = 0
    }

    stop() { }

    tick() {

        if (this.ticks === undefined) {
            this.val=0.0
          
        } else {

            var time: number = this.pulse.beat - this.tStart
            while (true) {
                var t1 = this.ticks [this.tickPtr]
                var t2 = this.ticks[this.tickPtr + 1]
                if (time + 0.00001 >= t2) {        //  advance a bit so we always catch the sharp rise
                    this.tickPtr = this.tickPtr + 1
                    if (this.tickPtr >= this.ticks.length - 1) {
                        this.tStart += this.ticks[this.ticks.length - 1]
                        this.tickPtr = 0
                        time -= this.ticks[this.ticks.length - 1]
                    }
                    continue
                } else if (time + TOL < t1) {
                    console.log("time<t1 SHOULD NOT HAPPEN ")   // Well I guess 
                }
                this.val = (t2 - time) / (t2 - t1)
                break;
            }
        }
        this.pulse.state.push(this.val)
    }

    addPostItems(items: any, saver: any): void {
        console.log(" DO NOTHING ")
    }
}

/*
Ramper.prototype.toHTML = function()  {
    return    this.tickPtr + " :  " + this.val 
}
*/
