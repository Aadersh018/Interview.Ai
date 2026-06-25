
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewai-f1e64.firebaseapp.com",
  projectId: "interviewai-f1e64",
  storageBucket: "interviewai-f1e64.firebasestorage.app",
  messagingSenderId: "1043775524040",
  appId: "1:1043775524040:web:15a09f0d97cd18fa52a9fd"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}