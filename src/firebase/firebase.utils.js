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

  export const createUserProfileDocument = async (userAuth, additionalData)=>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get(); 

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();
    
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error){
        console.log('error occured while creating user', error.message);
      }
    }
    return userRef;
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;