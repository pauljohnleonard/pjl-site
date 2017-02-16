import { Instrument } from './instrument'
import { Ticker } from './ticker'
import { Music } from './music'
import { Savable } from './savable'
import { MidiSequencer } from './midisequencer'



var players:Array<Player>=[] 

export class Player extends Savable {
    
    soloed:boolean = false
    tmpMuted:boolean = false
    muted:boolean = false
    ticker:Ticker = null

    details:any={}
           
    constructor(public music:Music) {
        super()
        players.push(this)
        this.music.pulse.addClient(this)
    }

    tick() {
        if (this.ticker) this.ticker.tick()
    }

    start() {
      if (this.ticker) this.ticker.start()
  
    }
    
    stop() {
      if (this.ticker) this.ticker.stop()
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

    removeMe() {
        setTimeout(()=>{
            this.music.removePlayer(this)
        },0);
    }


    saveDB(saver:any) : any {
     
         if (this.id !== null) return this.id 
         
         var postItems:any={}

         if (this.ticker instanceof MidiSequencer) { 
             postItems.type="MidiPlayer"
             if (this.ticker.midiBuff !== null ) {        
                var id=this.ticker.midiBuff.saveDB(saver)
                if (id !==null) postItems.midi=id                  
            } 
         }

         
        postItems.inst=this.details.inst.name
             
        var id=saver.newIDItem('players',postItems)
        return id
 
        
    }
    
}