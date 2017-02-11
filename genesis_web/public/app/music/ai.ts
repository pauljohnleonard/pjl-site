import { DBService } from '../services/db.service'
import { NetService } from '../services/net.service'
import { Net } from './net'
import { Ticker } from './ticker'
import { Pulse } from './pulse'





export class AI implements Ticker{

    types = ["Jordan", "Elman"];
    nHidden:any
    out:Array<number>
    saved:boolean
    activateCnt:number=0
    nIn:number
    nOut:number
    net:Net
    pulse:Pulse

    constructor(private dbService:DBService,private netService:NetService){

    }

    ngOnInit() {
        //  console.log("HELLO"+this.ai.out)
    }

    ngAfterViewInit() {

    }

    start() {}
    stop() {}

    save() {
        var w = this.net.weights
        var data = JSON.stringify(w)
        this.saved = true
        this.dbService.write(w)
    }

    //  ai;
    init(pulse:Pulse, nIn:number, nHidden:number, nOut:number) {
        this.nIn = nIn
        this.nOut = nOut
        this.pulse = pulse
        this.out = new Array(this.nOut)
        this.out.fill(0.5)
        this.implant({nHidden:[nHidden]})
    }

    tick() {
        this.out = this.net.activate(this.pulse.state)
        this.activateCnt++
        // console.log("OUT", this.out)   
    }


	
    implant(params:any) {
	 

        delete this.net

        if (params.type === undefined) params.type=this.netService.types[0]

        this.net=Object.create(params.type.prototype);
        
        this.net.constructor(this.nIn,params.nHidden,this.nOut)

        /*
        switch (params.type) {
            case "Elman":
                this.net = new Elman(this.nIn, params.nHidden, this.nOut)
                break;
            case "Jordan":
                this.net = new Jordan(this.nIn, params.nHidden, this.nOut)
        }
        */

        this.out.fill(0.5)
        this.activateCnt = 0
    }

    toHTML() {
        var str = "<p id=AI>  Net.out\t:"
        for (let i = 0; i < this.out.length; i++) {
            str += "\t" + this.out[i].toFixed(3)
        }
        str += "<\p>"
        return str
    }
}
