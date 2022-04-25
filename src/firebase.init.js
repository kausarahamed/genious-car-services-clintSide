// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyAIiF9T0N-WdNP4NLbccEUP2BNI37T5cVw",
  // authDomain: "genious-car-services-55c26.firebaseapp.com",
  // projectId: "genious-car-services-55c26",
  // storageBucket: "genious-car-services-55c26.appspot.com",
  // messagingSenderId: "1087743588329",
  // appId: "1:1087743588329:web:a809b5bb4d2dc709fd7d78",

  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
