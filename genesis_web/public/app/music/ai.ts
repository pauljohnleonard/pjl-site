import { DBService } from '../services/db.service'
import { NetService } from '../services/net.service'
import { Net } from './net'
import { Ticker } from './ticker'
import { Pulse } from './pulse'
import { Savable } from './savable'

import { Generator } from './generator'


export class AI extends  Savable {


    out:Array<number>
    saved:boolean
    activateCnt:number=0
    nIn:number
    nOut:number
    net:Net
    pulse:Pulse

    constructor(private dbService:DBService,private netService:NetService){
        super()
    }

  
    start() {}
    stop() {}

    save() {
        var w = this.net.weights
        var data = JSON.stringify(w)
        this.saved = true
    }

    //  ai;
    init(pulse:Pulse, net:any) {
        this.nIn = net.nIn
        this.nOut = net.nOut
        this.pulse = pulse
        this.out = new Array(this.nOut)
        this.out.fill(0.5)
        this.implant(net)
    }


    implant(net:any) {
	 
        delete this.net
        var proto:any
        if (net.type === undefined) {
            proto=this.netService.types["Elman"].prototype
         } else {
            proto=this.netService.types[net.type].prototype
         }

        this.net=Object.create(proto);
    
        var generator = new Generator(net.seed)

        if (net.nIn !== this.nIn) {
            if (net.nIn) console.log(" input mismatch dela with it PAUL ")
            net.nIn=this.nIn
        }
     
        if (net.nOut !== this.nOut) {
            if (net.nOut) console.log(" output mismatch dela with it PAUL ")
            net.nOut=this.nOut
        }
        
        this.net.constructor(net.nIn,net.nHidden,net.nOut,generator)

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



    saveDB(saver: any): any {
        if (this.id !== null) return this.id

        var postItems: any = {}
        var id=this.net.saveDB(saver)
        postItems.net=id
    
        var id = saver.newIDItem('ai', postItems)
        
        this.setID(id)
        return id

    }
   
}
