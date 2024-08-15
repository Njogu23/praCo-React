// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVHzeScmMvUKlrVOkdH3lHsyNANtjbMYY",
  authDomain: "praco-api.firebaseapp.com",
  projectId: "praco-api",
  storageBucket: "praco-api.appspot.com",
  messagingSenderId: "157177433469",
  appId: "1:157177433469:web:911cd6872f040a0f3f1014",
  measurementId: "G-JBY0164EZ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app,auth,db };