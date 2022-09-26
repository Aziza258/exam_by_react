// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1TM8Q7yVRzP10sDLa4p34IJi8In1i4zA",
  authDomain: "react-registration-865e4.firebaseapp.com",
  projectId: "react-registration-865e4",
  storageBucket: "react-registration-865e4.appspot.com",
  messagingSenderId: "52862284982",
  appId: "1:52862284982:web:7c25026702feeed44c6217"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);