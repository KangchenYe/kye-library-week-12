import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAiIcw2Fcdk7p5Rje3QkabY88778Ejg6xs",
    authDomain: "week7-kangchen.firebaseapp.com",
    projectId: "week7-kangchen",
    storageBucket: "week7-kangchen.appspot.com",
    messagingSenderId: "761985335471",
    appId: "1:761985335471:web:3bb8bf4b1f9854e856145a"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
export default db;

