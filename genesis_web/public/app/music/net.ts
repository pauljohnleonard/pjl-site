declare var synaptic: any
var Layer = synaptic.Layer


function createWeights(nFrom: number, nTo: number, scale:number): Array<Array<number>> {
    var weights: Array<Array<number>> = []
    for (let to = 0; to < nTo; to++) {
        let row: Array<number> = []
        for (let from = 0; from < nFrom; from++) {
            let w: number = ((((Math.random() * 2) - 1) * 100) | 0) / 100
            row.push(w*scale)
        }
        weights.push(row)
    }
    return weights
}


export class  Net {
    weights: Array<Array<Array<number>>>=[]
    
    constructor(public name:string,public nHidden:Array<number>) {

    }

    activate(x: Array<number>) :Array<number> {return null}

} 

export class Perceptron extends Net {

  
    out: Array<number>
    hiddenL:Array<any>=[]
    outL: any
    inL: any

    constructor(nIn: number, nHidden:Array<number>, nOut: number) {
        super("Perceptron",nHidden)
        this.nIn=nIn
        this.out = new Array(nOut)
        this.out.fill(0.5)
        this.inL = new Layer(nIn);
        this.hiddenL= []
        var prevL:any=this.inL
        var nPrev:number=1
     
        nHidden.forEach((n:any)=>{
            var hidL:any=new Layer(n)
            this.hiddenL.push(hidL)  
            var w1 = createWeights(nPrev, n,10)
            prevL.project(hidL, Layer.connectionType.ALL_TO_ALL, w1);
            this.weights.push(w1)

        })
        

        this.outL = new Layer(nOut);
        var w2 = createWeights(nPrev, nOut,10)
        this.hiddenL[this.hiddenL.length-1].project(this.outL, Layer.connectionType.ALL_TO_ALL, w2);
    }

    activate(x: Array<number>) {
        this.inL.activate(x)
        this.hiddenL.forEach((l:any){
            l.activate()
        })
        this.out = this.outL.activate()
        console.log(this.out)
        return this.out
    }
}


export class Jordan extends Net {

  
    out: Array<number>
    hiddenL: any
    outL: any
    inL: any

    constructor(nIn: number, nHidden: Array<number>, nOut: number) {
        super("Jordan",[nHidden])
        nIn = nIn + nOut
        this.out = new Array(nOut)
        this.out.fill(0.5)
        this.inL = new Layer(nIn);
        this.hiddenL = new Layer(nHidden[0])
        this.outL = new Layer(nOut);
        var w1 = createWeights(nIn, nHidden[0],1)
        this.inL.project(this.hiddenL, Layer.connectionType.ALL_TO_ALL, w1);
        var w2 = createWeights(nHidden[0], nOut,1)
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

    constructor(nIn: number, nHidden:Array<number>, nOut: number) {
        super("Elman",[nHidden])
        nIn = nIn + nHidden[0]
        this.out = new Array(nOut)
        this.out.fill(0.5)
        this.hid = new Array(nHidden[0])
        this.hid.fill(0.5)
        this.inL = new Layer(nIn);
        this.hiddenL = new Layer(nHidden[0])
        this.outL = new Layer(nOut);
        var w1 = createWeights(nIn, nHidden[0],1)
        this.inL.project(this.hiddenL, Layer.connectionType.ALL_TO_ALL, w1);
        var w2 = createWeights(nHidden[0], nOut,1)
        this.hiddenL.project(this.outL, Layer.connectionType.ALL_TO_ALL, w2);
        this.weights = [w1, w2]

    }

    activate(x: Array<number>) {
        let input = x.concat(this.hid)
        let x1 = this.inL.activate(input)
        this.hid = this.hiddenL.activate()
        this.out = this.outL.activate()
        return this.out
    }
}



