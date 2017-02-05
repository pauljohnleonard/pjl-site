import { Component, Input ,ViewChild ,NgOnInit} from '@angular/core';
import { Player } from './player'
import { AIDetailComponent } from './ai-detail.component'
import { InstrumentDetailComponent } from './instrument-detail.component'

var color=[]
color[true]='accent'
color[false]='primary'


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

    <instrument-detail> </instrument-detail> 
    <ai-detail> </ai-detail> 

</md-card>
`,
    styleUrls: ["css/mystyles.css"]
})



export class PlayerDetailComponent {
  @Input() player: Player;
  @ViewChild(InstrumentDetailComponent) instView : InstrumentDetailComponent
  @ViewChild(AIDetailComponent) aiView : AIDetailComponent
  
  //ai:AI

  constructor(){
   // ai=this.player.details.ai
  
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
      return color[this.player.soloed]
  }  

  muteColor() {
      var sel:boolean=this.player.muted  || this.player.tmpMuted
      return color[sel]
  }  


  ngOnInit() {
      this.instView.inst=this.player.details.inst
      this.aiView.ai=this.player.details.ai
  }
}
