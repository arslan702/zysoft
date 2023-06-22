import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfY583TqFNyUt8pyzTSCXcMrFd7ENOyYQ",
  authDomain: "admin-khan.firebaseapp.com",
  projectId: "admin-khan",
  storageBucket: "admin-khan.appspot.com",
  messagingSenderId: "611507417741",
  appId: "1:611507417741:web:23e831df3d80c38ab628c4",
  measurementId: "G-W547SND274"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

