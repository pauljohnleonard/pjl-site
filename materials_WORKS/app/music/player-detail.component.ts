import { Component, Input} from '@angular/core';
import { Player } from './player'
import { AIDetailComponent } from './ai-detail.component'
import { InstrumentDetailComponent } from './instrument-detail.component'
import { AI } from './ai'


@Component({
    selector: "player-detail",  
    template: 
    ` 
<md-card>
    <md-card-actions>
    <md-grid-list cols="12" >
    <md-grid-tile
      [colspan]="10"
      [rowspan]=1>
      {{player.details.name}}    <!--span style="flex: 1 1 auto"></span-->           
    </md-grid-tile>
    <md-grid-tile
      [colspan]="1"
      [rowspan]=1>
            <button md-button [color]="soloColor()" (click)="solo()">S</button>
     </md-grid-tile>
     
     <md-grid-tile
      [colspan]="1"
      [rowspan]=1>
            <button md-button [color]="muteColor()" (click)="mute()">M</button> 
     </md-grid-tile>

    </md-grid-list>
    </md-card-actions>

    <instrument-detail [inst]="this.player.details.inst" > </instrument-detail> 
    <ai-detail [ai]="player.details.ai"> </ai-detail> 

</md-card>
`
//,
  //  styleUrls: ["css/mystyles.css"]
})



export class PlayerDetailComponent {
  @Input() player: Player;
  
  

  constructor(){
  
  }
  
  getAI():AI{
    return this.player.details.ai
    
  }

  solo() {
    this.player.solo()
   
  }

  mute() {
    this.player.mute()
  }

  soloColor() {

      if (this.player.soloed) return 'accent'
      return 'primary'
  }  

  muteColor() {
      var sel:boolean=this.player.muted  || this.player.tmpMuted
      if (sel) return 'accent'
      return 'primary'
  }

}
