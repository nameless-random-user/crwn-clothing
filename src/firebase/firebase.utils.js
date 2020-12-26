import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCIzMiKEG_fM1yWZZPMfooULJ4bHixbHwQ",
  authDomain: "crown-clothing-b0db6.firebaseapp.com",
  projectId: "crown-clothing-b0db6",
  storageBucket: "crown-clothing-b0db6.appspot.com",
  messagingSenderId: "566438025268",
  appId: "1:566438025268:web:46bbcbbb05aad751f89261",
  measurementId: "G-PTEBYFZ3WP"
};
firebase.initializeApp(config);

// Auth

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("ERROR : " + error.message);
    }
  }

  return userRef;
}


export {firebase};
export const auth = firebase.auth();
export const firestore = firebase.firestore();
