// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzy0IwcKW2pEjkMoBcCXMuGyTDw0-cyW8",
  authDomain: "netflixgpt-ff3cd.firebaseapp.com",
  projectId: "netflixgpt-ff3cd",
  storageBucket: "netflixgpt-ff3cd.firebasestorage.app",
  messagingSenderId: "323797749546",
  appId: "1:323797749546:web:6fcb101274f0c05291d853",
  measurementId: "G-VL9V0CW78M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();