// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDre7EeFoFXppzB1kJ3nx3tOkH637eOMHA",
  authDomain: "netflixgpt-a8202.firebaseapp.com",
  projectId: "netflixgpt-a8202",
  storageBucket: "netflixgpt-a8202.appspot.com",
  messagingSenderId: "236641211825",
  appId: "1:236641211825:web:52c6193b1c11ca215cd990",
  measurementId: "G-Y1GEXM3VP9"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

