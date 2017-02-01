import { Component, ViewChild } from '@angular/core';
import { MusicComponent } from './music/music.component';

@Component({
	selector: 'musicApp',
	template: `
     

		<md-card style="max-height: 100px;">             
        <md-card-content>
        <div style="width: 100%; height: 265px">
  			<div class="button-row">
                <div class="btn-group">
                    <button md-raised-button id="play_but" (click)="play()"> {{play_stop_text}}</button>
                    <button md-raised-button id="pause_but" (click)="pause()" style="visibility:hidden">Pause</button>
                </div>
         	</div>
     	</div>
     	<music></music>
     	</md-card-content>        
        </md-card>
    `
       styleUrls: ["css/mystyles.css"]
})


export class MusicAppComponent {
    
    @ViewChild(MusicComponent) music: MusicComponent;
	startTime;
	lastTime;
	dMin = undefined;
	dMax = undefined;
	playing = false;
	DELTA_T = 0.005;

 	play_stop_text="play"
 	
    constructor() {
	
    }
    
	tick() {
		setTimeout(this.playLoop, this.DELTA_T,this)
	}

	playLoop(self) {

		let time = audioContext.currentTime

		if (self.lastTime !== undefined) {
			let delta = (time - self.lastTime)
			if (self.dMin !== undefined) self.dMin = Math.min(self.dMin, delta)
			else self.dMin = delta
			if (self.dMax !== undefined) self.dMax = Math.max(self.dMax, delta)
			else self.dMax = delta
		}

		self.lastTime = time

		if (self.playing) {
			self.music.tick(time)
			self.tick();
		} 
	}


	play() {
		if (!this.playing) {
			this.playing = true;
			this.play_stop_text="stop"
			this.dMin = undefined
			this.dMax = undefined
			this.lastTime = undefined
			this.startTime = audioContext.currentTime;

			this.music.start()
			this.tick();
		} else {
			this.play_stop_text="play"
			this.playing = false;
			this.music.stop()
		}
	}

	pause() {
		this.music.pause()
	}

}
