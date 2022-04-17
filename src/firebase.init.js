// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDrgSphE3B8AMGswQhwOiWAMrsufLC65sQ",
    authDomain: "teeth-zone.firebaseapp.com",
    projectId: "teeth-zone",
    storageBucket: "teeth-zone.appspot.com",
    messagingSenderId: "1098248364502",
    appId: "1:1098248364502:web:6a83177028b47e931d8477"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;