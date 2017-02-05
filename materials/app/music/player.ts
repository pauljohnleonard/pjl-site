import { Component } from '@angular/core';

@Component({
  selector: 'player',
  template: ` <p>player<p>
      
      `
})




var players:Array<Player>=[] 


export class Player {
    
    soloed:boolean = false
    tmpMuted:boolean = false
    muted = false
        

    constructor() {
        player.push(this)
    }

    playNote(i, vel) {
        console.log(" Player has no playNote !!!")
    }

    mute()   {
       muted = ! muted    
    }

    solo() {
        soloed = ! soloed

        if (soloed) {
            players.forEach((p)=>{
                if (!p.soloed) p.tmpMuted=true
            })
        } else {
            let soloedCnt=0;
            players.forEach((p)=>{
                if (p.soloed) soloedCnt++  
            }
            if (soloedCnt = 0) {
                 players.forEach((p)=>{
                    tmpMuted = false
                 }  
            }   
        }

    }
}