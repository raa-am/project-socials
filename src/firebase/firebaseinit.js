// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbgAlKj4FlwXH44pJmeAk8n90dHpvpVf0",
  authDomain: "socialmanager-7c8fd.firebaseapp.com",
  projectId: "socialmanager-7c8fd",
  storageBucket: "socialmanager-7c8fd.appspot.com",
  messagingSenderId: "950571993266",
  appId: "1:950571993266:web:f563e93bb164ef4ef0e1ab",
  measurementId: "G-RCK06L81P1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {analytics, db}