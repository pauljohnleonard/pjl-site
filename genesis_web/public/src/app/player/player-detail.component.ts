import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Player } from '../../model//player'
import { AIDetailComponent } from '../ai/ai-detail.component'
import { InstrumentDetailComponent } from '../instrument/instrument-detail.component'
import { AI } from '../../model/ai'

import { MdCard } from '@angular/material'

@Component({
    moduleId: 'app/music/',
    selector: 'app-player-detail',
    templateUrl: 'player-detail.html'
})


export class PlayerDetailComponent {
    @ViewChild(MdCard) card: MdCard
    @Input() player: Player;
    @Output() playerSelected = new EventEmitter();

    soloed = false
    muted = false


    constructor() {

    }

    getAI(): AI {
        return this.player.ai

    }

    solo() {
        this.player.solo()

    }

    mute() {
        this.player.mute()
    }


    toggleRecord() {

        const player = this.player
        player.recording = !player.recording;

    }

    removeMe() {
        this.player.removeMe()
    }

}
