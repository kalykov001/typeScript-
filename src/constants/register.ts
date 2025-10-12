// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM3SLdBJDB5Ki41hY9Pv5rcS4G1V387NU",
  authDomain: "typescript-c6e68.firebaseapp.com",
  projectId: "typescript-c6e68",
  storageBucket: "typescript-c6e68.firebasestorage.app",
  messagingSenderId: "1092925019229",
  appId: "1:1092925019229:web:b38f80da66671f9c18e9b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)