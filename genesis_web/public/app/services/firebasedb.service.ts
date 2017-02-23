import { Injectable } from '@angular/core';

declare var firebase : any



@Injectable()
export class FirebaseDBService {

    user:any=null
    clients:Array<any>=[]
    provider:any

    constructor(){
         console.log(" MAKING A DBSERVICE")
         this.provider = new firebase.auth.GoogleAuthProvider();
         this.init()
    }   

    init() {
        var self=this
        firebase.auth().onAuthStateChanged((user:any)=>{
           if (user && self.user !== null && self.user.uid === user.uid) {
              return;
           }
           if (user) {
   
            console.log("SIGNIN : " + user.displayName)
            self.user = user;
            self.writeUserData(user.uid, user.displayName, user.email, user.photoURL);
            } else {
                self.user = null;
            }
            this.clients.forEach((c)=>{c(self.user)})
            });
    }


    clean() {
        
        this.purge('weights')
        this.purge('songs')
        this.purge('songinfo')
        this.purge('players')
        this.purge('midi')
        this.purge('net')
        this.purge('ai')
   
        

    }
    
    purge(what:string) {

        var newRef = firebase.database().ref().child(what)
        newRef.remove().then(()=>{ console.log('OK')})
        .catch((err:any)=>{ console.log(err)})

    }
    register(cb:any) {
        this.clients.push(cb)
        cb(this.user)
    }

    newIDItem(path:string,postData:any,key:any):any {
          if (this.user === null) return null
          var newKey = firebase.database().ref().child(path).push().key;
          var updates = {};
          if (key === undefined) key=newKey
          updates[path +"/" + key] = postData;
          firebase.database().ref().update(updates);     
          return newKey  
    }


    signIn() {
            if (this.user === null) {
                firebase.auth().signInWithPopup(this.provider)
            }
    }

    signOut() {
        firebase.auth().signOut();
    }

    onAuthStateChanged(user:any) {

        console.log(user)
        // We ignore token refresh events.
     
    }

    writeUserData(userId:any, name:any, email:any, imageUrl:any) {
        firebase.database().ref('users/' + userId).set({
            username: name,
            email: email,
            profile_picture: imageUrl
        });
    }

}

