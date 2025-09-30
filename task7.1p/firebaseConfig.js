// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ8-YX1EA4bHGyWGP_DkEdm79cECWQumc",
  authDomain: "week7-kulvinder.firebaseapp.com",
  projectId: "week7-kulvinder",
  storageBucket: "week7-kulvinder.firebasestorage.app",
  messagingSenderId: "856093558297",
  appId: "1:856093558297:web:516438afdedf4916b74c88"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
