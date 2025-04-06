// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA76uAnZpSBJygc7167qHlq6MDYWMCm7CU",
  authDomain: "mypoe-a5403.firebaseapp.com",
  projectId: "mypoe-a5403",
  storageBucket: "mypoe-a5403.firebasestorage.app",
  messagingSenderId: "519379666934",
  appId: "1:519379666934:web:7499bd9db2949cca61e9d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };