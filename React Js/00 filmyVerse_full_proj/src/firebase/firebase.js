// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG11DMvnFxL5foIao06PPPGlhm5HFU8jY",
  authDomain: "flmyverse.firebaseapp.com",
  projectId: "flmyverse",
  storageBucket: "flmyverse.appspot.com",
  messagingSenderId: "1002996414314",
  appId: "1:1002996414314:web:9cd343c47d2328a8fed713"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const moviesRef = collection(db, "movies")
export const reviewRef = collection(db, "reviews")

export default app;