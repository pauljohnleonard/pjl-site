import { Component, Input, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { AIComponent } from './ai.component';

declare var Pulse: any;

declare var Ramper: any;
declare var Instrument: any;
declare var Mapper: any;
declare var MappedPlayer: any;


@Component({
    selector: "music",

    template: `
               Hello music
               <!--div class="button-row">
                <button md-raised-button id="save_but" class="btn btn-primary" onclick="save()">Save</button>
                <div class="btn-group">
                    <button md-raised-button id="play_but" onclick="start()">Play</button>
                    <button md-raised-button id="pause_but" onclick="pause()" style="visibility:hidden">Pause</button>
                </div>
            </div--->
            <ai> </ai>
 
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

    @ViewChild(AIComponent) ai : AIComponent;
    
    constructorX() {
       

        let ticksPerBeat = 12
        let beatsPerSec = 2

        this.pulse = new Pulse(ticksPerBeat, beatsPerSec)


        let ticksArr = [[0, 8], [0, 4], [0, 2], [0, 1], [0, 0.5]]

        let nIn = ticksArr.length

        ticksArr.forEach((ticks) => { new Ramper(ticks, this) })

        //var majorSeed = [0, 2, 4, 5, 7, 9, 11]
        //var stack3 = [0, 2, 4, 6, 8, 10, 12]

        let nOut = 20
        let nHidden = 120

        this.ai.init(this, nIn, nHidden, nOut)
        
        this.pulse.clients.push(this.ai)

        var inst = new Instrument("marimba")

        var base = [0, 3, 5, 7, 10]

        var mapper = new Mapper(40, base)

        var mapPlayer = new MappedPlayer(inst, mapper)

        this.player = new AIPlayer(this.ai, mapPlayer)


        this.pulse.clients.push(this.player)

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



    ngOnInit() {
        //  console.log("HELLO"+this.ai.out)
    }

    ngAfterViewInit() {
        this.constructorX()
    }
} 