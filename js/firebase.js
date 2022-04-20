// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwcVw6AFdQLLqVY_QRBjj_P9R0eZNl6r0",
  authDomain: "adriantiendacesde.firebaseapp.com",
  projectId: "adriantiendacesde",
  storageBucket: "adriantiendacesde.appspot.com",
  messagingSenderId: "530933061271",
  appId: "1:530933061271:web:305b939327cc63a234bbd2",
  measurementId: "G-7EFZL61FKP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);