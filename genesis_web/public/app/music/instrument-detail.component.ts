import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { SFService } from '../services/sf.service'
import { Instrument } from './instrument'
import { FormControl } from '@angular/forms';
import { MdAutocomplete,MdAutocompleteTrigger } from '@angular/material'

//import 'rxjs/add/operator/startWith';

@Component({
  moduleId: "app/music/",
  selector: "instrument-detail",
  templateUrl: "instrument-detail.html"

})


export class InstrumentDetailComponent {
  @Input() inst: Instrument;
  @ViewChild(MdAutocompleteTrigger) auto:MdAutocomplete 

  nameCtrl: FormControl;
  name:string 
  filteredNames: any;
  displayName:string
  val:string

  constructor(private sfService: SFService) {
    this.nameCtrl = new FormControl();
    this.filteredNames = this.nameCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterNames(name));
      
    console.log(name)
    this.nameCtrl.valueChanges.subscribe((val)=>{

      console.log(val)
     
      if ( this.sfService.names.indexOf(val) >= 0 ){
       this.inst.setInst(val)
      }
    })
  }


  ngOnInit() {
    this.nameCtrl.setValue(this.inst.name)
  }

  filterNames(val: string) {
    return val ? this.sfService.names.filter((s) => new RegExp(val, 'gi').test(s)) : this.sfService.names;
  }


}


