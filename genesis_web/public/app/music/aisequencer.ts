import { Mapper, MappedPlayer } from "./mapper"
import { Ticker }  from "./ticker"
import { AI } from  "./ai"
import { Pulse } from  "./pulse"

export class AISquencer implements Ticker {

        //ai:AI
        //player:MappedPlayer
        last:Array<number>
        thresh:number
        state:Array<number>
        playing:boolean    
        running:false
        type:string= "AISequencer"

    constructor(public ai:AI, public player:MappedPlayer,public pulse:Pulse) {

        this.last = ai.net.out
        this.thresh = 0.5
        this.state = new Array(this.last.length)   
        this.playing = true
        this.ai=ai
    }


    velCurve(x:number) :number {
            return 1.0 - Math.exp(-x * 20)    
    }

    start(){}

    stop(){}
  
    tick() {

        var when=this.pulse.time
          
        var out = this.ai.net.activate(this.pulse.state)
        
        // TODO implement resets for all tickers
        if (this.ai.net.activateCnt < 2) {
            this.state.fill(1)
            this.last = out
            return
        }
        //if ( cnt > 1) this.playing=true;
        out.forEach((v, i, a) => {
            if (v > this.thresh && this.state[i] === 0) {
                var vel = this.velCurve(v - this.last[i])
                if (this.playing) {
                    this.player.playNote(i, vel,when)
                    this.state[i] = vel
                  //  console.log("P "+ this.pulse.beat + " " +this.pulse.state[0])

                }
            } else if (v < this.thresh && this.state[i] !== 0) {
                this.player.playNote(i, 0,when)
                this.state[i] = 0
            }
        }
        )
        this.last = out
    }

    addPostItems(items: any, saver: any) {
         items.type = this.type
         var id=this.ai.saveDB(saver)
         items.ai=id
    }
}