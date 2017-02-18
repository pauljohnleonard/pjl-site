import { DBService } from '../services/db.service'
import { NetService } from '../services/net.service'
import { SamplesService } from '../services/samples.service'
import { AI } from './ai';
import { AISquencer } from './aisequencer';
import { Metro } from './metro'
import { Mapper,MappedPlayer } from './mapper';
import { Instrument } from './instrument'
import { Pulse } from './pulse'
import { Player } from "./player"
import { Ramper } from "./ramper"
import { MidiSequencer } from './midisequencer'
import { Savable } from './savable'


declare var firebase:any

export class Music extends Savable {

    playerType:string="AI"
    playerTypes:Array<string> =["AI","midi"]
    players:Array<Player>=[]
    pulse:Pulse
    selectedPlayer:Player
    ticksArr:Array<Array<number>>
    metro:Metro
    recording:boolean=false
    recordBuffer:Array<any>=[]
    playHead:number=0
    title:string="A Song"
    
    constructor(private dbService: DBService,private samplesService:SamplesService,private netService:NetService) {
    super()    
    console.log("new music constructed")
      var self=this
      window.navigator["requestMIDIAccess"]().then(
          (midiAccess:any) => {
		     midiAccess.inputs.forEach(function (midiInput:any) {
                console.log(midiInput)
		        midiInput.onmidimessage = function(event:any) {
                  //  console.log(event.data)
                    
                    if (self.recording && self.pulse.running) {
                        let stamp = self.pulse.getBeatNow()
                        self.recordBuffer.push([stamp,event.data])    
                    }

                    self.players.forEach((p)=>{
                         if (p.details.inst.recording) p.details.inst.playEvent(event.data,0)     
                    })

                }
		    })
      })
      
      this.setID(0)
      this.constructorX()
    }


    saveDB(saver:any):any { 
        if (this.isSaved()) return
        var itemIDs:Array<any>=[]
    
        var postItems:any ={
        }
       
        var itemID:string=this.pulse.saveDB(saver)
        
        postItems[itemID]=true

        this.players.forEach((p:Player)=>{
            var itemID:string=p.saveDB(saver)
            if (itemID !== null) {
                postItems[itemID]=true
            }
        })
    
        this.setID(saver.newIDItem('songs',postItems))

        postItems ={
            title:this.title,
        }

        saver.newIDItem('songinfo/'+saver.user.uid,postItems,this.id)
            
    }

    loadPlayer(playerSnap:any) {

        switch(playerSnap.child("type").val()) {

          case "MidiPlayer":
            var instName = playerSnap.child("inst").val()
            var midiPlayer = this.addMidiPlayer(instName)
            midiPlayer.setID(playerSnap.key)

            var midiKey = playerSnap.child("midi").val()
            var midiRef = firebase.database().ref("midi").child(midiKey);
            midiRef.once("value").then((midi: any) => {
                var midiData:any = JSON.parse(midi.val())
                var seq:MidiSequencer=<MidiSequencer>midiPlayer.ticker
                seq.setBuffer(midiData,midiKey)
            })
            break

          case "Pulse":
            var bpm = playerSnap.child("bpm").val()
            this.pulse.bpm=bpm            
            break
          default:
            console.log("UNKOWN TYPE : " + playerSnap.child("type").val())
        }
        
    }

    loadDB(songref:any) {
        songref.once("value").then((song: any) => {
            song.forEach((playerKey: any) => {
                var playerref = firebase.database().ref("players").child(playerKey.key);
                playerref.once("value").then((playerSnap: any) => {
                      this.loadPlayer(playerSnap)
                    
                })
            })
        })
    }
    
    constructorX() {
       
        let ticksPerBeat:number = 12
        let bpm:number = 120
        
        this.pulse = new Pulse(ticksPerBeat, bpm)

        this.ticksArr = [[0,4],[0,2],[0,1], [0, 1.5, 3, 4]]
  
        this.ticksArr.forEach((ticks:Array<number>) => { new Ramper(ticks, this.pulse) })

        //var majorSeed = [0, 2, 4, 5, 7, 9, 11]
        //var stack3 = [0, 2, 4, 6, 8, 10, 12]

        this.metro=new Metro(this.pulse,this.samplesService)
       
    }


    addMidiPlayer(name:string): Player {
        let player=new Player(this)
        this.players.push(player)
        var inst = new Instrument(name)
        player.details.inst=inst
        var midiPlayer = new MidiSequencer(player)
        player.ticker = midiPlayer 
        this.change()
        return player
    }
    
    addAIPlayer(name:any):Player {
        let nOut:number = 20
        let nHidden:number = 20
        let nIn = this.ticksArr.length
      
        let player=new Player(this)
        this.players.push(player)

        let ai=new AI(this.dbService,this.netService)
        
        player.details.ai=ai

        this.selectedPlayer=player
        
        ai.init(this.pulse, nIn, nHidden, nOut)
        
        if (name === undefined) name="marimba"
        player.details.name=name
        
        var inst = new Instrument(name)
        player.details.inst=inst
       
        var base:Array<number> = [0, 3, 5, 7, 10]

        var mapper = new Mapper(40, base)
        player.details.mapper=mapper

        var mapPlayer = new MappedPlayer(inst, mapper)
        
        let playerAI = new AISquencer(ai, mapPlayer,this.pulse)
        player.ticker = playerAI
        this.change()
        return player
     
    }
    
    removePlayer(player:Player) {
        
        this.pulse.removeClient(player)
        let index=0
        for (let i=0;index<this.players.length;index++) {
            if (this.players[index]===player) {    
                 this.players.splice(index, 1);
                 this.change()
                 if (this.players.length === 0 ) this.setID(0)
                 return;
            }
        }

    }

    tick():void {

        try {
            this.pulse.tick()
        } catch (err) {
            console.log(err.stack)
        }
      
        this.playHead=this.pulse.beat
    }
    
    record(yes:boolean) {
        this.recording=yes
    }

    start() {
        this.pulse.start()
    }

    stop() {
        this.pulse.stop()
        if (this.recordBuffer.length > 0) {
            this.players.forEach((p)=>{
                if (p.details.inst.recording &&  (p.ticker instanceof MidiSequencer )) {
                    p.ticker.setBuffer(this.recordBuffer,null)
                    p.change()
                }  
            })
        }
        this.recordBuffer=[]
    }

    pause() {
        this.pulse.pause()
    }

    isRunning():boolean {
        return this.pulse.running
    }
    
   /*
    setPlayerType(t:string) {
        this.playerType=t
    }

    /*
    window.navigator.requestMIDIAccess().then(function(midiAccess) {
        midiAccess.inputs.forEach(function(midiInput) {
            self.focusPlayer.listenToMidi(midiInput)
        });
    });
    */

} 