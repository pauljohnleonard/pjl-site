'use strict'

function PulseDisplayer(music,element) {
    this.pulse = music.pulse
    this.element = element   
}   	

PulseDisplayer.prototype.tick = function () {
    disp.innerHTML = this.pulse.toHTML()
}


function Pulse() {
	this.rampers=[]
	this.divDeltas  = [0.25] 
	this.divN       = 1    
	this.divPerBar  = 16
	
	

	this.running    = false;
}

Pulse.prototype.tick = function() {
	var time=context.currentTime
	this.pulse = 0

	if (this.running && time >= this.nextDiv) {
	    this.pulse      = 1
	    if (this.divCount === undefined) {
		this.divCount   = 0
		this.barCount   = 0
	    } else {

		this.nextDiv += this.divDeltas[this.divCount%this.divN] 	
		this.divCount += 1
		if (this.divCount == this.divPerBar) {
			this.divCount=0
			this.barCount+=1
		}	
	    }
            return true;            
	}
        return false
}

Pulse.prototype.toHTML = function()  {
    return this.pulse  + "   " + this.barCount+ ":"+ this.divCount
}

Pulse.prototype.stop=function() {
	this.running=false
}

Pulse.prototype.start=function() {
	this.running    = true;
	this.nextDiv    = context.currentTime
	this.divCount   = undefined
	this.barCount   = undefined
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
