import { Savable } from './savable';
import { MidiEvent } from './midi';


/**
 *
 *
 */

export class MidiBuffer extends Savable {

    constructor(public buff: Array<MidiEvent>, id: any) {
        super();
        if (id !== undefined) { this.setID(id); }
    }

    saveDB(saver: any): any {
        if (this.isSaved()) { return this.id; }

        const  postItems =
            JSON.stringify(this.buff);


        const id = saver.newIDItem('midi', postItems);

        this.setID(id);
        return id;
    }
}
