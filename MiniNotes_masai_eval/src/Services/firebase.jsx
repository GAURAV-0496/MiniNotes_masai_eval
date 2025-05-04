// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTsytd4GUgFHhtZlukcT7EpJ-jm7nkt-A",
  authDomain: "mini-notes-27f0a.firebaseapp.com",
  projectId: "mini-notes-27f0a",
  storageBucket: "mini-notes-27f0a.firebasestorage.app",
  messagingSenderId: "925725207168",
  appId: "1:925725207168:web:20d5e0c11b8f0d5c75d465",
  measurementId: "G-WG9V7WTD87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);