import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Player } from './player'
import { AIDetailComponent } from './ai-detail.component'
import { InstrumentDetailComponent } from './instrument-detail.component'
import { AI } from './ai'


@Component({
  moduleId: "app/music/",
  selector: "player-detail",
  templateUrl:"player-detail.html"
})



export class PlayerDetailComponent {
  @Input() player: Player;
  @Output() playerSelected = new EventEmitter();
 
  soloed:boolean=false
  muted:boolean=false
  
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

  
  toggleRecord() {

    var inst = this.player.details.inst
    inst.recording = !inst.recording;
  
  }


  removeMe() {
    this.player.removeMe()
  }
  
}