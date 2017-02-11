import { Component, Input, OnInit } from '@angular/core';
import {AI}  from  "./ai"
import { SFService } from '../services/sf.service'
import { NetService } from '../services/net.service'

@Component({
    selector: "ai-detail",
    template: 
     `<div *ngIf="ai">

      <md-card>
          <md-card-actions>
                 <button md-button   [md-menu-trigger-for]="menu"> <!-- style="float:right;"-->
                    {{aiType.name}}
                 </button> 

                 <md-menu #menu="mdMenu" >
                        <button md-menu-item *ngFor="let net of netService.types" [value]="ai.net.name" (click)="aiType=net">
                          {{ net.name }}
                   </button>
                </md-menu>
   
       
                <md-input *ngFor="let n of nHidden;let i = index"  [(ngModel)]="nHidden[i]"  type="number"  value="20" min="1" max="30"  > </md-input>
          
              <button md-icon-button (click)="implant()" [disabled]="false"><md-icon>system_update_alt</md-icon> </button>
          </md-card-actions>
      </md-card>
    </div>` 
    //styleUrls: ["../css/mystyle.css"]
})

export class AIDetailComponent {
   @Input() ai: AI;
   aiType:any
   nHidden:Array<number>
    
   constructor(private netService:NetService){
       
   }

   ngOnInit() {
       for (let net of this.netService.types){
           if (net.name === this.ai.net.name) {
             this.aiType=net
           }
       }
       this.nHidden=this.ai.net.nHidden

       //  console.log("HELLO"+this.ai.out)
  }

    implant() {
        this.ai.implant({type:this.aiType,nHidden:this.nHidden})
    }
}
