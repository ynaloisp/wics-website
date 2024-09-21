// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithCustomToken } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "wics-4809f.firebaseapp.com",
  projectId: "wics-4809f",
  storageBucket: "wics-4809f.appspot.com",
  messagingSenderId: "744034431803",
  appId: "1:744034431803:web:ddba0aaeec1cbb5906fd1e",
  measurementId: "G-GVEXD7LT2Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { db, auth, signInWithCustomToken };
