/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC5rT213Fw55vls340ov_lochPRWQHW9Nw",
  authDomain: "to-do-list-13e2c.firebaseapp.com",
  projectId: "to-do-list-13e2c",
  storageBucket: "to-do-list-13e2c.appspot.com",
  messagingSenderId: "585771592030",
  appId: "1:585771592030:web:51085ceee55c79030307cf"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { auth, app };