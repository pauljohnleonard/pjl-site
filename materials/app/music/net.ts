
declare var synaptic:any
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

export class Jordan {

    constructor(nIn, nHidden, nOut) {
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
        this.activate = function (x) {
            let input = x.concat(out)
            let x1 = inL.activate(input)
            let x2 = hiddenL.activate()
            out = outL.activate()
            return out
        }
    }
}

export class Elman {

    constructor(nIn, nHidden, nOut) {
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
        this.activate = function (x) {
            let input = x.concat(hid)
            let x1 = inL.activate(input)
            hid = hiddenL.activate()
            out = outL.activate()
            return out
        }
    }
}