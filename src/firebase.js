// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvxDAR3zITEDE5z69PpY0rCqPK9-9JL1k",
  authDomain: "reminderapp-74a9c.firebaseapp.com",
  projectId: "reminderapp-74a9c",
  storageBucket: "reminderapp-74a9c.appspot.com",
  messagingSenderId: "869323018511",
  appId: "1:869323018511:web:3c7c7bc6634736fac76e7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);