import { AfterViewInit,Component, ViewChild } from '@angular/core';
import { MusicComponent } from './music/music.component';
import { DBService } from './services/db.service'
import { NetService } from './services/net.service'
import { SettingsService } from './services/settings.service'
import { SamplesService } from './services/samples.service'
import { Music } from './music/music'
import { MetroSlideComponent } from './music/metro-slide.component'
import { MonitorComponent } from './music/monitor.component'
import { Monitor } from './music/monitor'

// Import theming functions

declare var audioContext: any



@Component({
	moduleId: 'app/',
	selector: 'musicApp',
	templateUrl: "music-app.html"
})

 
export class MusicAppComponent {


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
	monitor:Monitor


	constructor(private dbService: DBService, private samplesService: SamplesService, private netService: NetService,private settings:SettingsService) {

		this.monitor=new Monitor()

		this.music = new Music(dbService, samplesService, netService,this.monitor,this.settings)

	}


	newMusic() {
		this.music = new Music(this.dbService, this.samplesService, this.netService,this.monitor,this.settings)
	}


	tick() {
		setTimeout(this.playLoop, this.DELTA_T, this)
	}

/*
	slide(value:any):void {
		console.log(value)
		this.music.pulse.bpm = value
	}
*/
	
	
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
