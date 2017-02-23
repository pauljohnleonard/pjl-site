declare var Soundfont : any
declare var audioContext : any

export class Instrument {

    started = {}
    opts = {}
    name:string
    inst:any
    gainValue:Number
    muted:boolean=false
    midiIn:boolean=false
        
    constructor(name:string,private monitor:any) {
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
        var self = this
        this.name = "loading . . . "

        Soundfont.instrument(audioContext, name).then((inst:any) => {
            this.inst = inst
            this.name = name
            this.gainValue=inst.out.gain.value
            console.log(" Loaded instrument " + name)
            //inst.connect(audioContext.destination)
        })
    }



    playNote(key:any , vel:number, when:number) {
        if (this.inst === undefined) return

        if (this.monitor) this.monitor.spareTime(when-audioContext.currentTime)

        if (vel > 0) {
            this.started[key] = this.inst.play(key, when, {
                gain: vel
            })
        } else {
            if (this.started[key]) {
                this.started[key].stop(when)
                delete this.started[key]
            }
        }
    }
    

    playEvent(event:Array<number>,when:number) {

        var etype = event[0] &0xF0
        if (etype == 144) {
          //  console.log(etype)
            var key=event[1]
            var vel=event[2]
            this.playNote(key,vel/127,when)
        } else if (etype == 128) {
         //   console.log(etype)
            var key=event[1]
            this.playNote(key,0,when)
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