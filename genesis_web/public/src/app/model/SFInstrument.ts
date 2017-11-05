import { Midi } from './midi';
import { SFService } from '../services/sf.service';
import { Instrument } from './instrument';
declare var Soundfont: any;
declare var audioContext: any;

export class SFInstrument extends Instrument {

    //  opts = {}

    inst: any;
    gainValue: Number;

    midiIn = false;

    loading: boolean;

    constructor(public name: string, monitor: any, private sfService: SFService) {
        super(name, monitor);
        this.setInst(name);
    }


    mute(yes: boolean) {
        super.mute(yes);
        if (this.muted === yes) { return; }

        //      console.log(this.name + " mute " + yes);
        if (yes) {
            this.gainValue = this.inst.out.gain.value;
            this.inst.out.gain.value = 0;
        } else {
            this.inst.out.gain.value = this.gainValue;
        }

    }

    setInst(name: any) {
        // var self = this
        this.loading = true;

        if (typeof name === 'number') {
            this.name = this.sfService.gmIDToFontName[name];

        } else {

            name = name.toLowerCase();

            const names = this.sfService.getNames();
            this.name = null;
            if (names.indexOf(name) >= 0) {
                this.name = name;
            } else {
                names.forEach((n) => {
                    if (n.includes(name)) {
                        this.name = n;
                    }
                });
            }


            if (!this.name) {
                this.name = names[0];
            }
        }
        Soundfont.instrument(audioContext, this.name).then((inst: any) => {
            this.inst = inst;
            this.loading = false;
            this.gainValue = inst.out.gain.value;
        }).catch((reason) => {
            console.log(' Failed to  load : ' + this.name);
            console.log(reason);
            this.loading = false;
        });
    }


    playNote(key: any, vel: number, when: number) {
        if (this.inst === undefined) { return; }


        if (when > 0 && this.monitor) { this.monitor.spareTime(when - audioContext.currentTime); }

        if (vel > 0) {
            this.started[key] = this.inst.play(key, when, {
                gain: vel
            });
            this.sustainedKeys[key] = false;
        } else {
            if (this.started[key]) {
                if (this.sustaining) {
                    this.sustainedKeys[key] = true;
                } else {
                    this.started[key].stop(when);
                    this.sustainedKeys[key] = false;
                    delete this.started[key];
                }
            }
        }
    }


    playEvent(event: Array<number>, when: number) {

        // tslint:disable-next-line:no-bitwise
        const etype = event[0] & Midi.SYSEX_EVENT_MASK;   // 0xF0

        if (etype === Midi.NOTE_ON_MASK) {    // 144
            //  console.log(etype)
            const key = event[1];
            const vel = event[2];
            this.playNote(key, vel / 127, when);
        } else if (etype === Midi.NOTE_ON_MASK) { //  128
            //   console.log(etype)
            const key = event[1];
            this.playNote(key, 0, when);
        } else if (etype === Midi.CONTROL_MASK) {  //   176) {
            const cc = event[1];
            if (cc === 64) {
                if (event[2] > 0) {
                    this.sustain(true, when);
                } else {
                    this.sustain(false, when);
                }
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
