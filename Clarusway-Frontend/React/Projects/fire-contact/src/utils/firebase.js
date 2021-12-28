// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzDUiMwchpeutJf5-sOhJ1zYAr5oq9k2k",
  authDomain: "fire-contact-a08b5.firebaseapp.com",
  databaseURL: "https://fire-contact-a08b5-default-rtdb.firebaseio.com",
  projectId: "fire-contact-a08b5",
  storageBucket: "fire-contact-a08b5.appspot.com",
  messagingSenderId: "917438098422",
  appId: "1:917438098422:web:ba50e64bd81a381a6a35d7",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;
