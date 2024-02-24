// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b5583.firebaseapp.com",
  projectId: "mern-estate-b5583",
  storageBucket: "mern-estate-b5583.appspot.com",
  messagingSenderId: "792534852776",
  appId: "1:792534852776:web:80da2daeffb4a994e6ce9d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
