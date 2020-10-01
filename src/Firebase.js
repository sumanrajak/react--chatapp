import firebase from "firebase"; 


const firebaseApp= firebase.initializeApp( {

    apiKey: "AIzaSyC3Ulht7gnEwH0xp_PFNbC-DSmWzwDNt_I",
    authDomain: "chatbox-45ddc.firebaseapp.com",
    databaseURL: "https://chatbox-45ddc.firebaseio.com",
    projectId: "chatbox-45ddc",
    storageBucket: "chatbox-45ddc.appspot.com",
    messagingSenderId: "974676934638",
    appId: "1:974676934638:web:99cc66753cd5f27dbad8ff",
    measurementId: "G-13Z6VGE830"
  });

  const db = firebaseApp.firestore();

  export default db;