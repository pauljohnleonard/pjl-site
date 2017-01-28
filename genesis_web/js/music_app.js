'use strict'

var audioContext = new AudioContext();


let dMin = undefined
let dMax = undefined
let playing = false;
const DELTA_T = 0.005

var but = document.getElementById('but')
var xxx = document.getElementById('xxx')
var disp = document.getElementById('disp') 
var pause_but = document.getElementById('pause_but')

//let tick=webkitRequestAnimationFrame

let tick = function (func) {
	setTimeout(func, DELTA_T)
}


var logger = {
	log: function (msg) {
	  //fs.write(this.logFile, msg + '\n')
	  console.log("MES"+msg)
	},

    error:function (msg) {
	  if (msg instanceof Error) {
		msg = msg.stack
	  }
	  //fs.write(this.logFile, msg + '\n')
	  console.log("ERROR:"+ msg)
	}
}


let playLoop = function () {

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
		but.innerHTML = "Play"
	}
};

var startTime;
var lastTime;

function play() {
	if (!playing) {
		playing = true;
		dMin = undefined
		dMax = undefined
		lastTime = undefined
		startTime = audioContext.currentTime;
		but.innerHTML = "Stop"
		pause_but.style.visibility= "visible"		
		music.start()
		tick(playLoop);
	} else {
		playing = false;
		music.stop()
		pause_but.style.visibility= "hidden"
	}
};

function pause() { 

	music.pause() 
	if (music.pulse.running) pause_but.innerHTML='Pause'
	else pause_but.innerHTML='Resume'

}


function init() {
	music.ai.init();
	
}
var music = new Music(disp)



