import { Player } from  "./player"


export class Mapper {

    constructor(root, base) {
        var table = [];
        for (let i = 0; i < 5; i++) {
            base.forEach((v) => {
                table.push(root + v + 12 * i)
            }
            )
        }
        this.map = function (i) {
            return table[i]
        }
    }
}

export class MappedPlayer implements Player {
    constructor(inst, mapper) {
        this.inst=inst
        this.mapper=mapper
        this.state = []
    }
        
    playNote(i, vel) {
            let key = this.mapper.map(i)
            if (this.state[i] !== undefined) {
                let keyLast = this.state[i]
                if (vel === 0) {
                    this.inst.playNote(keyLast, 0)
                    delete this.state[i]
                    this.state[i] === undefined
                } else if (key === keyLast) {
                    this.inst.playNote(keyLast, vel)
                } else {
                    this.inst.playNote(keyLast, 0)
                    this.inst.playNote(key, vel)
                    this.state[i] = key
                }
            } else {
                this.inst.playNote(key, vel)
                this.state[i] = key
            }
        }
    }
}