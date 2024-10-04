// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPZ2vUnfQMmJR6pDvYZRXTa2YyGgRpXk4",
  authDomain: "lillianho-test1.firebaseapp.com",
  projectId: "lillianho-test1",
  storageBucket: "lillianho-test1.appspot.com",
  messagingSenderId: "411189911367",
  appId: "1:411189911367:web:480408be5bb30f1c6df662",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
