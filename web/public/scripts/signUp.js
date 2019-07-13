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

var firebaseConfig = {
  apiKey: "XXXXXXXXXXXXXXXXX",
  authDomain: "XXXXXXXXXXXXXXXXXX",
  projectId: "XXXXXXXXXXXXX",
  storageBucket: "XXXXXXXXXXXXXXX",
  appId: "XXXXXXXXXXXXXXXXXXXX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

var ema = document.getElementById("email").value();
var ph = document.getElementById("pwd").value();
var cat = document.getElementById("cat").value();
var nam = document.getElementById("name").value();

console.log(ema);
var startPos;
  var geoSuccess = function(position) {
    startPos = position;
    document.getElementById('startLat').innerHTML = startPos.coords.latitude;
    document.getElementById('startLon').innerHTML = startPos.coords.longitude;
  };

var loc =  navigator.geolocation.getCurrentPosition(geoSuccess);

db.collection("team19_vendor").doc("ppp").set({
  category : "cat",
  location : "loc",
  name : "nam",
  phoneno : "ph",
  vendor_id : docRef.id
})
.then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
  console.error("Error adding document: ", error);
});
