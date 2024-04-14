// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBo4NRs3Oq0QDCZ2u9CIbWhfs1vNzeaYWE",
    authDomain: "book-vibes-6946e.firebaseapp.com",
    projectId: "book-vibes-6946e",
    storageBucket: "book-vibes-6946e.appspot.com",
    messagingSenderId: "200556714857",
    appId: "1:200556714857:web:b456afd69698902bc53bf8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;