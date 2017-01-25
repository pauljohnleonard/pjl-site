
'use strict'


function makeInst(name, cb) {
	Soundfont.instrument(context, name).then(function (inst) {
		cb(inst)
	})
}



function tickChroma() {
		var i=this.music.pulse.divCount
		var mm={"messageType":"noteon","key":60+i,"velocity":100}
		this.playMidi(mm)
}


function Player(name, music) {
	
	this.name=name;
	
	var self=this
	makeInst(name, (inst) => {
		self.inst = inst
	})

	this.started = {}
	this.opts =  {}
	this.gain =  function (vel) {
		return vel / 127
	}

	this.music=music
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

Player.prototype.tick = function () {
	console.log("Player:"+this.name+ "  Please define tick")
}
	


Player.prototype.listenToMidi = function (input, options) {
	var started = {}
	var opts = options || {}
	var gain = opts.gain || function (vel) {
		return vel / 127
	}
	var self = this
	
	input.onmidimessage = function(msg) {
	    self.playMidi(msg)
	}
	return this
}
