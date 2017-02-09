import { Component, Input } from '@angular/core';
import { SFService } from '../services/sf.service'
import { Instrument } from './instrument'

@Component({
    selector: "instrument-detail",
  
    template: 
    `
      <div *ngIf="inst">
        <md-select [(ngModel)]="instname"  placeholder="Instrument" (onClose)="setInst()">
            <md-option *ngFor="let name of sfService.names" [value]="name">
                   {{ name }}
            </md-option>
       </md-select>     
      </div>  
    `
   // styleUrls: ["css/mystyles.css"]
})


export class InstrumentDetailComponent {
  @Input() inst : Instrument;

  instname:string
  
  constructor(private sfService:SFService) {
   console.log("Hello")
  }

  setInst() {
    console.log(this.instname)
    this.inst.setInst(this.instname) 
  }

}
