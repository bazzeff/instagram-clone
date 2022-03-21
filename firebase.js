//import firebase from "firebase";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD70iqwPWCzKFC6_XcFBE51vYP3knXap5s",
    authDomain: "instagram-clone-7d427.firebaseapp.com",
    projectId: "instagram-clone-7d427",
    storageBucket: "instagram-clone-7d427.appspot.com",
    messagingSenderId: "947057818007",
    appId: "1:947057818007:web:e752d0b2c4d22db46eacd2",
    measurementId: "G-W29MH9EBN5"
  };

//!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app); 

const db = getFirestore(app);

const auth = getAuth();
export {
  auth,
  db 
};
