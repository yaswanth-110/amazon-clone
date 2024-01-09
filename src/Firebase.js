import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDUWv5WGeZd3BxPT3dQodw2w2Kn-jLZP5g",
  authDomain: "clone-2a1f3.firebaseapp.com",
  projectId: "clone-2a1f3",
  storageBucket: "clone-2a1f3.appspot.com",
  messagingSenderId: "613777552666",
  appId: "1:613777552666:web:cfdb467ab43b4325eee8a3",
  measurementId: "G-WLZ3HL1P02",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

export { db, auth };
