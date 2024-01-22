// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a5631.firebaseapp.com",
  projectId: "mern-estate-a5631",
  storageBucket: "mern-estate-a5631.appspot.com",
  messagingSenderId: "964264849156",
  appId: "1:964264849156:web:b939008b266466626b2a51"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);