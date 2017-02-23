import { Component, ViewChild } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef, MdSnackBar } from '@angular/material';
import { DBService } from './services/db.service'
import { MusicAppComponent } from './music-app.component'
import { SliderValComponent } from './slider-val.component'
import { SaveDialog } from './save.dialog'
import { LoadDialog } from './load.dialog'
import { SettingsService } from './services/settings.service'

@Component({
  moduleId: 'app/',
  selector: 'my-app',
  templateUrl: "app.html"
})

export class AppComponent {

  @ViewChild(MusicAppComponent) musicApp: MusicAppComponent

  user: any = null

  constructor(private dbService: DBService, public dialog: MdDialog, public snackBar: MdSnackBar,public settings:SettingsService) {
    dbService.register((user: any) => {
      this.user = user

    })

    //  this.visibility()
  }

  signIn() {
    this.dbService.signIn()
    console.log("signing in")
  }


  signOut() {
    this.dbService.signOut()
    console.log("signing out")
  }

  save() {

    if (this.musicApp.music.id !== null) {
      this.snackBar.open(" Already saved", this.musicApp.music.id,{
        duration: 2000,
      })
    } else {
      this.musicApp.music.saveDB(this.dbService)
      this.snackBar.open(" Saved ", this.musicApp.music.id, {
        duration: 2000,
      })
    }

    /*
    let config = new MdDialogConfig();


    let dialogRef:MdDialogRef<SaveDialog> = this.dialog.open(SaveDialog,config)
     dialogRef.componentInstance.setUp(this.musicApp.music,this.dbService )
     dialogRef.afterClosed().subscribe((result:any) => {
      console.log(result)
    });
    */
  }

  load() {
    let config = new MdDialogConfig();

    let dialogRef: MdDialogRef<LoadDialog> = this.dialog.open(LoadDialog, config)
    dialogRef.componentInstance.setUp(this.dbService, this.musicApp)
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(result)
    });

  }

  clean() {
    this.dbService.clean()
     this.snackBar.open("Argghhhhhhh  ", "OH NO!", {
        duration: 4000,
      })
  }

  newMusic() {
    this.musicApp.newMusic()
  }

  /*
    visibility() {
  
  
      // Set the name of the hidden property and the change event for visibility
      var hidden, visibilityChange;
      if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support 
        hidden = "hidden";
        visibilityChange = "visibilitychange";
      } else if (typeof document.msHidden !== "undefined") {
        hidden = "msHidden";
        visibilityChange = "msvisibilitychange";
      } else if (typeof document.webkitHidden !== "undefined") {
        hidden = "webkitHidden";
        visibilityChange = "webkitvisibilitychange";
      }
  
      
      // If the page is hidden, pause the video;
      // if the page is shown, play the video
      function handleVisibilityChange() {
        if (document[hidden]) {
          console.log("HID")
        } else {
          console.log("SHOW")
        }
      }
  
      // Warn if the browser doesn't support addEventListener or the Page Visibility API
      if (typeof document.addEventListener === "undefined" || typeof document[hidden] === "undefined") {
        console.log("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");
      } else {
        // Handle page visibility change   
        document.addEventListener(visibilityChange, handleVisibilityChange, false);
  
        
      }
    }
    */
}
