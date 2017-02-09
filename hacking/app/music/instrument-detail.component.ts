import { Component, Input } from '@angular/core';
import { SFService } from '../services/sf.service'
import { Instrument } from './instrument'

@Component({
    selector: "instrument-detail",
  
    template: 
    `
      <div *ngIf="inst">    
                 <button md-button [md-menu-trigger-for]="menu" style="float:middle;" >
                      {{inst.name}}
                 </button>

                 <md-menu   #menu="mdMenu" >
                   <button md-menu-item *ngFor="let t of sfService.names" [value]="instname" (click)="setInst(t)">
                          {{ t }}
                         </button>
                </md-menu>
      </div>  
    `
   // styleUrls: ["css/mystyles.css"]
})


export class InstrumentDetailComponent {
  @Input() inst : Instrument;


  constructor(private sfService:SFService) {
   console.log("Hello")
  }

  setInst(name:string) {
    this.inst.setInst(name) 
  }

}
