import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config ={
    apiKey: "AIzaSyCvluyC1PBpR-4yTEOGuSx6E9Ee8pFTXVc",
    authDomain: "crwn-db-cdafc.firebaseapp.com",
    databaseURL: "https://crwn-db-cdafc.firebaseio.com",
    projectId: "crwn-db-cdafc",
    storageBucket: "crwn-db-cdafc.appspot.com",
    messagingSenderId: "1099282684619",
    appId: "1:1099282684619:web:7e9c94f7aee71cc620194e",
    measurementId: "G-XZ9NNVL1MR"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

