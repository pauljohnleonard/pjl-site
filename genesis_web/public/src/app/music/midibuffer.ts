import { Savable } from './savable'




export class MidiBuffer extends Savable {
  
    constructor(public buff:Array<any>,id:any) {
        super()
        if (id !== undefined) this.setID(id)

    }


      saveDB(saver:any):any { 
        if (this.isSaved()) return this.id
       
  
        var postItems =
             JSON.stringify(this.buff)  
        
       
        var id=saver.newIDItem('midi',postItems)
    
        this.setID(id)
        return id
        
    }

    
}