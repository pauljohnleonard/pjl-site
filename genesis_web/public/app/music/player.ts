import { Instrument } from './instrument'

var players:Array<Player>=[] 

export class Player {
    
    soloed:boolean = false
    tmpMuted:boolean = false
    muted:boolean = false

    details:any={}
           
    constructor() {
        players.push(this)
    }

    mute()   {
       this.muted = ! this.muted 
       this.details.inst.mute(this.muted)
    }

    solo() {

        this.soloed = ! this.soloed
 
        if (this.soloed) this.muted=false

        let soloedCnt=0;
      
        players.forEach((p)=>{
            if (p.soloed) soloedCnt++  
        })
      
        if (soloedCnt == 0) {
             players.forEach((p)=>{
                p.tmpMuted = false
                p.details.inst.mute(this.muted)
             })  
        } else {
           players.forEach((p)=>{
                if (!p.soloed) {
                  p.tmpMuted=true
                  p.details.inst.mute(true)
                }  else {
                  p.tmpMuted=false
                  p.details.inst.mute(false)
                }
            })
        }
    }

}