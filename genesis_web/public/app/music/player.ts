import { Instrument } from './instrument'
import { Ticker } from './ticker'
import { Music } from './music'
import { Savable } from './savable'
import { MidiSequencer } from './midisequencer'
import { Thing } from './thing'


export class Player extends Savable implements Ticker ,Thing {


    static players: Array<Player> = []

    soloed: boolean = false
    tmpMuted: boolean = false
    muted: boolean = false
    ticker: Ticker = null
    type:string
    viewMe:boolean=true
    expanded:boolean = true
    details: any = {}
 

    constructor(public music: Music) {
        super()
        Player.players.push(this)
        this.music.pulse.addClient(this)
    }

    tick() {
        if (this.ticker) this.ticker.tick()
    }

    start() {
        if (this.ticker) this.ticker.start()

    }

    stop() {
        if (this.ticker) this.ticker.stop()
    }

    mute() {
        this.muted = !this.muted
        this.details.inst.mute(this.muted)
    }

    solo() {

        this.soloed = !this.soloed

        if (this.soloed) this.muted = false

        let soloedCnt = 0;

        Player.players.forEach((p) => {
            if (p.soloed) soloedCnt++
        })

        if (soloedCnt == 0) {
            Player.players.forEach((p) => {
                p.tmpMuted = false
                p.details.inst.mute(this.muted)
            })
        } else {
            Player.players.forEach((p) => {
                if (!p.soloed) {
                    p.tmpMuted = true
                    p.details.inst.mute(true)
                } else {
                    p.tmpMuted = false
                    p.details.inst.mute(false)
                }
            })
        }
    }

    removeMe() {
        setTimeout(() => {
            this.music.removePlayer(this)
        }, 0);
    }


    saveDB(saver: any): any {
        if (this.id !== null) return this.id


        var postItems: any = {}

            //if (this.ticker instanceof ItemSaver ) {
        if (this.ticker.addPostItems !== undefined){        
            this.ticker.addPostItems(postItems,saver)
        }

        postItems.inst = this.details.inst.name

        if (this.details.ai ) {
            var id=this.details.ai.saveDB(saver)
            postItems.ai=id
        }

        var id = saver.newIDItem('players', postItems)
        return id
    }

    addPostItems(items: any, saver: any):void{
        console.log(" DO NOTHING ")
    }

    
}