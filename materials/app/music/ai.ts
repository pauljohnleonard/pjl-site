
import { DBService } from 'app/services/db.service'
import { Elman,Jordan } from 'app/music/net'


export class AI {

	
    types = ["Jordan", "Elman"];
    type = "Jordan";
    nHidden:any
    out:Array<number>
    dbService:DBService
    saved:boolean

    constructor(dbService:DBService){
		this.dbService=dbService

    }

    ngOnInit() {
        //  console.log("HELLO"+this.ai.out)
    }

    ngAfterViewInit() {

    }

    save() {
        var w = this.net.weights
        var data = JSON.stringify(w)
        this.saved = true
        this.dbService.write(w)
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
        this.type = "Jordan"
        this.nHidden = nHidden
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
            case "Elman":
                this.net = new Elman(this.nIn, this.nHidden, this.nOut)
                break;
            case "Jordan":
                this.net = new Jordan(this.nIn, this.nHidden, this.nOut)
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
