import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBvCTmxsfXyM9sBw9UtsfDcJM8OLcXga4c",
  authDomain: "platafoma-peliculas.firebaseapp.com",
  projectId: "platafoma-peliculas",
  storageBucket: "platafoma-peliculas.appspot.com",
  messagingSenderId: "1074095941461",
  appId: "1:1074095941461:web:27d413441ff554cb7bb1dc"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const google = new firebase.auth.GoogleAuthProvider();
const facebook = new firebase.auth.FacebookAuthProvider();

export {
    db,
    google,
    facebook,
    firebase
}