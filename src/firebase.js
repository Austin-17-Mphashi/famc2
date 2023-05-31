import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const app = firebase.initializeApp({

  apiKey: "AIzaSyAG0uw7iyC1qPUtbZDr4jOPIfNnHueZAjA",
  authDomain: "famc-5254b.firebaseapp.com",
  projectId: "famc-5254b",
  storageBucket: "famc-5254b.appspot.com",
  messagingSenderId: "48685492715",
  appId: "1:48685492715:web:df6deb3547f72d593c91ae",
  measurementId: "G-5J9X1PM43T"
})


export const auth = app.auth()
export default app

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };