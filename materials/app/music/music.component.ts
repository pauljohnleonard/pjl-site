import { Component, Input, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { DBService } from 'app/services/db.service'
import { AI } from './ai';
import { PlayerAI } from './player-ai';
import { AIPlayerDetailComponent } from './ai-player-detail.component';
import { Mapper,MappedPlayer } from './mapper';
import { Instrument } from './instrument'

declare var Pulse: any;
declare var Ramper: any;
declare var Instrument: any;


@Component({
    selector: "music",

    template: `
       <md-card>             
            <div style="width: 100%">
            <md-card-title>
              <button md-mini-fab  (click)="addPlayer()"><md-icon>add</md-icon></button><br>
            </md-card-title>
            <md-card-content>

            <div *ngFor="let p of aiPlayers">
              <ai-player-detail [aiPlayer]=p> </ai-player-detail>
            </div>
            
 	       	</md-card-content>        
        	</div>    
       </md-card>
    `,
    styleUrls: ["css/mystyles.css"]
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

    // @ViewChild(AIComponent) ai : AIComponent;
    
    aiPlayers:array<PlayersAI>=[]
   
    
    constructor(private dbService: DBService) {
		console.log("XYZ_MUS")
    }

    constructorX() {
       

        let ticksPerBeat = 12
        let beatsPerSec = 2
        
        this.pulse = new Pulse(ticksPerBeat, beatsPerSec)


  
        let ticksArr = [[0, 8], [0, 4], [0, 2], [0, 1], [0, 0.5]]

        this.nIn = ticksArr.length

        ticksArr.forEach((ticks) => { new Ramper(ticks, this) })

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

    /*
    window.navigator.requestMIDIAccess().then(function(midiAccess) {
        midiAccess.inputs.forEach(function(midiInput) {
            self.focusPlayer.listenToMidi(midiInput)
        });
    });
    */

    addPlayer(name) {
        let nOut = 20
        let nHidden = 120
        let n
        
        this.ai=new AI(this.dbService)
        this.selectedAI=this.ai
        this.ai.init(this, this.nIn, nHidden, nOut)
        this.pulse.clients.push(this.ai)

        if (name === undefined) name="marimba"
        
        var inst = new Instrument(name)

        var base = [0, 3, 5, 7, 10]

        var mapper = new Mapper(40, base)
        var mapPlayer = new MappedPlayer(inst, mapper)
        this.player = new PlayerAI(this.ai, mapPlayer)
        this.aiPlayers.push(this.player)    
        this.pulse.clients.push(this.player)
   
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
} 