// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbCEujcTds33Gf7mfuS5LEktenqYE3ZD4",
  authDomain: "sab-pff.firebaseapp.com",
  projectId: "sab-pff",
  storageBucket: "sab-pff.appspot.com",
  messagingSenderId: "972708440297",
  appId: "1:972708440297:web:5e84795859a73ca637e878",
  measurementId: "G-NSL3VYXCDY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function signin(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
