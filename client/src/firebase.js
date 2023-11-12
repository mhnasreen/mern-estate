// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-02.firebaseapp.com",
  projectId: "mern-estate-02",
  storageBucket: "mern-estate-02.appspot.com",
  messagingSenderId: "562786750265",
  appId: "1:562786750265:web:88cf3be9bf234efa51e2e8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);