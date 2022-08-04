// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Dev / Prod
// const firebaseConfig = {
//   apiKey: "AIzaSyAaVYSUZzR8samokKthiqICkSk1hH6Hwnk",
//   authDomain: "react-cursos-932e5.firebaseapp.com",
//   projectId: "react-cursos-932e5",
//   storageBucket: "react-cursos-932e5.appspot.com",
//   messagingSenderId: "755392462218",
//   appId: "1:755392462218:web:9f9af6aad7e7537128dc73",
// };

// Testing
const firebaseConfig = {
  apiKey: "AIzaSyD2I9hUgqN_oYA1zQNNCP5iYKgRtSIszH4",
  authDomain: "todo-list-angular-ebc4e.firebaseapp.com",
  projectId: "todo-list-angular-ebc4e",
  storageBucket: "todo-list-angular-ebc4e.appspot.com",
  messagingSenderId: "310548461150",
  appId: "1:310548461150:web:8471c21945172bd32a26cf",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
// autentication from firebase
export const FirebaseAuth = getAuth(FirebaseApp);
// db config of firebase
export const FirebaseDB = getFirestore(FirebaseApp);
