
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDg4YBwj6RlrhM29Q1Zs2bA_GupYCMLS1k",
  authDomain: "react-notes-ef7df.firebaseapp.com",
  projectId: "react-notes-ef7df",
  storageBucket: "react-notes-ef7df.appspot.com",
  messagingSenderId: "56051689628",
  appId: "1:56051689628:web:f6cc556549636e1d59a559"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")