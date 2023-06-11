// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_evDBUPie0F5HI0luZphOl6HXO-qme84",
    authDomain: "cooking-camp-client.firebaseapp.com",
    projectId: "cooking-camp-client",
    storageBucket: "cooking-camp-client.appspot.com",
    messagingSenderId: "770647403234",
    appId: "1:770647403234:web:ca1df18a6c29654b474cbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;