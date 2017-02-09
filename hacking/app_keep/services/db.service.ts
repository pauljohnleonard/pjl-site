import { Injectable } from '@angular/core';

declare var firebase : any



@Injectable()
export class DBService {

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
            console.log("SIGNIN" + user.displayName)
            self.user = user;
            self.writeUserData(user.uid, user.displayName, user.email, user.photoURL);
            } else {
                self.user = null;
            }
            this.clients.forEach((c)=>{c(self.user)})
            });
    }

    register(cb:any) {
        this.clients.push(cb)
        cb(this.user)
    }

    write(net:any) {
        console.log(net)
        if (this.user === null) return
        
        var postData = {
            uid: this.user.uid,
            weights: net,
        };
        // Get a key for a new Post.
        var newKey = firebase.database().ref().child('weights').push().key;
        // Write the new post's data simultaneously in the posts list and the user's post list.
        var updates = {};
        updates['/weights/' + newKey] = postData;
        return firebase.database().ref().update(updates);
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

