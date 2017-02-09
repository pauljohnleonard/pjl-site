/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';


var currentUID;

function onAuthStateChanged(user) {
    // We ignore token refresh events.
    if (user && currentUID === user.uid) {
        return;
    }
    if (user) {
        console.log("SIGNIN" +user.displayName)
        currentUID = user.uid;
        writeUserData(user.uid, user.displayName, user.email, user.photoURL);
    } else {
        currentUID = null;
     }
}


window.addEventListener('load', function() {
    if (signInButton) {
        signInButton.addEventListener('click', function() {
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider);
        });

        signOutButton.addEventListener('click', function() {
            firebase.auth().signOut();
        });
    }
    firebase.auth().onAuthStateChanged(onAuthStateChanged);

}, false);
