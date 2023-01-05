import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC6PXrPXQYl8T80wEuwRsvjGPvpMJcnQIY",
  authDomain: "baraka-be851.firebaseapp.com",
  projectId: "baraka-be851",
  storageBucket: "baraka-be851.appspot.com",
  messagingSenderId: "834419094765",
  appId: "1:834419094765:web:6393aced9d7420186fc8e4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
