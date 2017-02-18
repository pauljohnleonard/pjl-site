import { Component, ViewChild } from '@angular/core';
import { MusicComponent } from './music/music.component';
import { DBService } from './services/db.service'
import { NetService } from './services/net.service'
import { SamplesService } from './services/samples.service'
import { Music } from './music/music'
import { MetroSlideComponent } from './music/metro-slide.component'

declare var audioContext: any



@Component({
	selector: 'musicApp',
	template: `

	    <style> 
		.btn1{
    		min-width:20px;
		}
		</style>
		
        <div style="width: 100%">
  			<div class="button-row">
                <div class="btn-group">
                    <button  class="btn1" md-raised-button md-tooltip={{playstopTip}} (click)="play()" >     
                          <md-icon> {{play_stop_icon}} </md-icon>
                    </button>
                    
                    <button *ngIf="pauseable" class="btn1" md-tooltip="pause/resume" md-raised-button color={{pause_text}} (click)="pause()">
                         <md-icon>pause</md-icon>
                    </button>
                     
                    <button  md-raised-button class="btn1"(click)="record()" color={{recordColor}}  md-tooltip="START RECORDING" style="color:#FF0000;">     
                          <md-icon>fiber_manual_record</md-icon>
                    </button>
                    
                     <!--button  *ngIf="recording" class="btn1" md-raised-button (click)="record()"   md-tooltip="STOP RECORDING" style="color:#FFFFFF;background-color:#FF0000;">     
                          <md-icon>fiber_manual_record</md-icon>
                    </button-->

					        
                  	<button class="btn1" *ngIf="music && music.metro.active" md-raised-button (click)="music.metro.active=false"  color='accent'  md-tooltip="METRO OFF"> <!-- style="color:#FFFFFF;background-color:#FF0000;"-->     
                            <img src="images/tempo.png" style="height: 32px" alt="midiin" />
                    </button>
                
				  	<button class="btn1" *ngIf="music && !music.metro.active" md-raised-button (click)="music.metro.active=true"   md-tooltip="METRO ON">     
                            <img src="images/tempo_off.png" style="height: 32px" alt="midiin" />
                    </button>
                   
     
                	<button md-button class="btn1" [md-menu-trigger-for]="list" style="float:middle;" >
                      {{timeSig}}
                	</button>

                    <md-menu #list="mdMenu" >                    
                       <md-list>
     			       <md-list-item class="btn1" *ngFor="let sig of timeSigs" (click)="timeSig=sig">
                      	  {{sig}}
                       </md-list-item>
    				   </md-list>	
  				    </md-menu>


                	<button  md-button class="btn1" (click)="slidershow = ! slidershow" style="float:middle;" >
                      {{music.pulse.bpm}}
                	</button>
                    
                     <div *ngIf="slidershow"  style="width: 100%">
     					       <metro-slide #linechart [value]="music.pulse.bpm" (change)="slide($event)">
            				   </metro-slide>
                     </div>
     
  					
                </div>
         	</div>
     	</div>

     
     	<music-comp [music]="music"> </music-comp>
    `
})



   
 
export class MusicAppComponent {

	
	timeSigs:any=["3/4","4/4","5/4","6/8","7/8"]
	timeSig:string="4/4"
	music: Music
	startTime: number;
	lastTime: number;
	dMin: number = undefined;
	dMax: number = undefined;
	playing: boolean = false;
	DELTA_T: number = 0.005;
	slidershow:boolean=false
	playstopTip = "PLAY"
	play_stop_icon: string = "play_arrow"
	pauseable: boolean = false
	pause_text: string = ""
	recStyle: string = "color:#FF0000;"
	recording: boolean = false
	recordColor: string = ""

	constructor(private dbService: DBService, private samplesService: SamplesService, private netService: NetService) {
		this.music = new Music(dbService, samplesService, netService)

	}



	newMusic() {
		this.music = new Music(this.dbService, this.samplesService, this.netService)
	}

	tick() {
		setTimeout(this.playLoop, this.DELTA_T, this)
	}

	slide(value:any):void {
		console.log(value)
		this.music.pulse.bpm = value
	}

	
	playLoop(self: any) {

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
			self.music.tick()
			self.tick();
		}
	}


	record() {
		this.recording = !this.recording
		if (this.recording) this.recordColor = "accent"
		else this.recordColor = ""
		this.music.record(this.recording)
	}


	play() {
		if (!this.playing) {
			this.playing = true;
			this.play_stop_icon = "stop"
			this.playstopTip = "STOP"
			this.dMin = undefined
			this.dMax = undefined
			this.lastTime = undefined
			this.startTime = audioContext.currentTime;
			this.music.start()
			this.tick();
			this.pauseable = true
		} else {
			this.pauseable = false
			this.play_stop_icon = "play_arrow"
			this.playstopTip = "PLAY"
			this.playing = false;
			this.music.stop()
			if (this.recording) this.record()
		}
	}

	pause() {
		this.music.pause()
		if (this.music.isRunning()) {
			this.pause_text = ""
		} else {
			this.pause_text = "accent"
		}
	}
}
