'use strict'

var Layer = synaptic.Layer

function createWeights(nFrom, nTo) {
    var weights = []
    for (let to = 0; to < nTo; to++) {
        let row = []
        for (let from = 0; from < nFrom; from++) {
            let w = Math.random() * 2 - 1
            row.push(w)
        }
        weights.push(row)
    }
    return weights
}
function MyNet(nIn, nHidden, nOut) {
    this.nIn = nIn + nOut
    this.nHidden = nHidden
    this.nOut = nOut
    var out = new Array(this.nOut)
    out.fill(0)
    this.init()
    this.activate = function(x) {
        let input = x.concat(out)
        let x1 = this.inL.activate(input)
        let x2 = this.hiddenL.activate()
        out = this.outL.activate()
        return out
    }
}
MyNet.prototype.init = function() {
    this.inL = new Layer(this.nIn);
    this.hiddenL = new Layer(this.nHidden)
    this.outL = new Layer(this.nOut);
    var w1 = createWeights(this.nIn, this.nHidden)
    this.inL.project(this.hiddenL, Layer.connectionType.ALL_TO_ALL, w1);
    var w2 = createWeights(this.nHidden, this.nOut)
    this.hiddenL.project(this.outL, Layer.connectionType.ALL_TO_ALL, w2);
}
function AI(music, nIn, nHidden,nOut) {
    this.pulse = music.pulse
    //  var net    = new synaptic.Architect.LSTM(nIn,4,4,4,nOut);
    // var net   = new Architect.Liquid(nIn,pool,nOut,connections,gates);
    //  net.set({
    //     squash: Neuron.squash.TANH,
    //      bias: 0
    // })
    this.net = new MyNet(nIn,nHidden,nOut)
    this.out = new Array(nOut)
    this.out.fill(0)
}
AI.prototype.tick = function() {
    this.out = this.net.activate(music.pulse.state)
    this.activateCnt++
    // console.log("OUT", this.out)   
}
AI.prototype.init = function() {
    this.net.init()
    this.activateCnt = 0
}
AI.prototype.toHTML = function() {
    var str = "<p id=AI>  Net.out\t:"
    for (let i = 0; i < this.out.length; i++) {
        str += "\t" + this.out[i].toFixed(3)
    }
    str += "<\p>"
    return str
}
//var net = new Architect.Liquid(input,pool,output,connections,gates);