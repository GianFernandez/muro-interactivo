import firebase from "firebase/app";
import 'firebase/firestore';
import withFirebaseAuth from 'react-with-firebase-auth';
import Login from "./components/Login";
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCenG39CexfRUbDi0rvQ5jZqHY0lrmO7ZQ",
    authDomain: "muro-interactivo-fbf2e.firebaseapp.com",
    projectId: "muro-interactivo-fbf2e",
    storageBucket: "muro-interactivo-fbf2e.appspot.com",
    messagingSenderId: "544235964893",
    appId: "1:544235964893:web:0d7e86eb53ddf0cb02ce34"
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

//const firebaseAppAuth = fb.Auth(fb);
const providers = {
    googleProvider : new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
    providers,
    //firebaseAppAuth,
})(Login);

export const db = fb.firestore();