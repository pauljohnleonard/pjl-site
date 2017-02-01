import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <md-sidenav-layout fullscreen>
      <md-sidenav #sidebar>
        <p style="padding: 10px;">
          <img src="genesis.png" style="height: 40px; width: auto" alt="companylogo" />
        </p>
        <md-nav-list>
            <a md-list-item (click)="sidebar.close()">
                <md-icon md-list-icon>assignment</md-icon>
                <span md-line>Blah</span>
            </a>
            <a md-list-item (click)="sidebar.close()">
                <md-icon md-list-icon>assignment</md-icon>
                <span md-line>Blurb</span>
            </a>
             <a md-list-item (click)="sidebar.close()">
                <md-icon md-list-icon>assignment</md-icon>
                <span md-line>About</span>
            </a>
        </md-nav-list>
      </md-sidenav>
      <md-toolbar>
        <button md-icon-button (click)="sidebar.open()">
          <img src="genesis.png" style="height: 36px" alt="genesis logo" />
        </button>

        <span style="margin-left: 20px">Genesis</span>
      </md-toolbar>
      
      <musicApp></musicApp>
      
    </md-sidenav-layout>`
})

export class AppComponent {

}

