import { Component, Input, Output, EventEmitter,ViewChild } from '@angular/core';
import { Player } from './player'
import { AIDetailComponent } from './ai-detail.component'
import { InstrumentDetailComponent } from './instrument-detail.component'
import { AI } from './ai'

import { MdCard} from '@angular/material'

@Component({
  moduleId: "app/music/",
  selector: "player-detail",
  templateUrl:"player-detail.html"
})



export class PlayerDetailComponent {
  @ViewChild(MdCard) card: MdCard
  @Input() player: Player;
  @Output() playerSelected = new EventEmitter();
 
  soloed:boolean=false
  muted:boolean=false


  constructor() {

  }

  getAI(): AI {
    return this.player.ai

  }

  solo() {
    this.player.solo()

  }

  mute() {
    this.player.mute()
  }

  
  toggleRecord() {

    var player = this.player
    player.recording = !player.recording;
    
  }


  removeMe() {
    this.player.removeMe()
  }
  
  

  
}