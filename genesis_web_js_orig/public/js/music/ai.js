'use strict'
var Layer = synaptic.Layer
function createWeights(nFrom, nTo) {
    var weights = []
    for (let to = 0; to < nTo; to++) {
        let row = []
        for (let from = 0; from < nFrom; from++) {
            let w = (Math.random() * 2 - 1).toFixed(3)
            row.push(w)
        }
        weights.push(row)
    }
    return weights
}
function MyNet1(nIn, nHidden, nOut) {
    nIn = nIn + nOut
    var out = new Array(nOut)
    out.fill(0.5)
    var inL = new Layer(nIn);
    var hiddenL = new Layer(nHidden)
    var outL = new Layer(nOut);
    var w1 = createWeights(nIn, nHidden)
    inL.project(hiddenL, Layer.connectionType.ALL_TO_ALL, w1);
    var w2 = createWeights(nHidden, nOut)
    hiddenL.project(outL, Layer.connectionType.ALL_TO_ALL, w2);
    this.weights = [w1, w2]
    this.activate = function(x) {
        let input = x.concat(out)
        let x1 = inL.activate(input)
        let x2 = hiddenL.activate()
        out = outL.activate()
        return out
    }
}
function MyNet2(nIn, nHidden, nOut) {
    nIn = nIn + nHidden
    var out = new Array(nOut)
    out.fill(0.5)
    var hid = new Array(nHidden)
    hid.fill(0.5)
    var inL = new Layer(nIn);
    var hiddenL = new Layer(nHidden)
    var outL = new Layer(nOut);
    var w1 = createWeights(nIn, nHidden)
    inL.project(hiddenL, Layer.connectionType.ALL_TO_ALL, w1);
    var w2 = createWeights(nHidden, nOut)
    hiddenL.project(outL, Layer.connectionType.ALL_TO_ALL, w2);
    this.weights = [w1, w2]
    this.activate = function(x) {
        let input = x.concat(hid)
        let x1 = inL.activate(input)
        hid = hiddenL.activate()
        out = outL.activate()
        return out
    }
}
function AI(music, nIn, nHidden, nOut) {
    this.nIn = nIn
    this.nOut = nOut
    this.pulse = music.pulse
    this.type = "Type1"
    this.out = new Array(this.nOut)
    this.out.fill(0.5)
    this.init(this.type, nHidden)
}
AI.prototype.tick = function() {
    this.out = this.net.activate(music.pulse.state)
    this.activateCnt++
    // console.log("OUT", this.out)   
}
AI.prototype.init = function(type, nHidden) {
    delete this.net
    switch (type) {
    case "Type1":
        this.net = new MyNet1(this.nIn,nHidden,this.nOut)
        break;
    default:
        this.net = new MyNet2(this.nIn,nHidden,this.nOut)
    }
    this.out.fill(0.5)
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
