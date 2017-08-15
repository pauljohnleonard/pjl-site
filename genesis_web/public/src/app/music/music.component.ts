import { Component,Input} from '@angular/core';
import { Music } from './music'

@Component({
    selector: "music-comp",
    template: `
       <md-card>             
            <div style="width: 100%">
              
               <md-input-container>
                    <input mdInput  [(ngModel)]="music.title"/>
                 </md-input-container>

                <button md-mini-fab  [md-menu-trigger-for]="menu" style="float:right;">
                      <md-icon>add</md-icon>
                 </button><br> 
                 <md-menu #menu="mdMenu" >
                         <button md-menu-item *ngFor="let t of music.playerTypes" [value]="playerType" (click)="addPlayerType(t)">
                          {{ t }}
                         </button>
                </md-menu>
              
                <br><br>
                <div *ngFor="let p of music.things">
                   <player-detail *ngIf="p.viewMe" [player]="p" (playerSelected)="slectedPlayer=p"> </player-detail>
                </div>
               </div>    
       </md-card>
    `
})


export class MusicComponent {
    
    @Input() music: Music;
    
    constructor() {
  
    }

    addPlayerType(t:string) {

        switch(t) {
          case "AI":
            this.music.addAIPlayer("marimba",null,null)
            break
          case "midi":
            this.music.addMidiPlayer("marimba",null)
            break
        }
    }


  
} 