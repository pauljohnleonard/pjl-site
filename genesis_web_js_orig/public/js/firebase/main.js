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


var signInButton  = document.getElementById('sign-in-button');
var signOutButton = document.getElementById('sign-out-button');
var signUpButton = document.getElementById('sign-up-button');
var userIcon      = document.getElementById('user-icon');


function writeWeights(weights) {
    // A post entry.
    var postData = {
        uid: currentUID,
        weights: weights,
     };
    // Get a key for a new Post.
    var newKey = firebase.database().ref().child('weights').push().key;
    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/weights/' + newKey] = postData;
    return firebase.database().ref().update(updates);
}



function writeUserData(userId, name, email, imageUrl) {
    firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture: imageUrl
    });
}

var currentUID;

function onAuthStateChanged(user) {
    // We ignore token refresh events.
    if (user && currentUID === user.uid) {
        return;
    }
    if (user) {

        console.log("SIGNIN" +user.displayName)
        currentUID = user.uid;
        signOutButton.style.display=''
        signInButton.style.display="none"
        signUpButton.style.display="none"
        userIcon.style.display="block"
        userIcon.src=user.photoURL
        userIcon.alt=user.displayName
        writeUserData(user.uid, user.displayName, user.email, user.photoURL);
    } else {
        currentUID = null;
        signInButton.style.display=''
        signUpButton.style.display=''
        signOutButton.style.display="none"
        userIcon.style.display="none"
        userIcon.src=""
     }
}


window.addEventListener('load', function() {

    signInButton.addEventListener('click', function() {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider);
    });

    signOutButton.addEventListener('click', function() {
        firebase.auth().signOut();
    });

    firebase.auth().onAuthStateChanged(onAuthStateChanged);

}, false);
