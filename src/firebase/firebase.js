// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyD1boYMspExIZJioIXZydChH5qYhjRkmUM",
  authDomain: "texas-golf-center.firebaseapp.com",
  projectId: "texas-golf-center",
  storageBucket: "texas-golf-center.appspot.com",
  messagingSenderId: "963556922158",
  appId: "1:963556922158:web:d72485a32092760b91a0bf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
