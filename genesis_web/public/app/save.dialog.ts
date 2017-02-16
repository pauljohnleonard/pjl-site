import { Component} from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Music } from './music/music'
import { DBService } from './services/db.service'

@Component({
  selector: 'save-comp',
  template: `

        <p> HELLO FROM SAVE  </p>
             <button  md-button (click)="done()"> DONE </button>
     

`
})


export class SaveDialog {
    

    music:Music
    db:DBService

    constructor(public dialogRef: MdDialogRef<SaveDialog>){
        console.log(" YESY I AM HERE")
    }


    setUp(music:Music,db:DBService){
      this.music=music
      this.db=db
    }

    done() { 
          var id=this.music.saveDB(this.db)
          this.dialogRef.close(id)
    }
}

