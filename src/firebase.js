// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATXA5yrmitV8yachV0k-vV_RN6y9JT_s8",
  authDomain: "ngo-vol.firebaseapp.com",
  projectId: "ngo-vol",
  storageBucket: "ngo-vol.appspot.com",
  messagingSenderId: "740339557486",
  appId: "1:740339557486:web:8af7cf32d2224b09b1f27f",
  measurementId: "G-PD1048E507"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth(app);