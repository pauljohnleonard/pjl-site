import { NgModule }      from '@angular/core';
import { HttpModule,JsonpModule }      from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { AppComponent }   from './app.component';
import { AIDetailComponent } from './music/ai-detail.component';
import { PlayerDetailComponent } from './music/player-detail.component';
import { InstrumentDetailComponent } from './music/instrument-detail.component';
import { MusicComponent } from './music/music.component';
import { MusicAppComponent } from './music-app.component';

import { DBService } from './services/db.service';
import { FirebaseDBService } from './services/firebasedb.service';
import { SFService } from './services/sf.service';
import { SettingsService } from './services/settings.service';
import { NetService } from './services/net.service';
import { SamplesService } from './services/samples.service';

import { LoadDialog }  from './load.dialog'
import { MetroSlideComponent } from './music/metro-slide.component';
import { MonitorComponent } from './music/monitor.component'
import { SliderValComponent } from './slider-val.component'
import { LocalStorageModule } from 'angular-2-local-storage';

@NgModule({
  imports: [ BrowserModule,HttpModule,JsonpModule,FormsModule,
    MaterialModule.forRoot() ,
      LocalStorageModule.withConfig({
            prefix: 'my-app',
            storageType: 'localStorage'
        }) 
  ],
  declarations: [ AppComponent,AIDetailComponent,InstrumentDetailComponent,PlayerDetailComponent,
        MusicComponent,MusicAppComponent,LoadDialog,MetroSlideComponent,MonitorComponent,SliderValComponent],
  providers: [{ provide: DBService, useClass: FirebaseDBService },
         SFService,SamplesService,NetService,SettingsService],
  bootstrap:    [ AppComponent ],
  entryComponents: [LoadDialog]
})


export class AppModule { }
