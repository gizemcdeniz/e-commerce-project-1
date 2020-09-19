import * as firebase from 'firebase';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAocMCih8uk9rWhV7k9IiWw2koYFzUm4zE",
    authDomain: "e-commercial-project.firebaseapp.com",
    databaseURL: "https://e-commercial-project.firebaseio.com",
    projectId: "e-commercial-project",
    storageBucket: "e-commercial-project.appspot.com",
    messagingSenderId: "195206186957",
    appId: "1:195206186957:web:6c2e978a1bf3a61aace684",
    measurementId: "G-WV88H9YVMH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  export default firebase.firestore(); 