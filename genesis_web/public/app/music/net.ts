import { Savable } from './savable'
import { Generator } from './generator'
import { DBService } from '../services/db.service'


declare var synaptic: any

var Layer = synaptic.Layer

function createWeights(nFrom: number, nTo: number, scale: number, generator: Generator): Array<Array<number>> {


    var weights: Array<Array<number>> = []
    for (let to = 0; to < nTo; to++) {
        let row: Array<number> = []
        for (let from = 0; from < nFrom; from++) {
            var x = generator.random()
            var w = (((x * 2 - 1) * 100) | 0) / 100
            row.push(w * scale)
        }
        weights.push(row)
    }
    return weights

}

export interface NetInterface {
    out: Array<number>
    weights: Array<Array<Array<number>>>
    activateCnt: number;
    nIn: number;
    netname: string
    nHidden: Array<number>
    generator: Generator
    activate(x: Array<number>): Array<number>
}

export class Net extends Savable implements Net {
    out: Array<number> = []
    weights: Array<Array<Array<number>>> = []
    activateCnt: number = 0;
    netname: string
    config: any


    constructor(public nIn:number,public nHidden: Array<number>,public nOut:number, public generator: Generator) {
        super()

    }

    activate(x: Array<number>): Array<number> {
        this.activateCnt++
        
        if  (x.length !== this.nIn) {
            throw new Error(" Net activation vector is wrong size")
        }

        return this._activate(x)
    }

    _activate(x: Array<number>): Array<number> {
        return null;
    }

    saveDB(saver: any): any {
        if (this.id !== null) return this.id

        var postItems: any = {}
        postItems.name = this.netname
        postItems.nIn = this.nIn
        postItems.nOut = this.nOut
        postItems.nHidden = this.nHidden
        postItems.seed = this.generator.seed

        var id = saver.newIDItem('net', postItems)
        
        this.setID(id)
        return id

    }

}


export class Perceptron extends Net {

    hiddenL: Array<any> = []
    outL: any
    inL: any
    netname: string = "Perceptron"

    constructor(nIn: number, nHidden: Array<number>, nOut: number, generator: Generator) {
        super(nIn,nHidden,nOut, generator)
      
        this.out = new Array(nOut)
        this.out.fill(0.5)
        this.inL = new Layer(nIn);
        this.hiddenL = []
        var prevL: any = this.inL
        var nPrev: number = 1


        nHidden.forEach((n: any) => {
            var hidL: any = new Layer(n, undefined, 0)
            this.hiddenL.push(hidL)
            var w1 = createWeights(nPrev, n, 10, generator)
            prevL.project(hidL, Layer.connectionType.ALL_TO_ALL, w1);
            this.weights.push(w1)

        })


        this.outL = new Layer(nOut, undefined, 0.5);
        var w2 = createWeights(nPrev, nOut, 10, generator)
        this.hiddenL[this.hiddenL.length - 1].project(this.outL, Layer.connectionType.ALL_TO_ALL, w2);
    }

    _activate(x: Array<number>) {

      
        
        this.inL.activate(x)
        this.hiddenL.forEach((l: any) => {
            l.activate()
        })
        this.out = this.outL.activate()
        //  console.log(this.out)
        return this.out
    }
}


export class Jordan extends Net {


    hiddenL: any
    outL: any
    inL: any
    netname: string = "Jordan"
  
    constructor(nIn: number, nHidden: Array<number>, nOut: number, generator: Generator) {
        super(nIn,nHidden,nOut, generator)
        var nInX = nIn + nOut
        this.out = new Array(nOut)
        this.out.fill(0.5)
        this.inL = new Layer(nInX);
        this.hiddenL = new Layer(nHidden[0])
        this.outL = new Layer(nOut);
        var w1 = createWeights(nInX, nHidden[0], 1, generator)
        this.inL.project(this.hiddenL, Layer.connectionType.ALL_TO_ALL, w1);
        var w2 = createWeights(nHidden[0], nOut, 1, generator)
        this.hiddenL.project(this.outL, Layer.connectionType.ALL_TO_ALL, w2);
        this.weights = [w1, w2]
    }

    _activate(x: Array<number>) {

        let input = x.concat(this.out)
        let x1 = this.inL.activate(input)
        let x2 = this.hiddenL.activate()
        this.out = this.outL.activate()
        return this.out
    }
}

export class Elman extends Net {

    hid: Array<number>
    hiddenL: any
    outL: any
    inL: any
    netname: string = "Elman"

    constructor(nIn: number, nHidden: Array<number>, nOut: number, generator: Generator) {
        super(nIn,nHidden,nOut, generator)
        var nInX = nIn + nHidden[0]
        this.out = new Array(nOut)
        this.out.fill(0.5)
        this.hid = new Array(nHidden[0])
        this.hid.fill(0.5)
        this.inL = new Layer(nInX);
        this.hiddenL = new Layer(nHidden[0])
        this.outL = new Layer(nOut);
        var w1 = createWeights(nInX, nHidden[0], 1, generator)
        this.inL.project(this.hiddenL, Layer.connectionType.ALL_TO_ALL, w1);
        var w2 = createWeights(nHidden[0], nOut, 1, generator)
        this.hiddenL.project(this.outL, Layer.connectionType.ALL_TO_ALL, w2);
        this.weights = [w1, w2]

    }

    _activate(x: Array<number>) {
        let input = x.concat(this.hid)
        let x1 = this.inL.activate(input)
        this.hid = this.hiddenL.activate()
        this.out = this.outL.activate()
        return this.out
    }
}



