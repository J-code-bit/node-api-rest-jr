// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwwsqL3vnebmvzh0P_EDLr---f1X1GmBw",
    authDomain: "node-api-rest-jr.firebaseapp.com",
    projectId: "node-api-rest-jr",
    storageBucket: "node-api-rest-jr.firebasestorage.app",
    messagingSenderId: "415583433125",
    appId: "1:415583433125:web:61f20e11d4ba60330c784c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore 
const db = getFirestore(app); 

export { db };