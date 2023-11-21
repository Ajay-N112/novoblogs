// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import { getFirestore}from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRYcnJxHTPPZEWGsqCte1cHpu-rJmCWjw",
  authDomain: "blogapp-58647.firebaseapp.com",
  projectId: "blogapp-58647",
  storageBucket: "blogapp-58647.appspot.com",
  messagingSenderId: "440525667604",
  appId: "1:440525667604:web:33341acd2843ce98d1d601"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
 export const auth = getAuth(app)
 export const provider = new GoogleAuthProvider();