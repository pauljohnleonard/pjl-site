import { Component } from '@angular/core';
import { DBService } from './services/db.service'


@Component({
  selector: 'my-app',
  template: `
      <md-toolbar>
           <span> <img src="images/genesis_thicker.png" style="height: 36px" alt="genesis logo" />
            Genesis </span>  
              <span style="flex: 1 1 auto"></span>
           <span>
          <button md-button  id='' (click)="signIn()" name=''  value=''  >
             <img src={{button_img}}  style="height: 36px"  />
         </button>
          </span>
      </md-toolbar>
      <musicApp></musicApp>
            
      `
})

export class AppComponent {

  button_img: string = "images/btn_google_signin_light_normal_web.png"
  user: any = null

  
  constructor(private dbService: DBService) {
    dbService.register((user:any) => {
      this.user = user
      if (this.user != null) {
        this.button_img = user.photoURL
      } else {
        this.button_img = "images/btn_google_signin_light_normal_web.png"
      }
    })

  //  this.visibility()
  }

  signIn() {
    this.dbService.signIn()
    console.log("signing in")
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
