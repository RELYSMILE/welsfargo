// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore, } from 'firebase/firestore';
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyD5NiqPeWDTfA46HpUkDyOTzjGO8OsjWFc",
  authDomain: "blcourier-company.firebaseapp.com",
  projectId: "blcourier-company",
  storageBucket: "blcourier-company.firebasestorage.app",
  messagingSenderId: "765320690394",
  appId: "1:765320690394:web:75dbee15b4e5b8d92803e3"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)
const provider = new GoogleAuthProvider(app)

export {auth, db, storage, provider}