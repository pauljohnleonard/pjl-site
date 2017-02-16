import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Player } from './player'
import { AIDetailComponent } from './ai-detail.component'
import { InstrumentDetailComponent } from './instrument-detail.component'
import { AI } from './ai'


@Component({
  selector: "player-detail",
  template:
  ` 
   <style>
      .tran{
          position:relative;
        
          padding:2px;
          vertical-align: middle;
      }
      .clear{
        position:absolute;
        top: 0%;
        left: 0%;
        min-width:10px;
        width:36px;
        height:36px;
        padding:0px;
      }
      
   </style>


<md-card style="background:#F0F0FF">
   <md-card-content>
    <button md-button class="clear" (click)="removeMe()"><img src="images/ic_clear_black_18dp_2x.png"/></button>
       <md-grid-list cols="12" rowHeight="24px">
           
       <md-grid-tile    [colspan]=9   >
              <instrument-detail [inst]="player.details.inst"> </instrument-detail>          
       </md-grid-tile>
      
       <md-grid-tile>
        <button class="tran" *ngIf="player.details.inst.recording" md-button (click)="toggleRecord()" style="color:#000000;background-color:DeepPink"><div>R</div></button>          
        <button class="tran" *ngIf="!player.details.inst.recording" md-button (click)="toggleRecord()" style="">R</button>          
      </md-grid-tile>


        <md-grid-tile>
        <button class="tran" *ngIf="player.soloed" md-button (click)="solo()" style="color:#000000;background-color:orange">S</button>          
        <button class="tran" *ngIf="!player.soloed" md-button (click)="solo()" style="">S</button>          
      </md-grid-tile>
      
        <md-grid-tile>
        <button class="tran" *ngIf="player.muted" md-button (click)="mute()" style="color:#FFFFFF;background-color:indigo">M</button>          
        <button class="tran" *ngIf="!player.muted" md-button (click)="mute()" style="">M</button>          
      </md-grid-tile>
      
      
    
      </md-grid-list>
      <div *ngIf="player.details.ai">
      <ai-detail [ai]="player.details.ai"> </ai-detail> 
      </div>
    
   </md-card-content>
</md-card>
`
  //,
  //  styleUrls: ["css/mystyles.css"]
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