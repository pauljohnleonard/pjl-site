// https://www.npmjs.com/package/angular-2-local-storage
// https://github.com/grevory/angular-local-storage#set

import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';


//declare var localstorage:any

@Injectable()
export class SettingsService {

    //@LocalStorageModule() 
    playahead:number = 0.1

    constructor( private localStorageService: LocalStorageService) {
        var x:any=this.localStorageService.get("playahead")
        console.log(" playhead loaded =",x)
        if (x !== null) this.playahead=x
    }

    setPlayahead(x:number){
         this.playahead=x
         this.localStorageService.set("playahead",this.playahead)
    }

}
