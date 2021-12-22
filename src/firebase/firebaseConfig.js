import "firebase/firestore";
import "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc5ARltJJoWZITKFq4R4Q-1RvKwYTzsxo",
  authDomain: "react-app-cursos-27688.firebaseapp.com",
  projectId: "react-app-cursos-27688",
  storageBucket: "react-app-cursos-27688.appspot.com",
  messagingSenderId: "303486606432",
  appId: "1:303486606432:web:27ec9786141ce64e5af705",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

const googleAuthProvider = new GoogleAuthProvider();

export { db, googleAuthProvider };
