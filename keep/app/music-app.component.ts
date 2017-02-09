import { Component, ViewChild } from '@angular/core';
import { MusicComponent } from './music/music.component';
import { DBService } from './services/db.service'

declare var audioContext:any


@Component({
	selector: 'musicApp',
	template: `
		<md-card>             
        <md-card-content>
        <div style="width: 100%">
  			<div class="button-row">
                <div class="btn-group">
                    <button md-raised-button id="play_but" (click)="play()"> {{play_stop_text}}</button>
                    <button *ngIf="pauseable" md-raised-button id="pause_but" (click)="pause()">{{pause_text}}</button>
                </div>
         	</div>
     	</div>

     	<music> </music>
     	</md-card-content>        
        </md-card>
     	
    `//,
    //   styleUrls: ["css/mystyles.css"]
})


export class MusicAppComponent {
    
    @ViewChild(MusicComponent) 
	music: MusicComponent
	startTime:number;
	lastTime:number;
	dMin:number = undefined;
	dMax:number = undefined;
	playing:boolean = false;
	DELTA_T:number = 0.005;

 	play_stop_text:string="play"
 	pauseable:boolean=false
 	pause_text:string="pause"

 	
    constructor(private dbService: DBService) {
		this.music=new MusicComponent(dbService)
    }
    
	tick() {
		setTimeout(this.playLoop, this.DELTA_T,this)
	}

	playLoop(self:any) {

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
			this.pauseable=true
		} else {
			this.pauseable=false	
			this.play_stop_text="play"
			this.playing = false;
			this.music.stop()
		}
	}

	pause() {
		this.music.pause()
		if (this.music.isRunning()) {
			this.pause_text="pause"
		} else {
			this.pause_text="resume"
		}
	}

}
