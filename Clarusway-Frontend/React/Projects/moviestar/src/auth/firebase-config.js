import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_mwwRKpe_H-AGlEDwf2ZDY9kTbNJ5m8w",
  authDomain: "moviestar-app-e1f20.firebaseapp.com",
  projectId: "moviestar-app-e1f20",
  storageBucket: "moviestar-app-e1f20.appspot.com",
  messagingSenderId: "842286896568",
  appId: "1:842286896568:web:8afc86f15ba88878a2ab4d",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
