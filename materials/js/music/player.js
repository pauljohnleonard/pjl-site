'use strict'

function Mapper(root, base) {
    var table = [];
    for (let i = 0; i < 5; i++) {
        base.forEach((v)=>{
            table.push(root + v + 12 * i)
        }
        )
    }
    this.map = function(i) {
        return table[i]
    }
}
function MappedPlayer(inst, mapper) {
    var state = []
    this.playNote = function(i, vel) {
        let key = mapper.map(i)
        if (state[i] !== undefined) {
            let keyLast = state[i]
            if (vel === 0) {
                inst.playNote(keyLast, 0)
                delete state[i]
                state[i] === undefined
            } else if (key === keyLast) {
                inst.playNote(keyLast, vel)
            } else {
                inst.playNote(keyLast, 0)
                inst.playNote(key, vel)
                state[i] = key
            }
        } else {
            inst.playNote(key, vel)
            state[i] = key
        }
    }
}
function AIPlayer(src, player) {
    this.src = src
    this.player = player
    this.last = src.out
    this.thresh = 0.5
    this.state = new Array(this.last.length)
    this.gain = 30
    //this.cnt = 0
    this.playing = true
  
    this.velCurve= function(x) {
        return 1.0 - Math.exp(-x*20)
    }
}




AIPlayer.prototype.tick = function() {
    var out = this.src.out
    // TODO implement resets for all tickers
    if (this.src.activateCnt < 2) {
        this.state.fill(1)
        this.last = out
        return
    }
    //if ( cnt > 1) this.playing=true;
    out.forEach((v,i,a)=>{
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
