'use strict'



function Pulse(ticksPerBeat,beatsPerSec) {
	
	this.running    = false;
   	this.beatsPerSec = beatsPerSec
    this.beat = 0
	this.tickLen = 1/ticksPerBeat 
	this.clients = []	
}

Pulse.prototype.tick = function() {

	if (this.running) {
		var delta=audioContext.currentTime - this.lastTime	
		var nextBeat = this.beat+delta * this.beatsPerSec		
	 	while(this.beat + this.tickLen <= nextBeat) {
	 		this.state=[]
	 		this.beat += this.tickLen
	 		this.lastTime += this.tickLen/this.beatsPerSec		
			this.clients.forEach((client)=>{client.tick()})
	 	}
	}	 
}


Pulse.prototype.stop=function() {
	this.running=false
}

Pulse.prototype.start=function() {
	this.beat=0
    this.lastTime=audioContext.currentTime
    this.running=true

    this.clients.forEach((c)=>{
		if (c.start !== undefined) {
			c.start()
		}
	})

}

Pulse.prototype.pause=function() {

	if (this.running === true) {
		this.pauseTime=audioContext.currentTime
		this.running=false
	} else {
		this.lastTime  += audioContext.currentTime-this.pauseTime
		this.running = true
	}
}

