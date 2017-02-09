import { NgModule }      from '@angular/core';
import { HttpModule,JsonpModule }      from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { AppComponent }   from './app.component';

/*
import { AIDetailComponent } from './music/ai-detail.component';
import { PlayerDetailComponent } from './music/player-detail.component';
import { InstrumentDetailComponent } from './music/instrument-detail.component';

import { MusicComponent } from './music/music.component';
import { MusicAppComponent } from './music-app.component';
import { DBService } from './services/db.service';
import { SFService } from './services/sf.service';
import '../node_modules/hammerjs/hammer'; // Recommended
*/


@NgModule({
  imports: [ BrowserModule,HttpModule,JsonpModule,FormsModule,
    MaterialModule.forRoot()  
  ],
  declarations: [ AppComponent],
  providers: [],
  bootstrap:    [ AppComponent ]
})


export class AppModule { }
