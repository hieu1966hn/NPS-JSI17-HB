 // Import the functions you need from the SDKs you need

import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";

// TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyDAYUM28_hTy7eab8FdGSTsXdRvQDmnjGk",
   authDomain: "nps-jsi17-hb1.firebaseapp.com",
   projectId: "nps-jsi17-hb1",
   storageBucket: "nps-jsi17-hb1.appspot.com",
   messagingSenderId: "1070272741533",
   appId: "1:1070272741533:web:4a02bd362bb1350993d474"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);