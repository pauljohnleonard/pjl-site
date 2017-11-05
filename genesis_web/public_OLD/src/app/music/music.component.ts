import { Component, Input } from '@angular/core';
import { Music } from '../model/music'


declare var Kit: any

@Component({
    selector: 'app-music-comp',
    templateUrl: 'music.html'

})


export class MusicComponent {

    @Input() music: Music;

    constructor() {
            const kit = new Kit('Kit3')
            kit.load()
    }

    addPlayerType(t: string) {

        switch (t) {
            case 'AI':
                this.music.addAIPlayer('marimba', null, null)
                break
            case 'midi':
                this.music.addMidiPlayer('marimba', null)
                break
        }
    }

}
