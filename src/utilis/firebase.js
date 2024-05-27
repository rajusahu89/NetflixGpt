// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbQFAevMDDoxZSwUa314y40JO0IeI0P-s",
  authDomain: "netflix-bca81.firebaseapp.com",
  projectId: "netflix-bca81",
  storageBucket: "netflix-bca81.appspot.com",
  messagingSenderId: "737267300031",
  appId: "1:737267300031:web:f392f544be4af4587db80a",
  measurementId: "G-7ZW49GF1XH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);