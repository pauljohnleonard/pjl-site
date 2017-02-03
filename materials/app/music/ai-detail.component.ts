import { Component, Input} from '@angular/core';
import {AI}  from  "app/music/ai"
import { SFService } from 'app/services/sf.service'


@Component({
    selector: "ai-detail",
    templateUrl: "app/music/ai-detail.html",
    styleUrls: ["css/mystyles.css"]
})

export class AIDetailComponent {
  @Input() ai: AI;


  constructor(private sfService:SFService) {
    


  }


}
