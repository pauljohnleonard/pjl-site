'use strict'

var audioContext = new AudioContext();


let dMin = undefined
let dMax = undefined
let playing = false;
let saved = false;
const DELTA_T = 0.005

var play_but = document.getElementById('play_but')
var pause_but = document.getElementById('pause_but')
var save_but = document.getElementById('save_but')
var n_hidden_in = document.getElementById('n_hidden')
var nn_type_in = document.getElementById('nn_type')

var xxx = document.getElementById('debug_timing')
var disp = document.getElementById('disp') 


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
		play_but.innerHTML = "Play"
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
		play_but.innerHTML = "Stop"
		pause_but.style.visibility= "visible"	
		pause_but.innerHTML='Pause'
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
	var type = nn_type_in.value
	var nhid=Number(n_hidden_in.value)
	music.ai.init(type,nhid);
	saved=false
}

//var music = new Music(disp)

function  save() {
	var w=music.ai.net.weights
	var data=JSON.stringify(w)
	writeWeights(w)
	saved=true
}


function animate() {

	if (saved || currentUID === undefined || currentUID === null) {
	//	save_but.disabled="disabled"
	} else {
	//	save_but.disabled=""		
	}
	window.requestAnimationFrame(animate)
}


animate()