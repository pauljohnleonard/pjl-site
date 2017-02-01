import { NgModule }      from '@angular/core';
import { HttpModule,JsonpModule }      from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MaterialModule} from '@angular/material';

import { AppComponent }   from './app.component';

import { AIComponent } from './music/ai.component';
import { MusicComponent } from './music/music.component';
import { MusicAppComponent } from './music_app.component';

@NgModule({
  imports:      [ BrowserModule,HttpModule,JsonpModule,FormsModule,
    MaterialModule.forRoot()  
  ],
  declarations: [ AppComponent,MusicAppComponent,MusicComponent,AIComponent , MusicAppComponent],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
