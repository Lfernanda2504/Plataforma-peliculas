import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBuNqlxer4XnXu-iC_Z6CXwYCXXOAhzJy0",
    authDomain: "react-redux-c6659.firebaseapp.com",
    projectId: "react-redux-c6659",
    storageBucket: "react-redux-c6659.appspot.com",
    messagingSenderId: "812726486760",
    appId: "1:812726486760:web:91ad178ebef7c2c4e76b5d"
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