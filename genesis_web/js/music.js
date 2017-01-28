'use strict'

function Displayer(music,element) {
    this.music = music
    this.element = element   
}   	

Displayer.prototype.tick = function () {

    var str=""
    this.music.pulse.clients.forEach((c)=>{
         if (c !== this) { 
             if (c.toHTML !== undefined)  
                str +=c.toHTML()+"<br>"
         }
    })
    this.element.innerHTML = str
 }

function Music(pulse_el) {

   
    let ticksPerBeat = 12
    let beatsPerSec  = 2 

    this.pulse = new Pulse(ticksPerBeat,beatsPerSec)
   

    let ticksArr=[[0,4],[0,2],[0,1],[0,0.5]]
    
    let nIn=ticksArr.length

    ticksArr.forEach((ticks)=>{new Ramper(ticks,this)})
   
    var majorSeed = [0, 2, 4, 5, 7, 9, 11]
    var stack3 = [0, 2, 4, 6, 8, 10, 12]
    let nOut=20

    this.ai=new AI("marimba",this,nIn,nOut)

    this.pulse.clients.push(this.ai)
    
    var inst = new Instrument("marimba")

    this.player=new Player(this.ai,inst)
    this.pulse.clients.push(this.player)
    
    if (pulse_el !== undefined) {
        let disp = new Displayer(this,pulse_el)
        this.pulse.clients.push(disp)
    }
    var self = this 


    /*
    window.navigator.requestMIDIAccess().then(function(midiAccess) {
        midiAccess.inputs.forEach(function(midiInput) {
            self.focusPlayer.listenToMidi(midiInput)
        });
    });
    */
}
Music.prototype.tick = function() {

    try {
     this.pulse.tick() 
    } catch (err) {
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
