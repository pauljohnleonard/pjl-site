'use strict'

var context = new AudioContext();


let dMin = undefined
let dMax = undefined
let playing = false;

var but = document.getElementById('but')
var xxx = document.getElementById('xxx')
var disp = document.getElementById('disp') 
var pause_but = document.getElementById('pause_but')

//let tick=webkitRequestAnimationFrame

let tick = function (func) {
	setTimeout(func, 0.05)
}

let playLoop = function () {

	let time = context.currentTime

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
		xxx.innerHTML = "DELTA_T range: " + dMin + " -> " + dMax
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
		startTime = context.currentTime;
		but.innerHTML = "Stop"
		pause_but.style.visibility= "visible"		
		tick(playLoop);
		music.start()
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

var music = new Music()



