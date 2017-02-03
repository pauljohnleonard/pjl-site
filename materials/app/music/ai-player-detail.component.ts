import { Component, Input } from '@angular/core';
import { AIPlayer }  from  "app/music/ai-player"
import { SFService } from 'app/services/sf.service'
import { Instrument } from './instrument'

@Component({
    selector: "ai-player-detail",
  
    template: 
    `
<md-card>
    <md-card-actions>

      <!--select [(ngModel)]="selectedItem" #item (change)="onChange(item.value)">
         <option *ngFor="#item of items">{{item}}</option>
      </select-->

         
        <md-select [(ngModel)]="instname"  placeholder="Instrument" (onClose)="setInst()">
            <md-option *ngFor="let name of sfService.names" [value]="name"  >
                   {{ name }}
            </md-option>
       </md-select>

       
        <md-select placeholder="Net type">
            <md-option *ngFor="let type of aiPlayer.ai.types" [value]="type">
                {{ type }}
            </md-option>
        </md-select>

        <md-input [(ngModel)]="nHidden" type="number" value=20 min=1 max=300 id="n_hidden" placeholder="Hidden"> </md-input>
        <button md-raised-button (click)="aiPlayer.ai.implant()">Implant</button>
        <button md-raised-button (click)="aiPlayer.ai.save()">Save</button>
    </md-card-actions>
</md-card>
`,
    styleUrls: ["css/mystyles.css"]
})

export class AIPlayerDetailComponent {
  @Input() aiPlayer: AIPlayer;
  instname:string
  
 
  constructor(private sfService:SFService) {
   console.log("Hello")
  }


  setInst() {
    console.log(this.instname)
    this.aiPlayer.player.inst.setInst(this.instname) 
  }

}
