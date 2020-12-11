import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBuG7iNnWfJXlYZhTiRFFKQwgyEhxkHTZw",
    authDomain: "booking-db-3a598.firebaseapp.com",
    projectId: "booking-db-3a598",
    storageBucket: "booking-db-3a598.appspot.com",
    messagingSenderId: "197404304557",
    appId: "1:197404304557:web:f32e644005fcb5b6ff9224",
    measurementId: "G-4WNDLKH5HB"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;