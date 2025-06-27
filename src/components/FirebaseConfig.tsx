// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBSharkc7RZLAi0sHDABYfdfNuXzrLHEYc",
    authDomain: "gatsby-firebase-b4213.firebaseapp.com",
    projectId: "gatsby-firebase-b4213",
    storageBucket: "gatsby-firebase-b4213.firebasestorage.app",
    messagingSenderId: "133766045495",
    appId: "1:133766045495:web:e54741ebf17511f01cc4b2"
};

// Firebaseインスタンス化
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const storage = getStorage();
export const auth = getAuth(app);