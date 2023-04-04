import firebase, { getApp, getApps } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from 'firebase-admin';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB6TkqxMs1AXaTOJ94EPvuvVjVOomt_HD0",
  authDomain: "esp32-26f1a.firebaseapp.com",
  projectId: "esp32-26f1a",
  storageBucket: "esp32-26f1a.appspot.com",
  messagingSenderId: "928586720109",
  appId: "1:928586720109:web:2c5ab573946df5935f7064",
  measurementId: "G-HNKQT9BYHD"
};
const app = getApps().length ? getApp ():initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {db,auth,provider}
