
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyBud6jBX0UMpM7yk2PzWf7NqhLhO28oevY",
  authDomain: "e-shop-7f7e3.firebaseapp.com",
  projectId: "e-shop-7f7e3",
  storageBucket: "e-shop-7f7e3.appspot.com",
  messagingSenderId: "72526399109",
  appId: "1:72526399109:web:388dc44095302894c3cbec"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }