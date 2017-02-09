import { Component, Input,Output,EventEmitter} from '@angular/core';
import { Player } from './player'
import { AIDetailComponent } from './ai-detail.component'
import { InstrumentDetailComponent } from './instrument-detail.component'
import { AI } from './ai'


@Component({
    selector: "player-detail",  
    template: 
    ` 

<md-card style="background:#F0F0FF">
    <!--md-card-actions-->

    
    <md-grid-list cols="8" >
    <md-grid-tile
      [colspan]="1"
      [rowspan]=1>
      <button md-button (click)="toggleMidi()" ><img src={{pianoButImg}} style="height: 32px" alt="midiin" /></button>          
    </md-grid-tile>
 
    <md-grid-tile
      [colspan]="5"
      [rowspan]=1>
      <instrument-detail [inst]="player.details.inst"> </instrument-detail>          
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
    <!--/md-card-actions-->

    <!--instrument-detail [inst]="this.player.details.inst" > </instrument-detail--> 

    <div *ngIf="player.details.ai">
    <ai-detail [ai]="player.details.ai"> </ai-detail> 
    </div>
</md-card>
`
//,
  //  styleUrls: ["css/mystyles.css"]
})



export class PlayerDetailComponent {
  @Input() player: Player;
  @Output() playerSelected = new EventEmitter();
  pianoButImg:string="PIANO_ICON.png"

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

  toggleMidi() {

    var inst = this.player.details.inst
    inst.midiIn = !inst.midiIn;

    if (inst.midiIn) {
       this.pianoButImg="PIANO_ICON_ACTIVE.png"
    } else {
      this.pianoButImg="PIANO_ICON.png"
  }
  

}
}