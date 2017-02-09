import { Component, ViewChild, OnInit } from '@angular/core';
//import { MaterialModule } from '@angular/material';
import { DBService } from '../services/db.service'
import { AI } from './ai';
import { PlayerAI } from './player-ai';
import { PlayerDetailComponent } from './player-detail.component';
import { Mapper,MappedPlayer } from './mapper';
import { Instrument } from './instrument'
import { Pulse } from './pulse'
import { Player } from "./player"
import { Ramper } from "./ramper"


@Component({
    selector: "music",
    template: `
       <md-card>             
            <div style="width: 100%">
            <md-card-title>
              <button md-mini-fab  (click)="addPlayer(undefined)"><md-icon>add</md-icon></button><br>
            </md-card-title>
            <md-card-content>

            <div *ngFor="let p of players">
               <player-detail [player]=p > </player-detail>
            </div>
 	       	</md-card-content>        
        	</div>    
       </md-card>
    ` //,
    //styleUrls: ["css/mystyles.css"]
})


/*
function Displayer(music,element) {
    this.music = music
    this.element = element   
}   	

Displayer.prototype.tick = function () {

    var str=""
    this.music.pulse.clients.forEach((c)=>{
         if (c !== this) { 
             if (c.toHTML !== undefined)  
                str +=c.toHTML()+"<br>"
         }
    })
    this.element.innerHTML = str
 }
*/


export class MusicComponent implements OnInit {

    
    players:Array<Player>=[]
    pulse:Pulse
    selectedPlayer:Player
    ticksArr:Array<Array<number>>


//    constructor(){}
    
    
    constructor(private dbService: DBService) {

    }


    constructorX() {
       

        let ticksPerBeat:number = 12
        let beatsPerSec:number = 2
        
        this.pulse = new Pulse(ticksPerBeat, beatsPerSec)


        this.ticksArr = [[0, 8], [0, 4], [0, 2], [0, 1], [0, 0.5]]
  
        this.ticksArr.forEach((ticks:Array<number>) => { new Ramper(ticks, this.pulse) })

        //var majorSeed = [0, 2, 4, 5, 7, 9, 11]
        //var stack3 = [0, 2, 4, 6, 8, 10, 12]


        this.addPlayer("marimba")

        this.addPlayer("vibraphone")

        /*
        if (pulse_el !== undefined) {
            let disp = new Displayer(this, pulse_el)
            this.pulse.clients.push(disp)
        }
        var self = this
        */
    }


    addPlayer(name:any) {
        let nOut:number = 20
        let nHidden:number = 120
 
        let nIn = this.ticksArr.length
      
        let player=new Player()
        this.players.push(player)

        let ai=new AI(this.dbService)
        player.details.ai=ai

        this.selectedPlayer=player
        
        ai.init(this.pulse, nIn, nHidden, nOut)
        this.pulse.clients.push(ai)

        if (name === undefined) name="marimba"
        player.details.name=name
        
        var inst = new Instrument(name)
        player.details.inst=inst
       
        var base:Array<number> = [0, 3, 5, 7, 10]

        var mapper = new Mapper(40, base)
        player.details.mapper=mapper

        var mapPlayer = new MappedPlayer(inst, mapper)
        
        let playerAI = new PlayerAI(ai, mapPlayer)
        this.pulse.clients.push(playerAI)
    }
    

    tick() {
        try {
            this.pulse.tick()
        } catch (err) {
            console.log(err.stack)
        }
    }

    

    start() {
        this.pulse.start()
    }

    stop() {
        this.pulse.stop()
    }

    pause() {
        this.pulse.pause()
    }

    isRunning():boolean {
        return this.pulse.running
    }
    

    ngOnInit() {
        //  console.log("HELLO"+this.ai.out)
    }

    
    ngAfterViewInit() {
        this.constructorX()
    }
    


    /*
    window.navigator.requestMIDIAccess().then(function(midiAccess) {
        midiAccess.inputs.forEach(function(midiInput) {
            self.focusPlayer.listenToMidi(midiInput)
        });
    });
    */

} 