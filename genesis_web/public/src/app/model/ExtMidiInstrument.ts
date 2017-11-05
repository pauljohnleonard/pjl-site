import { Midi } from './midi';
import { SFService } from '../services/sf.service';
import { Instrument } from './instrument';
import { ExtMidiDevice } from './extmididevice';

declare var Soundfont: any;
declare var audioContext: any;


export class ExtMidiInstrument extends Instrument {

    //  opts = {}


    midiIn = false;


    constructor(public name: string, monitor: any, public dev: any, private channel: number) {
        super(name, monitor);
        this.setInst(name);
    }



    setInst(name: any) {

    }


    playNote(key: any, vel: number, when: number) {


        if (vel > 0) {
            if (!this.muted) {
                this.started[key] = this.dev.send(key, when, {
                    gain: vel
                });
                this.sustainedKeys[key] = false;
            }
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

        event[0] = ( event[0] & 0xf0 ) | this.channel ; // tslint:disable-line no-bitwise
        if (!this.muted) {
            this.dev.send(event);
        }

        /*
        // tslint:disable-next-line:no-bitwise
        const etype = event[0] & Midi.SYSEX_EVENT_MASK   // 0xF0

        if (etype === Midi.NOTE_ON_MASK) {    // 144
            //  console.log(etype)
            const key = event[1]
            const vel = event[2]
            this.playNote(key, vel / 127, when)
        } else if (etype === Midi.NOTE_ON_MASK) { //  128
            //   console.log(etype)
            const key = event[1]
            this.playNote(key, 0, when)
        } else if (etype === Midi.CONTROL_MASK) {  //   176) {
            const cc = event[1]
            if (cc === 64) {
                if (event[2] > 0) {
                    this.sustain(true, when)
                } else {
                    this.sustain(false, when)
                }
            }
        }
        */
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
