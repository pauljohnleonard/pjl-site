import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MatSnackBar } from '@angular/material';
import { DBService } from './services/db.service'
import { MusicAppComponent } from './music-app.component'

import { LoadDialogComponent } from './load/load.dialog'
import { MetroDialogComponent } from './metro/metro.dialog'

import { SettingsService } from './services/settings.service'
import { MidiParser } from './model/midiparser'

// declare var JSMIDIParser;

declare var MidiFile

@Component({
    moduleId: 'app/',
    selector: 'my-app',  // tslint:disable-line 
    templateUrl: 'app.html'
})

export class AppComponent implements OnInit {


    @ViewChild(MusicAppComponent) musicApp: MusicAppComponent
    @ViewChild('midiload') midiloader: ElementRef
    user: any = null

    constructor(private dbService: DBService, public dialog: MatDialog,
        public snackBar: MatSnackBar, public settings: SettingsService) {
        dbService.register((user: any) => {
            this.user = user

        })

        //  this.visibility()
    }

    ngOnInit(): void {


        this.midiloader.nativeElement.onchange = (InputEvt) => {
            console.log(' on selected file ')
            if (!this.midiloader.nativeElement.files.length) { return false; }
            const reader = new FileReader()
            const file =	this.midiloader.nativeElement.files[0]
            reader.readAsBinaryString(file);	// read the binary data
            reader.onload = ((t) => {			// when ready...

                const midi = new MidiFile(reader.result)

                this.musicApp.newMusic()
                const music = this.musicApp.music
                MidiParser.loadMidi(midi, music)
                let nn = file.name
                const ii = nn.lastIndexOf('/');
                if (ii > 0) {nn = nn.substring(ii)}
                music.title = nn

            }
            )
        };
    }

    signIn() {
        this.dbService.signIn()
        console.log('signing in')
    }


    signOut() {
        this.dbService.signOut()
        console.log('signing out')
    }

    save() {

        if (this.musicApp.music.id !== null) {
            this.snackBar.open(' Already saved', this.musicApp.music.id, {
                duration: 2000,
            })
        } else {
            this.musicApp.music.saveDB(this.dbService)
            this.snackBar.open(' Saved ', this.musicApp.music.id, {
                duration: 2000,
            })
        }

    }

    load() {
        const config = new MatDialogConfig();

        const dialogRef: MatDialogRef<LoadDialogComponent> = this.dialog.open(LoadDialogComponent, config)
        dialogRef.componentInstance.setUp(this.dbService, this.musicApp)
        dialogRef.afterClosed().subscribe((result: any) => {
            console.log(result)
        });

    }



    metroSetup() {
        const config = new MatDialogConfig();

        const dialogRef: MatDialogRef<MetroDialogComponent> = this.dialog.open(MetroDialogComponent, config)
        dialogRef.componentInstance.metro = this.musicApp.music.metro

        dialogRef.afterClosed().subscribe((result: any) => {
            console.log(result)
        });
    }

    clean() {
        this.dbService.clean()
        this.snackBar.open('Argghhhhhhh  ', 'OH NO!', {
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
        if (typeof document.hidden !== 'undefined') { // Opera 12.10 and Firefox 18 and later support
          hidden = 'hidden';
          visibilityChange = 'visibilitychange';
        } else if (typeof document.msHidden !== 'undefined') {
          hidden = 'msHidden';
          visibilityChange = 'msvisibilitychange';
        } else if (typeof document.webkitHidden !== 'undefined') {
          hidden = 'webkitHidden';
          visibilityChange = 'webkitvisibilitychange';
        }

        // If the page is hidden, pause the video;
        // if the page is shown, play the video
        function handleVisibilityChange() {
          if (document[hidden]) {
            console.log('HID')
          } else {
            console.log('SHOW')
          }
        }
        // Warn if the browser doesn't support addEventListener or the Page Visibility API
        if (typeof document.addEventListener === 'undefined' || typeof document[hidden] === 'undefined') {
          console.log('This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.');
        } else {
          // Handle page visibility change
          document.addEventListener(visibilityChange, handleVisibilityChange, false);
        }
      }
      */
}
