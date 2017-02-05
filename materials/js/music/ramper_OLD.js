'use strict'

function RamperDisplayer(ramp,element) {
    this.ramp = Ramper
    this.element = element  

}   	

RamperDisplayer.prototype.tick = function () {
    this.element.innerHTML = this.ramp.toHTML()
}



function Ramper(ticks,music) {
    this.ticks=ticks
	this.pulse=music.pulse
	this.pulse.clients.push(this)
}



Ramper.prototype.start = function() {
	this.tickPtr =0
	this.tStart = 0
}


const TOL=0.00001

Ramper.prototype.tick = function() {

	var time=this.pulse.beat-this.tStart

    while(true) {
	    var t1=this.ticks[this.tickPtr]
        var t2=this.ticks[this.tickPtr+1]
        if ( time+0.00001 >= t2 ) {        //  advance a bit so we always catch the sharp rise
            this.tickPtr = this.tickPtr+1
            if (this.tickPtr >= this.ticks.length-1)  {
                this.tStart += this.ticks[this.ticks.length-1]
                this.tickPtr = 0
                time -= this.ticks[this.ticks.length-1]
            }
            continue
        } else if (time+TOL < t1) {
            console.log("time<t1 SHOULD NOT HAPPEN ")   // Well I guess 
        } 
        this.val  = (t2-time)/(t2-t1)
		break;
    }
    this.pulse.state.push(this.val)

}

Ramper.prototype.toHTML = function()  {
    return    this.tickPtr + " :  " + this.val 
}

