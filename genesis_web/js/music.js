'use strict'


function Music(pulse_el) {
    this.pulse = new Pulse()

    var majorSeed = [0, 2, 4, 5, 7, 9, 11]
    var stack3 = [0, 2, 4, 6, 8, 10, 12]
            

    this.tickers = []
    this.tickers.push(new AIPercussionPlayer())
    this.focusPlayer = new Player("marimba",this)
    this.focusPlayer.tick = tickChroma
    this.tickers.push(this.focusPlayer)
    var player = new Player("acoustic_bass",this)
    this.tickers.push(player)
    if (pulse_el !== undefined) {
        let disp = new PulseDisplayer(this,pulse_el)
        this.tickers.push(disp)
    }
    var self = this
    window.navigator.requestMIDIAccess().then(function(midiAccess) {
        midiAccess.inputs.forEach(function(midiInput) {
            self.focusPlayer.listenToMidi(midiInput)
        });
    });
}





Music.prototype.tick = function() {
    try {
        if (this.pulse.tick()) {


            for (let x of this.tickers) {
                x.tick()
            }
        }
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
