declare var Soundfont : any
declare var audioContest : any

export class Instrument {

    constructor(name, music) {
        
       
        this.setInst(name)
        this.started = {}
        this.opts = {}
        this.gain = function (vel) {
            return vel / 127
        }
        this.music = music
    }


    setInst(name) {
        this.name = name;
        var self = this

        Soundfont.instrument(audioContext, name).then(function (inst) {
            self.inst = inst
        
            //inst.connect(audioContext.destination)
        })



    }

    playNote(key, vel) {
        if (this.inst === undefined) return

        if (vel > 0) {
            this.started[key] = this.inst.play(key, 0, {
                gain: vel
            })
        } else {
            if (this.started[key]) {
                this.started[key].stop()
                delete this.started[key]
            }
        }
    }

    playMidi(msg) {
        var mm = msg.messageType ? msg : midimessage(msg)
        if (mm.messageType === 'noteon' && mm.velocity === 0) {
            mm.messageType = 'noteoff'
        }
        if (this.opts.channel && mm.channel !== this.opts.channel)
            return
        switch (mm.messageType) {
            case 'noteon':
                if (this.inst === undefined)
                    return
                this.started[mm.key] = this.inst.play(mm.key, 0, {
                    gain: this.gain(mm.velocity)
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

    listenToMidi(input, options) {
        var started = {}
        var opts = options || {}
        var gain = opts.gain || function (vel) {
            return vel / 127
        }
        var self = this
        input.onmidimessage = function (msg) {
            self.playMidi(msg)
        }
        return this
    }
}