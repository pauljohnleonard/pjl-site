import { DBService } from '../services/db.service'
import { Mapper, MappedPlayer } from "./mapper"
import { AI } from  "./AI"
export class AIPlayer {

        ai:AI
    constructor(ai, player) {
        this.ai = ai
        this.player = player
        this.last = ai.out
        this.thresh = 0.5
        this.state = new Array(this.last.length)
        this.gain = 30
        //this.cnt = 0
        this.playing = true

        this.velCurve = function (x) {
            return 1.0 - Math.exp(-x * 20)
        }
    }



    tick() {
        var out = this.ai.out
        // TODO implement resets for all tickers
        if (this.ai.activateCnt < 2) {
            this.state.fill(1)
            this.last = out
            return
        }
        //if ( cnt > 1) this.playing=true;
        out.forEach((v, i, a) => {
            if (v > this.thresh && this.state[i] === 0) {
                var vel = this.velCurve(v - this.last[i])
                if (this.playing) {
                    this.player.playNote(i, vel)
                    this.state[i] = vel
                }
            } else if (v < this.thresh && this.state[i] !== 0) {
                this.player.playNote(i, 0)
                this.state[i] = 0
            }
        }
        )
        this.last = out
    }
}