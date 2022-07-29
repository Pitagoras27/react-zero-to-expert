// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaVYSUZzR8samokKthiqICkSk1hH6Hwnk",
  authDomain: "react-cursos-932e5.firebaseapp.com",
  projectId: "react-cursos-932e5",
  storageBucket: "react-cursos-932e5.appspot.com",
  messagingSenderId: "755392462218",
  appId: "1:755392462218:web:9f9af6aad7e7537128dc73",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
// autentication from firebase
export const FirebaseAuth = getAuth(FirebaseApp);
// db config of firebase
export const FirebaseDB = getFirestore(FirebaseApp);
