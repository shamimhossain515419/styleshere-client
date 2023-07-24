// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeYnIG6-XC09GZKvdmlIQ6WZ13h3XfwR0",
  authDomain: "styleshere-de1de.firebaseapp.com",
  projectId: "styleshere-de1de",
  storageBucket: "styleshere-de1de.appspot.com",
  messagingSenderId: "658016027213",
  appId: "1:658016027213:web:1a34732899532d0e791204",
  measurementId: "G-N1MTH68HMB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;