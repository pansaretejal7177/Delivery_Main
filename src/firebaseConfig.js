import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCFP7fTFXRlxViYrrrnLYpILlAmKgwT-gk",
    authDomain: "wce-mp4.firebaseapp.com",
    projectId: "wce-mp4",
    storageBucket: "wce-mp4.appspot.com",
    messagingSenderId: "583488455512",
    appId: "1:583488455512:web:7292ba0a3f61cda37ddb2d",
    measurementId: "G-8ZBWJBC7TM"
  });
 
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export { db, auth, storage,firebaseApp };