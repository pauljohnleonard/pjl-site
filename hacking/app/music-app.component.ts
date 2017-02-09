import { Component, ViewChild } from '@angular/core';
import { MusicComponent } from './music/music.component';
import { DBService } from './services/db.service'

declare var audioContext:any


@Component({
	selector: 'musicApp',
	template: `

		<!--md-card>             
        <md-card-content-->
        
        <div style="width: 100%">
  			<div class="button-row">
                <div class="btn-group">
                    <button md-raised-button md-tooltip={{playstopTip}} (click)="play()" >     
                          <md-icon> {{play_stop_icon}} </md-icon>
                    </button>
                    
                    <md-button-toggle *ngIf="pauseable" md-tooltip="pause/resume" md-raised-button  (click)="pause()">
                         <md-icon>pause</md-icon>
                    </md-button-toggle>
                     
                    <button  *ngIf="!recording" md-raised-button (click)="record()"   md-tooltip="START RECORDING" style="color:#FF0000;">     
                          <md-icon>play_circle_filled</md-icon>
                    </button>
                    
                     <button  *ngIf="recording" md-raised-button (click)="record()"   md-tooltip="STOP RECORDING" style="color:#FFFFFF;background-color:#FF0000;">     
                          <md-icon>play_circle_filled</md-icon>
                    </button>
                    
                
                    <button md-raised-button md-tooltip="SAVE" (click)="save()"  style="float: right">
                       <md-icon>save</md-icon> 
                    </button>
                </div>
         	</div>
     	</div>

     
     	<!--/md-card-content>        
        </md-card-->
        <music> </music>
    `//,
    //   styleUrls: ["css/mystyles.css"]
})


export class MusicAppComponent {
    
    @ViewChild(MusicComponent) music: MusicComponent
	startTime:number;
	lastTime:number;
	dMin:number = undefined;
	dMax:number = undefined;
	playing:boolean = false;
	DELTA_T:number = 0.005;

	playstopTip="PLAY"
 	play_stop_icon:string="play_arrow"
 	pauseable:boolean=false
 	pause_text:string="pause"
 	recStyle:string="color:#FF0000;" 
 	recording:boolean=false

    constructor(private dbService: DBService) {
		//this.music=new MusicComponent(dbService)
    	this.setStyles();
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


	record() {

		this.recording = !this.recording
		this.setStyles()
	}

	setStyles() {
		if (this.recording) this.recStyle="background-color:#FF0000;color:#000000;"
		else this.recStyle="color:#FF0000;" 
	}

	play() {
		if (!this.playing) {
			this.playing = true;
			this.play_stop_icon="stop"
			this.playstopTip="STOP"
			this.dMin = undefined
			this.dMax = undefined
			this.lastTime = undefined
			this.startTime = audioContext.currentTime;
			this.music.start()
			this.tick();
			this.pauseable=true
		} else {
			this.pauseable=false	
			this.play_stop_icon="play_arrow"
			this.playstopTip="PLAY"
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

	save() {
		console.log(" IMPLEMENT ME SAVE")
		
	}
}