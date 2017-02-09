'use strict'

var context = new AudioContext();

let dMin = undefined
let dMax = undefined
let playing = false;

var but = document.getElementById('but')
var xxx = document.getElementById('xxx')

//let tick=webkitRequestAnimationFrame

let tick1 = function(func) {
	setTimeout(func,0.05,tick1)
}

let tick= function(func) {
	setTimeout(func,0.05,tick)
}

let playLoop = function (tick) {
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
		tick(playLoop);
		xxx.innerHTML = "DELTA_T range: "+ dMin + " -> " + dMax
	} else {
		xxx.innerHTML = " press play "
        but.innerHTML = " Play"
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
        tick(playLoop);
	} else {		
		playing = false;
	}
};
