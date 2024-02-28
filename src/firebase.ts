// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDakI9hxU_hekAFMX3vvqLC7DesuevA2EA",
  authDomain: "entertainment-web-app-b6dc8.firebaseapp.com",
  projectId: "entertainment-web-app-b6dc8",
  storageBucket: "entertainment-web-app-b6dc8.appspot.com",
  messagingSenderId: "123065684770",
  appId: "1:123065684770:web:f1f2631f4c40b0d4d24b7b",
  measurementId: "G-3540K9JPYK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);




// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);