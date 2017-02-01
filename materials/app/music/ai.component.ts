import { Component, Input, ViewChild, OnInit, AfterViewInit } from '@angular/core';

declare var MyNet1: any;
declare var MyNet2: any;

@Component({
    selector: "ai",
    templateUrl: "app/music/ai.html", 
    styleUrls: ["css/mystyles.css"]

})


export class AIComponent implements OnInit {

	types=["Type1","Type2"];
	type="Type1";
	nHidden
	type


    ngOnInit() {
        //  console.log("HELLO"+this.ai.out)
    }

    ngAfterViewInit() {

    }

    save() {
        var w = this.ai.net.weights
        var data = JSON.stringify(w)
        writeWeights(w)
        saved = true
    }

	/*
	init() {
		var type = nn_type_in.value
		var nhid = Number(n_hidden_in.value)
		this.music.ai.init(type, nhid);
		//saved = false
	}
	*/

    //  ai;
    init(music, nIn, nHidden, nOut) {
        this.nIn = nIn
        this.nOut = nOut
        this.music = music
        this.out = new Array(this.nOut)
        this.out.fill(0.5)
        this.type="Type1"
        this.nHidden=nHidden
        this.implant()
    }

    tick() {
        this.out = this.net.activate(this.music.pulse.state)
        this.activateCnt++
        // console.log("OUT", this.out)   
    }

    implant() {


        delete this.net
        switch (this.type) {
            case "Type1":
                this.net = new MyNet1(this.nIn, this.nHidden, this.nOut)
                break;
            default:
                this.net = new MyNet2(this.nIn, this.nHidden, this.nOut)
        }
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
