import { DBService } from '../services/db.service'

export class Savable {
    id:any=null

    isSaved():boolean {
        return this.id !== null
    }

    change():void {
        this.id=null
    }

    saveDB(saver:any):any  {
            console.log(" NO SAVER "+this)
            return null
    }

    setID(id:any):void {
        this.id=id
    }

  
   

}