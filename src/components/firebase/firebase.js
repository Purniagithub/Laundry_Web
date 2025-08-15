// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByiVZCFVoYY2ZtBo8cU5KuuxQ55oL0NLc",
  authDomain: "laundry-project-40750.firebaseapp.com",
  projectId: "laundry-project-40750",
  storageBucket: "laundry-project-40750.firebasestorage.app",
  messagingSenderId: "845254977231",
  appId: "1:845254977231:web:25ca62f4109aae8f6839ba",
  measurementId: "G-YS5S97Q2M4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);