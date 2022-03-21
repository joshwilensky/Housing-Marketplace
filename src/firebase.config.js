// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAHTwgdwEE54gShgwO6NRAjdV3mQ57xfqw",
  authDomain: "house-marketplace-app-614dd.firebaseapp.com",
  projectId: "house-marketplace-app-614dd",
  storageBucket: "house-marketplace-app-614dd.appspot.com",
  messagingSenderId: "457872813455",
  appId: "1:457872813455:web:fc50cabd2799c48099effa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()