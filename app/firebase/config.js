// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwxkfmHqMiwZH0mIqk4hcHKAjcm8-k-H8",
  authDomain: "appfio.firebaseapp.com",
  projectId: "appfio",
  storageBucket: "appfio.firebasestorage.app",
  messagingSenderId: "468440457794",
  appId: "1:468440457794:web:7e93ef28e088ecabd603db",
}


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };