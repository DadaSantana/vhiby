// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiesuUN1MMGTEqlRkBF07mtCf2eiHmhJY",
  authDomain: "vhiby-company.firebaseapp.com",
  projectId: "vhiby-company",
  storageBucket: "vhiby-company.appspot.com",
  messagingSenderId: "570815674705",
  appId: "1:570815674705:web:14142384109109d58e7b70",
  measurementId: "G-JQJXF26WFL"
};

// Initialize Firebase  
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);