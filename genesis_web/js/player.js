
'use strict'



function tickChroma() {
		var i=this.music.pulse.divCount
		var mm={"messageType":"noteon","key":60+i,"velocity":100}
		this.playMidi(mm)
}


function Player(src, inst) {
	this.src   = src
	this.inst  = inst
	this.last  = src.out
	this.thresh = 0.5
	this.state  = new Array(this.last.length)
	this.state.fill(1)
	this.last.fill(this.thresh)
	this.gain=30
	//this.cnt = 0
	this.playing =true
}


Player.prototype.tick = function () {
	
	var out=this.src.out
	
	//if ( cnt > 1) this.playing=true;

	out.forEach((v,i,a)=>{
		if (v > this.thresh && this.state[i] === 0) {
			var vel = this.gain*(v-this.last[i])	
			if (this.playing) {
				this.inst.playNote(i,vel)
				this.state[i]=vel
			}
		} else if (v < this.thresh && this.state[i] !== 0) {
			this.inst.playNote(i,0)
			this.state[i]=0
		}	
	})
	this.last=out		
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


