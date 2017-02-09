import { Injectable } from '@angular/core';



@Injectable()
export class DBService {

    user:any=null
    clients:Array<any>=[]
    provider:any

    constructor(){
         console.log(" MAKING A DBSERVICE")
       
    }   


    register(cb:any) {
    }

    write(net:any) {
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

}

