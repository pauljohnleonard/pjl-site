import { Component, Input, Output, EventEmitter } from '@angular/core';
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
   
    <md-grid-tile    [colspan]="5"    [rowspan]=1>
      <instrument-detail [inst]="player.details.inst"> </instrument-detail>          
    </md-grid-tile>
   
    <md-grid-tile      [colspan]="1"  [rowspan]=1>
      <button *ngIf="record" md-button (click)="toggleMidi()" style="color:#000000;background-color:#FF0000">R</button>          
      <button *ngIf="!record" md-button (click)="toggleMidi()" style="color:#FF0000;">R</button>          
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
  record:boolean=false
  
  constructor() {

  }

  getAI(): AI {
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
    var sel: boolean = this.player.muted || this.player.tmpMuted
    if (sel) return 'accent'
    return 'primary'
  }

  toggleMidi() {

    var inst = this.player.details.inst
    inst.midiIn = !inst.midiIn;
    this.record=inst.midiIn

  }
}