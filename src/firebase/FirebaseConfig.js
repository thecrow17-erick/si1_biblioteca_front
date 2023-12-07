// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyD9NSVB9DcGZx5CGvjzyw9-MW6w-8Xzx0Y",
  authDomain: "si1-biblioteca.firebaseapp.com",
  projectId: "si1-biblioteca",
  storageBucket: "si1-biblioteca.appspot.com",
  messagingSenderId: "853111758118",
  appId: "1:853111758118:web:30d0593a3fb1e8787cf5e7",
  measurementId: "G-D1368DJ193"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);