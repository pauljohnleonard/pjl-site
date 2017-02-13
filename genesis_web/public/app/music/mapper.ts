import { Player } from "./player"
import { Instrument } from "./instrument"


export class Mapper {

    table: Array<number> = [];
    constructor(root: number, base: Array<number>) {
        for (let i = 0; i < 5; i++) {
            base.forEach((v) => {
                this.table.push(root + v + 12 * i)
            }
            )
        }
    }
    map(i: number): number {
        return this.table[i]
    }

}

export class MappedPlayer {
    inst: Instrument
    mapper: Mapper
    state: Array<number>
    constructor(inst: Instrument, mapper: Mapper) {
        this.inst = inst
        this.mapper = mapper
        this.state = []
    }

    playNote(i: number, vel: number, when:number):void {
        let key = this.mapper.map(i)
        if (this.state[i] !== undefined) {
            let keyLast = this.state[i]
            if (vel === 0) {
                this.inst.playNote(keyLast, 0,when)
                delete this.state[i]
                this.state[i] === undefined
            } else if (key === keyLast) {
                this.inst.playNote(keyLast, vel,when)
            } else {
                this.inst.playNote(keyLast, 0,when)
                this.inst.playNote(key, vel,when)
                this.state[i] = key
            }
        } else {
            this.inst.playNote(key, vel,when)
            this.state[i] = key
        }
    }
}
