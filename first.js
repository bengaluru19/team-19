var express= require('express');
var app=express();
var MongoClient = require('mongodb').MongoClient
var admin = require("firebase-admin");


var serviceAccount = require("./google.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "xxxxxxx"
});

var db = admin.firestore();


// let cityRef = db.collection('team19_item').doc('BJ');
// let data = {
//   name: 'Los Angeles',
//   state: 'CA',
//   country: 'USA'
// };

// // Add a new document in collection "cities" with ID 'LA'
// let setDoc = db.collection('team19_item').doc('LA').set(data);


// let doc = db.collection('team19_item').doc('LA');

// let observer = doc.onSnapshot(docSnapshot => {
//   console.log(`Received doc snapshot: ${docSnapshot}`);
//   doc.data()
// }, err => {
//   console.log(`Encountered error: ${err}`);
// });

query = db.collection('XXXXX');

let observer = query.onSnapshot(querySnapshot => {
  querySnapshot.docChanges().forEach(change => {
    if (change.type === 'added') {
      console.log('New city: ', change.doc.data());
    }
    if (change.type === 'modified') {
      console.log('Modified city: ', change.doc.data());
    }
    if (change.type === 'removed') {
      console.log('Removed city: ', change.doc.data());
    }
  });
});
