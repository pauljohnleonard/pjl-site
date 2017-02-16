import { Injectable } from '@angular/core';


@Injectable()
export class DBService {

    user:any=null
    clients:Array<any>=[]
    provider:any

    constructor(){
         console.log(" MAKING A DBSERVICE")
    }   

    register(cb:any):void {
        
    }

    clean() {


    }


    signIn() {
    }

    signOut() {
    }

    onAuthStateChanged(user:any) {
        // We ignore token refresh events.
    }

    writeUserData(userId:any, name:any, email:any, imageUrl:any) {
    }

    newIDItem(path:string,postData:any):any {return null}
}

