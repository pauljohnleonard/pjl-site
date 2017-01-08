function makeInst(name, cb) {
	Soundfont.instrument(context, name).then(function (inst) {
		cb(inst)
	})
}

function Player(name, cb) {

	var self=this
	makeInst(name, (inst) => {
		self.inst = inst
		if (cb) cb(inst)
	})

	this.started = {}
	this.opts =  {}
	this.gain =  function (vel) {
		return vel / 127
	}

}



Player.prototype.playMidi = function (msg) {

		
		var mm = msg.messageType ? msg : midimessage(msg)
		if (mm.messageType === 'noteon' && mm.velocity === 0) {
			mm.messageType = 'noteoff'
		}
		if (this.opts.channel && mm.channel !== this.opts.channel) return

		switch (mm.messageType) {
			case 'noteon':
			    if (this.inst === undefined) return
				this.started[mm.key] = this.inst.play(mm.key, 0, {
					gain:this.gain(mm.velocity)
				})
				break
			case 'noteoff':
				if (this.started[mm.key]) {
					this.started[mm.key].stop()
					delete this.started[mm.key]
				}
				break
		}
	}


	


Player.prototype.listenToMidi = function (input, options) {
	var started = {}
	var opts = options || {}
	var gain = opts.gain || function (vel) {
		return vel / 127
	}
	var self = this
	
	input.onmidimessage = function(msg) {
	    slef.playMidi(msg)
	}
	return this
}


function Pulse() {
	this.divDeltas  = [0.25] 
	this.divN       = 1    
	this.divPerBar  = 16
	this.running    = false;
}

Pulse.prototype.tick = function() {
	var time=context.currentTime
	if (this.running && time >= this.nextDiv) {
		var ret=[this.barCount,this.divCount]

		this.nextDiv += this.divDeltas[this.divCount%this.divN] 	
	
		this.divCount += 1
		if (this.divCount == this.divPerBar) {
			this.divCount=0
			this.barCount+=1
		}	
		return ret;
	}

	return null;
}

Pulse.prototype.stop=function() {
	this.running=false
}

Pulse.prototype.start=function() {
	this.running    = true;
	this.nextDiv    = context.currentTime
	this.divCount   = 0
	this.barCount   = 0
}

Pulse.prototype.pause=function() {

	if (this.running === true) {
		this.pauseTime=context.currentTime
		this.running=false
	} else {
		this.nextDiv    += context.currentTime-this.pauseTime
		this.running = true
	}
}


function Music() {
	this.focusPlayer = new Player("marimba")
	this.pulse = new Pulse()
	var self = this
	window.navigator.requestMIDIAccess().then(function (midiAccess) {
		midiAccess.inputs.forEach(function (midiInput) {
			self.focusPlayer.listenToMidi(midiInput)
		});	
	});
}


Music.prototype.tick=function() {	
	try {
	var x=this.pulse.tick()
	if (x !== null) {
		disp.innerHTML = x[0]+ ":" + x[1]
		var mm={"messageType":"noteon","key":60+x[1],"velocity":100}
		if (this.focusPlayer) this.focusPlayer.playMidi(mm)
	}
	}catch(err) {
		console.log(err.stack)
		
	}
}


Music.prototype.start = function() {
	this.pulse.start()
}


Music.prototype.stop = function() {
	this.pulse.stop()
}

Music.prototype.pause = function() {
	this.pulse.pause()
}