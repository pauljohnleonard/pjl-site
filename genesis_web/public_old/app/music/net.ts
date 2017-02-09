
declare var synaptic: any


var Layer = synaptic.Layer



function createWeights(nFrom: number, nTo: number): Array<Array<number>> {
    var weights: Array<Array<number>> = []
    for (let to = 0; to < nTo; to++) {
        let row: Array<number> = []
        for (let from = 0; from < nFrom; from++) {
            let w: number = (((Math.random() * 2 - 1) * 100) | 0) / 100
            row.push(w)
        }
        weights.push(row)
    }
    return weights
}

export class  Net {
    //name:string
    //nHidden:number
    weights: Array<Array<Array<number>>>

    constructor(public name:string,public nHidden:number) {}
    activate(x: Array<number>) :Array<number> {return null}
} 

export class Jordan extends Net {

  
    out: Array<number>
    hiddenL: any
    outL: any
    inL: any

    constructor(nIn: number, nHidden: number, nOut: number) {
        super("Jordan",nHidden)
        nIn = nIn + nOut
        this.out = new Array(nOut)
        this.out.fill(0.5)
        this.inL = new Layer(nIn);
        this.hiddenL = new Layer(nHidden)
        this.outL = new Layer(nOut);
        var w1 = createWeights(nIn, nHidden)
        this.inL.project(this.hiddenL, Layer.connectionType.ALL_TO_ALL, w1);
        var w2 = createWeights(nHidden, nOut)
        this.hiddenL.project(this.outL, Layer.connectionType.ALL_TO_ALL, w2);
        this.weights = [w1, w2]
    }

    activate(x: Array<number>) {
        let input = x.concat(this.out)
        let x1 = this.inL.activate(input)
        let x2 = this.hiddenL.activate()
        this.out = this.outL.activate()
        return this.out
    }
}

export class Elman extends Net  {

    out: Array<number>
    hid: Array<number>
    hiddenL: any
    outL: any
    inL: any

    constructor(nIn: number, nHidden: number, nOut: number) {
        super("Elman",nHidden)
        nIn = nIn + nHidden
        this.out = new Array(nOut)
        this.out.fill(0.5)
        var hid = new Array(nHidden)
        hid.fill(0.5)
        this.inL = new Layer(nIn);
        this.hiddenL = new Layer(nHidden)
        this.outL = new Layer(nOut);
        var w1 = createWeights(nIn, nHidden)
        this.inL.project(this.hiddenL, Layer.connectionType.ALL_TO_ALL, w1);
        var w2 = createWeights(nHidden, nOut)
        this.hiddenL.project(this.outL, Layer.connectionType.ALL_TO_ALL, w2);
        this.weights = [w1, w2]
        this.name="Elman"
    }

    activate(x: Array<number>) {
        let input = x.concat(this.hid)
        let x1 = this.inL.activate(input)
        this.hid = this.hiddenL.activate()
        this.out = this.outL.activate()
        return this.out
    }
}