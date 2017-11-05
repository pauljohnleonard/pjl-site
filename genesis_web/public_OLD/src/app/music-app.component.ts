import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MusicComponent } from './music/music.component';
import { DBService } from './services/db.service'
import { NetService } from './services/net.service'
import { SettingsService } from './services/settings.service'
import { SamplesService } from './services/samples.service'
import { Music } from './model/music'
import { MetroSlideComponent } from './metro-slide/metro-slide.component'
import { MonitorComponent } from './monitor/monitor.component'
import { Monitor } from './monitor/monitor'
import { SFService } from 'app/services/sf.service';
import { Player } from 'app/model/player';

// Import theming functions

declare var audioContext: any



@Component({
    moduleId: 'app/',
    selector: 'app-music',
    templateUrl: 'music-app.html'
})


export class MusicAppComponent {


    music: Music
    startTime: number;
    lastTime: number;
    dMin: number = undefined;
    dMax: number = undefined;
    playing = false;
    DELTA_T = 0.005;
    slidershow = false
    playstopTip = 'PLAY'
    play_stop_icon = 'play_arrow'
    pauseable = false
    pause_text = ''
    recStyle = 'color:#FF0000;'
    recording = false
    recordColor = ''
    monitor: Monitor
    midiOut: any;

    constructor(private dbService: DBService, private samplesService: SamplesService,
        private netService: NetService, private settings: SettingsService, private sfService: SFService) {

        this.monitor = new Monitor()

        const self = this
        if (window.navigator['requestMIDIAccess']) {        //  does not exist in some browsers
            window.navigator['requestMIDIAccess']().then(
                (midiAccess: any) => {

                    midiAccess.outputs.forEach((out: any) => {
                        console.log(out)
                        if (out.name.startsWith("FluidSynth")) {
                            this.midiOut = out
                            console.log(" Using above for MIDI")
                        }
                    })

                    midiAccess.inputs.forEach((midiInput: any) => {
                        midiInput.onmidimessage = function (event: any) {
                            // console.log(event.data)
                           // if (self.midiOut) {
                            //    self.midiOut.send(event.data)
                            //    console.log(event.data)
                           // }
                            if (self.recording && self.music.pulse.running) {
                                const stamp = self.music.pulse.getBeatNow()
                                self.music.recordBuffer.push([stamp, event.data])
                            }
                            self.music.things.forEach((p) => {
                                if (p instanceof Player) {
                                    if (p.recording) { p.inst.playEvent(event.data, 0) }
                                }
                            })
                        }
                    })
                    this.newMusic()
                }).catch((err) => {
                    console.log(err)
                    this.newMusic()
                })
        } else {
            this.newMusic()
        }

    }

    newMusic() {
        this.music = new Music(this.dbService, this.samplesService, this.netService,
            this.monitor, this.settings, this.sfService, this.midiOut)
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

        const time = audioContext.currentTime

        if (self.lastTime !== undefined) {
            const delta = (time - self.lastTime)
            if (self.dMin !== undefined) {
                self.dMin = Math.min(self.dMin, delta)
            } else {
                self.dMin = delta
            }
            if (self.dMax !== undefined) {
                self.dMax = Math.max(self.dMax, delta)
            } else {
                self.dMax = delta
            }
        }

        self.lastTime = time

        if (self.playing) {
            self.music.tick()
            self.tick();
        }
    }


    record() {
        this.recording = !this.recording
        if (this.recording) {
            this.recordColor = 'accent'
        } else {
            this.recordColor = ''
        }
        this.music.record(this.recording)
    }


    play() {
        if (!this.playing) {
            this.playing = true;
            this.play_stop_icon = 'stop'
            this.playstopTip = 'STOP'
            this.dMin = undefined
            this.dMax = undefined
            this.lastTime = undefined
            this.startTime = audioContext.currentTime;
            this.music.start()
            this.tick();
            this.pauseable = true
        } else {
            this.pauseable = false
            this.play_stop_icon = 'play_arrow'
            this.playstopTip = 'PLAY'
            this.playing = false;
            this.music.stop()
            if (this.recording) {
                this.record()
            }
        }
    }

    pause() {
        this.music.pause()
        if (this.music.isRunning()) {
            this.pause_text = ''
        } else {
            this.pause_text = 'accent'
        }
    }



}
