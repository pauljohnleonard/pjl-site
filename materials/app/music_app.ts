import { Component, ViewChild } from '@angular/core';
import { AIComponent } from './music/ai.component';



@Component({
	selector: 'musicApp',
	template: `
        <style>
          .flextable {
            display: flex;
            flex-wrap: wrap;
          }
          .flextable div {
            padding: 10px;
            text-align: right;
            width: 70px;
          }
        </style>

        <md-card style="max-height: 100px;">             
        <md-card-content>
          <div style="width: 100%; height: 265px">
            <music>
            </music>
          </div>
        </md-card-content>        
      </md-card>
    `
})

declare var AudioContext: any;

var audioContext = new AudioContext();


var logger = {
	log: function (msg) {
		//fs.write(this.logFile, msg + '\n')
		console.log("MES" + msg)
	},

	error: function (msg) {
		if (msg instanceof Error) {
			msg = msg.stack
		}
		//fs.write(this.logFile, msg + '\n')
		console.log("ERROR:" + msg)
	}
}



var startTime;
var lastTime;
let dMin = undefined
let dMax = undefined
let playing = false;
let saved = false;
const DELTA_T = 0.005


export class MusicAppComponent {


	/*
	
	var play_but = document.getElementById('play_but')
	var pause_but = document.getElementById('pause_but')
	var save_but = document.getElementById('save_but')
	var n_hidden_in = document.getElementById('n_hidden')
	var nn_type_in = document.getElementById('nn_type')
	
	var xxx = document.getElementById('debug_timing')
	var disp = document.getElementById('disp') 
	*/

	tick(func) {
		setTimeout(func, DELTA_T)
	}


	playLoop() {

		let time = audioContext.currentTime

		if (lastTime !== undefined) {
			let delta = (time - lastTime)
			if (dMin !== undefined) dMin = Math.min(dMin, delta)
			else dMin = delta
			if (dMax !== undefined) dMax = Math.max(dMax, delta)
			else dMax = delta
		}

		lastTime = time

		if (playing) {
			music.tick(time)
			tick(playLoop);
			xxx.innerHTML = " DELTA_T range: " + dMin + " -> " + dMax
		} else {
			xxx.innerHTML = " CLICK PLAY  "
			play_but.innerHTML = "Play"
		}
	}
	play() {
		if (!playing) {
			playing = true;
			dMin = undefined
			dMax = undefined
			lastTime = undefined
			startTime = audioContext.currentTime;
		//	play_but.innerHTML = "Stop"
		//	pause_but.style.visibility = "visible"
		//	pause_but.innerHTML = 'Pause'
			music.start()
			tick(playLoop);
		} else {
			playing = false;
			music.stop()
		//	pause_but.style.visibility = "hidden"
		}
	}

	pause() {
		music.pause()
//		if (music.pulse.running) pause_but.innerHTML = 'Pause'
//		else pause_but.innerHTML = 'Resume'

	}


	init() {
		var type = nn_type_in.value
		var nhid = Number(n_hidden_in.value)
		music.ai.init(type, nhid);
		saved = false
	}

	//var music = new Music(disp)




	animate() {

		if (saved || currentUID === undefined || currentUID === null) {
			//	save_but.disabled="disabled"
		} else {
			//	save_but.disabled=""		
		}
		window.requestAnimationFrame(animate)
	}


	//animate()





}
