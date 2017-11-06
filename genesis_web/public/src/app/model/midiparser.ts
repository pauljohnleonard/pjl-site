import { MidiEvent } from './midi';
import { MidiSequencer } from './midisequencer';
import { Midi, MidiLane } from './midi';

export const MidiParser = {
    loadMidi: function loadMidi(midi, music) {
        let pos = 0;
        const ticksPerBeat = midi.header.ticksPerBeat;
        const lanes = Array<MidiLane>();

        midi.tracks.forEach(track => {

            let instName = null;
            let ticks = 0;
            let beat = 0;
            track.forEach(element => {
                ticks += element.deltaTime;
                beat = ticks / ticksPerBeat;
                switch (element.type) {
                    case 'meta':    /// TODO Meta track
                        switch (element.subtype) {
                            case 'setTempo':
                                const bpm = (1000000 / element.microsecondsPerBeat) * 60;
                                console.log('BPM:' + bpm);
                                music.pulse.bpm = bpm;
                                break;
                            case 'timeSigniture':
                                const sig = element.numerator + '/' + element.denominator;
                                music.pulse.setTimeSig(sig);
                                console.log(' Sig : ' + sig);
                                break;
                            case 'endOfTrack':
                                console.log(' EOT : ' + element.deltaTime);
                                break;
                            case 'trackName':
                                instName = element.text;
                                break;
                            default:
                                console.log(' Unkown meta subtype : ' + element.subtype);
                        }
                        break;

                    case 'channel':


                        const chan = element.channel;
                        let lane = lanes[chan];

                        if (lane === undefined) {
                            lane = new MidiLane( null , chan, 0 );
                            lanes[chan] = lane;
                        }

                        switch (element.subtype) {
                            case 'noteOn':
                                lane.push(new MidiEvent(beat, [Midi.NOTE_ON_MASK, element.noteNumber, element.velocity]));
                                break;
                            case 'noteOff':
                                lane.push(new MidiEvent(beat, [Midi.NOTE_OFF_MASK, element.noteNumber, element.velocity]));
                                break;

                            case 'programChange':
                                lane.push(new MidiEvent(beat, [Midi.PROGRAM_MASK, element.programNumber]));
                                if (lane.patch.prog !== null) {
                                    console.log(' IMPLEMENT ME:   Channel has multiple voices');
                                }
                                lane.patch.prog = element.programNumber;
                                break;
                            case 'controller':
                                lane.push(new MidiEvent(beat, [Midi.CONTROL_MASK, element.controllerType, element.value]));
                                if (element.controllerType === Midi.BANK_SELECT_CC) {
                                    console.log('bankSelect : ', element.value);
                                    lane.patch.bank = element.value;
                                } else {
                                    console.log('contoller : ', element.controllerType, element.value);
                                }
                                break;
                            default:
                                console.log(' channel sub type not imlemented yet ; ' + element.subtype);
                        }
                        break;

                    default:
                        console.log(' type not imlemented yet ; ' + element.type);
                }

            });
        });

        lanes.forEach(lane => {

            const midiPlayer = music.addMidiPlayer(lane);
            pos++;
            const seq: MidiSequencer = <MidiSequencer>midiPlayer.ticker;
            seq.setBuffer(lane, null);
        });

    }
};
