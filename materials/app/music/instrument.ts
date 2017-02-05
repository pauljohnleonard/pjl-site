
import { Music } from "./music.component"

declare var Soundfont : any
declare var audioContext : any

export class Instrument {

    started = {}
    opts = {}
    name:string
    inst:any
    gainValue:Number
    muted:boolean=false
        
    constructor(name:string) {
        this.setInst(name)
    }


    mute(yes:boolean) {
        
        if (this.muted == yes) return;
        this.muted = yes    
        console.log(this.name+ " mute " + yes);
        if (yes) {
            this.gainValue=this.inst.out.gain.value
            this.inst.out.gain.value=0
        } else {
            this.inst.out.gain.value=this.gainValue 
        }
        
    }

    setInst(name:string) {
        this.name = name;
        var self = this

        Soundfont.instrument(audioContext, name).then((inst:any) => {
            this.inst = inst
            this.gainValue=inst.out.gain.value
        
            //inst.connect(audioContext.destination)
        })
    }




    playNote(key:any , vel:Number) {
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
    /*
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
    */
}