import { Component, Input, OnInit } from '@angular/core';
import {AI}  from  "./ai"
import { SFService } from '../services/sf.service'


@Component({
    selector: "ai-detail",
    template: 
     `<div *ngIf="ai">

      <md-card>
          <md-card-actions>
                 <button md-button   [md-menu-trigger-for]="menu"> <!-- style="float:right;"-->
                    {{aiType}}
                 </button> 

                 <md-menu #menu="mdMenu" >
                         <button md-menu-item *ngFor="let t of ai.types" [value]="playerType" (click)="aiType=t">
                          {{ t }}
                   </button>
                </md-menu>
   
           
              <md-input [(ngModel)]="nHidden" type="number" value="20" min="1" max="30"> </md-input>
          
              <button md-icon-button (click)="implant()" [disabled]="false"><md-icon>system_update_alt</md-icon> </button>
          </md-card-actions>
      </md-card>
    </div>` 
    //styleUrls: ["../css/mystyle.css"]
})

export class AIDetailComponent {
   @Input() ai: AI;
   aiType:string
   nHidden:number
    
   constructor(){
    }

     ngOnInit() {
       this.aiType=this.ai.net.name
       this.nHidden=this.ai.net.nHidden

       //  console.log("HELLO"+this.ai.out)
    }

    implant() {
        this.ai.implant({type:this.aiType,nHidden:this.nHidden})
    }
}
