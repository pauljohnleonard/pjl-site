import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AIDetailComponent } from './ai/ai-detail.component';
import { PlayerDetailComponent } from './player/player-detail.component';
import { InstrumentDetailComponent } from './instrument/instrument-detail.component';
import { MusicComponent } from './music/music.component';
import { MusicAppComponent } from './music-app.component';

import { DBService } from './services/db.service';
import { FirebaseDBService } from './services/firebasedb.service';
import { SFService } from './services/sf.service';
import { SettingsService } from './services/settings.service';
import { NetService } from './services/net.service';
import { SamplesService } from './services/samples.service';

import { LoadDialogComponent } from './load/load.dialog'
import { MetroDialogComponent } from './metro/metro.dialog'
import { MetroSlideComponent } from './metro-slide/metro-slide.component';
import { MonitorComponent } from './monitor/monitor.component'
import { SliderValComponent } from './slider-val/slider-val.component'
import { LocalStorageModule } from 'angular-2-local-storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
    imports: [BrowserAnimationsModule, BrowserModule, HttpModule, JsonpModule, FormsModule, ReactiveFormsModule,
        MaterialModule,
        LocalStorageModule.withConfig({
            prefix: 'my-app',
            storageType: 'localStorage'
        })
    ],
    declarations: [AppComponent, AIDetailComponent, InstrumentDetailComponent, PlayerDetailComponent,
        MusicComponent, MusicAppComponent, LoadDialogComponent, MetroDialogComponent, MetroSlideComponent,
         MonitorComponent, SliderValComponent],
    providers: [{ provide: DBService, useClass: FirebaseDBService },
        SFService, SamplesService, NetService, SettingsService],
    bootstrap: [AppComponent],
    entryComponents: [LoadDialogComponent, MetroDialogComponent]
})


export class AppModule { }
