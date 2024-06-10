import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYIbRJxvjy5QxzRzjTN83eSS2LMGYoDcc",
  authDomain: "auth-b57f6.firebaseapp.com",
  databaseURL: "https://auth-b57f6-default-rtdb.firebaseio.com",
  projectId: "auth-b57f6",
  storageBucket: "auth-b57f6.appspot.com",
  messagingSenderId: "49617164135",
  appId: "1:49617164135:web:9d542d877d3adea05541c2",
  measurementId: "G-28MQRHZYJ8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, app, auth };
