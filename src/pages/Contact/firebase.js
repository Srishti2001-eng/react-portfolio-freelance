import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBgOhaFoLiZzgP8pTAPgd0uDdJtpVHotgs",
    authDomain: "vivan--portfolio.firebaseapp.com",
    projectId: "vivan--portfolio",
    storageBucket: "vivan--portfolio.appspot.com",
    messagingSenderId: "202622570499",
    appId: "1:202622570499:web:64a1a87741f80b93cffe36",
    measurementId: "G-HCYL2LMWF8"
  });
  // Initialize Firebase
  var db = firebaseApp.firestore();

export { db };