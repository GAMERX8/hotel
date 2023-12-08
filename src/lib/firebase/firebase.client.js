// Import the functions you need from the SDKs you need
import { deleteApp, getApp, getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, setPersistence, inMemoryPersistence } from 'firebase/auth'

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyCzhDPRH-XbMefaF9M8Y64K0uNbEXnAfgA",
    authDomain: "hotel-8fd5e.firebaseapp.com",
    projectId: "hotel-8fd5e",
    storageBucket: "hotel-8fd5e.appspot.com",
    messagingSenderId: "455575265980",
    appId: "1:455575265980:web:5581827d6db05759f5e6b9",
    measurementId: "G-S5BFKM3NX5"
  };

// Initialize Firebase
let firebaseApp;
if (!getApps().length) {
    firebaseApp = initializeApp(firebaseConfig)
} else {
    firebaseApp = getApp()
    deleteApp(firebaseApp)
    firebaseApp = initializeApp(firebaseConfig)
}

export const auth = getAuth(firebaseApp)