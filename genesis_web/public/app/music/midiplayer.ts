import { Player } from "./player"
import { Pulse } from "./pulse"
import { Ticker } from "./ticker"


const playAhead:number=0.5
declare var audioContext:any

export class MidiPlayer implements Ticker {

    buffPtr: number = 0
    midiBuff: Array<any> = null
    pulse:Pulse
    player:Player

    constructor(player: Player,pulse: Pulse) {
        this.player=player
        this.pulse=pulse
        this.pulse.clients.push(this)
    }

    tick():void {
       
        if (this.midiBuff) {

             var beatNow = this.pulse.getBeatNow()+playAhead

             while ((this.buffPtr < this.midiBuff.length)) {
             
                let midiBeat=this.midiBuff[this.buffPtr][0]
                
                let t = this.pulse.getTimeOfBeat(midiBeat)

                if (t < audioContext.currentTime) {
                    console.log(" UNDERRUN " + t + " " + audioContext.currentTime)
                }
                if (midiBeat > beatNow ) break
                let ev = this.midiBuff[this.buffPtr][1]
                this.player.details.inst.playEvent(ev, t)
                this.buffPtr++
            }
        }
    }


    setBuffer(buff:Array<any>){
        // TODO DAVE PREV
        this.midiBuff=buff

    }
    
    start():void {
        this.buffPtr = 0
    }

    stop():void{

    }

}


