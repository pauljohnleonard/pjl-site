
declare var Soundfont: any
declare var audioContext: any

export class Instrument {

    started = {}
    opts = {}

    inst: any
    gainValue: Number
    muted: boolean = false
    midiIn: boolean = false
    sustaining: boolean = false
    sustainedKeys: Array<boolean> = new Array(128)
    loading: boolean

    constructor(public name: string, private monitor: any) {
        this.setInst(name)
        this.sustainedKeys.fill(false)    
    }


    mute(yes: boolean) {

        if (this.muted == yes) return;
        this.muted = yes
        //      console.log(this.name + " mute " + yes);
        if (yes) {
            this.gainValue = this.inst.out.gain.value
            this.inst.out.gain.value = 0
        } else {
            this.inst.out.gain.value = this.gainValue
        }

    }

    setInst(name: string) {
        var self = this
        this.loading = true
        this.name = name
        // this.obs.next("loading . . . ")
        Soundfont.instrument(audioContext, name).then((inst: any) => {
            this.inst = inst
            this.loading=false    
            this.gainValue = inst.out.gain.value
          })
    }


    playNote(key: any, vel: number, when: number) {
        if (this.inst === undefined) return


        if (when > 0 && this.monitor) this.monitor.spareTime(when - audioContext.currentTime)

        if (vel > 0) {
            this.started[key] = this.inst.play(key, when, {
                gain: vel
            })
            this.sustainedKeys[key] = false
        } else {
            if (this.started[key]) {
                if (this.sustaining) {
                    this.sustainedKeys[key] = true
                } else {
                    this.started[key].stop(when)
                    this.sustainedKeys[key] = false
                    delete this.started[key]
                }
            }
        }
    }

    sustain(yes: boolean, when: number) {

        if (yes) {
            this.sustaining = true
            return
        }

        this.sustaining = false

        this.sustainedKeys.forEach((v: boolean, key: number) => {
            if (v) {
                this.started[key].stop(when)
                delete this.started[key]
                this.sustainedKeys[key] = false
            }
        })


    }

    playEvent(event: Array<number>, when: number) {

        var etype = event[0] & 0xF0
        if (etype == 144) {
            //  console.log(etype)
            var key = event[1]
            var vel = event[2]
            this.playNote(key, vel / 127, when)
        } else if (etype == 128) {
            //   console.log(etype)
            var key = event[1]
            this.playNote(key, 0, when)
        } else if (etype === 176) {
            var cc = event[1]
            if (cc === 64) {
                if (event[2] > 0) this.sustain(true, when)
                else this.sustain(false, when)
            }
        }

    }


    /*
    playMidi(msg:any) {
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
    */
}