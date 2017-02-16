import { Component, Input, OnInit } from '@angular/core';
import {AI}  from  "./ai"
import { SFService } from '../services/sf.service'
import { NetService } from '../services/net.service'

@Component({
    selector: "ai-detail",
    template: 
     `
      <md-card *ngIf="ai && ai.net" >
          <md-card-content style="height:40px;">
                 <button md-button  *ngIf="aiName" [md-menu-trigger-for]="menu"> 
                    {{aiName}}
                 </button> 

                 <md-menu #menu="mdMenu" >
                        <button md-menu-item *ngFor="let n of netService.names" [value]="ai.net.name" (click)="aiName=n">
                          {{ n }}
                   </button>
                </md-menu>
   
       
                <md-input *ngFor="let n of nHidden;let i = index"  [(ngModel)]="nHidden[i]"  type="number"  value="20" min="1" max="30"  > </md-input>
          
              <button md-icon-button (click)="implant()" [disabled]="false"  style="float:right" ><img src="images/die_roll.png" /> </button>
          </md-card-content>
      </md-card>
    ` 
})

export class AIDetailComponent {
   @Input() ai: AI;
   
   aiName:any=null
   nHidden:Array<number>=[]
    
   constructor(private netService:NetService){

      
   }

   ngOnInit() {
    console.log("NGINIT")
       for (let name in this.netService.types) {
      
           if (name === this.ai.net.netname) {
             this.aiName=name
             console.log("DONE")
           }
       }
       this.nHidden=this.ai.net.nHidden 
       //  console.log("HELLO"+this.ai.out)
  }

    implant() {
        this.ai.implant({type:this.netService.types[this.aiName],nHidden:this.nHidden})
    }
}
