'use strict'

var midimessage=require("js/midimessage/dist/index.js")

var context = new AudioContext();

var player = {}

player.listenToMidi = function (input, options) {
	var started = {}
	var opts = options || {}
	var gain = opts.gain || function (vel) {
		return vel / 127
	}

	input.onmidimessage = function (msg) {
		var mm = msg.messageType ? msg : midimessage(msg)
		if (mm.messageType === 'noteon' && mm.velocity === 0) {
			mm.messageType = 'noteoff'
		}
		if (opts.channel && mm.channel !== opts.channel) return

		switch (mm.messageType) {
			case 'noteon':
				started[mm.key] = inst.play(mm.key, 0, {
					gain: gain(mm.velocity)
				})
				break
			case 'noteoff':
				if (started[mm.key]) {
					started[mm.key].stop()
					delete started[mm.key]
				}
				break
		}
	}
	return this
}


var inst = undefined;

Soundfont.instrument(context, 'acoustic_bass').then(function (data) {
	inst = data
})

window.navigator.requestMIDIAccess().then(function (midiAccess) {
	midiAccess.inputs.forEach(function (midiInput) {
		player.listenToMidi(midiInput)
	});
});


