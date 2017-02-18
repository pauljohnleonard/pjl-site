import { Component, Input } from '@angular/core';
import { SFService } from '../services/sf.service'
import { Instrument } from './instrument'

@Component({
    selector: "instrument-detail",
  
    template: 
    `
      <div *ngIf="inst">    
                 <button md-button [md-menu-trigger-for]="list" style="float:middle;" >
                      {{inst.name}}
                 </button>

                
                 <md-menu   #list="mdMenu" >                    
                    <md-list dense style="width:100%">
                      <button md-list-item *ngFor="let t of sfService.names" [value]="instname" (click)="setInst(t)">
                          {{ t }}
                       </button>
                    </md-list>
                </md-menu>
      </div>  
    `



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
