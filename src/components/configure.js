// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW5mGOggSrEX9zi1LW73ErYgyNextdb7M",
  authDomain: "coding-ninja-c7586.firebaseapp.com",
  projectId: "coding-ninja-c7586",
  storageBucket: "coding-ninja-c7586.appspot.com",
  messagingSenderId: "512164555616",
  appId: "1:512164555616:web:6f7ec79dc9a8d5e71dcc05",
  measurementId: "G-VS138BDNJR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);