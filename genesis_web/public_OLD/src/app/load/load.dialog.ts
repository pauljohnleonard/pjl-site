import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { MusicAppComponent } from '../music-app.component'
import { DBService } from '../services/db.service'



declare var firebase: any


@Component({
    selector: 'app-load-dialog',
    template: `
    <md-list>
    <md-list-item *ngFor='let item of list' (click)='doLoad(item)'>
        <div style='width:100%'><strong>{{ item.title }}</strong></div>
    </md-list-item>
    </md-list>
`
})



export class LoadDialogComponent {


    db: DBService
    list: Array<any> = []
    musicApp: MusicAppComponent

    constructor(public dialogRef: MdDialogRef<LoadDialogComponent>) {

    }

    setUp(db: DBService, musicApp: MusicAppComponent) {
        this.db = db
        this.musicApp = musicApp
        const ref = firebase.database().ref('songinfo');

        ref.once('value').then((snapshot: any) => {
            snapshot.forEach((usersongs: any) => {
                const userkey = usersongs.key
                const userNameRef = firebase.database().ref('users/' + userkey + '/username');
                userNameRef.once('value').then((name: any) => {
                    console.log(' USER:  ' + name.val())
                    usersongs.forEach((song: any) => {
                        console.log('    SONGS:  ' + song.child('title').val())
                        const title = song.child('title').val()
                        const user = name.val()
                        const key = song.key
                        this.list.push({ title: title, user: user, key: key })
                    })
                })
            })
        })
    }

    doLoad(item: any) {

        const songref = firebase.database().ref('songs').child(item.key);
        this.musicApp.newMusic()
        const music = this.musicApp.music

        music.loadDB(songref)
        music.title = item.title
        this.done()
    }

    done() {
        this.dialogRef.close('LOADED')
    }

}

