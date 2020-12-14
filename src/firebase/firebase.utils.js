import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyANFgLKIFxakCs29GiBj3eBvnQxBPeycHk",
  authDomain: "crown-clothing-cdea8.firebaseapp.com",
  projectId: "crown-clothing-cdea8",
  storageBucket: "crown-clothing-cdea8.appspot.com",
  messagingSenderId: "857818024673",
  appId: "1:857818024673:web:f2df784df36ea8563005a0",
  measurementId: "G-CEXQLZ4JCG"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export {firebase};
