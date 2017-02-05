import { Component, Input} from '@angular/core';
import {AI}  from  "app/music/ai"
import { SFService } from 'app/services/sf.service'


@Component({
    selector: "ai-detail",
    template: 
     `<div *ngIf="ai">

      <md-card>
          <md-card-actions>
              <md-select placeholder="Net type">
                  <md-option *ngFor="let type of ai.types" [value]="type">
                      {{ type }}
                  </md-option>
              </md-select>
              <md-input [(ngModel)]="nHidden" type="number" value=20 min=1 max=300 id="n_hidden" placeholder="Hidden"> </md-input>
              <button md-raised-button (click)="ai.implant()">Implant</button>
              <button md-raised-button (click)="ai.save()">Save</button>
          </md-card-actions>
      </md-card>
    </div>` ,
    styleUrls: ["css/mystyles.css"]
})

export class AIDetailComponent {
   @Input() ai: AI;

   constructor(){
       
   }
}
