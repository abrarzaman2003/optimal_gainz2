import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

//import * as firebase from "firebase";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcKgFNR-W-ZExOxvD16Fa5hy2OGKhMST4",
  authDomain: "optimal-gainz.firebaseapp.com",
  projectId: "optimal-gainz",
  storageBucket: "optimal-gainz.appspot.com",
  messagingSenderId: "581664631559",
  appId: "1:581664631559:web:fa43bddb1fc61591a4b3a2",
  measurementId: "G-3Q2C4JTE9W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//export const auth = getAuth(app);
export const db = getFirestore(app);

export function testing(){
  console.log("testing")
}


//c/onst auth
//const analytics = getAnalytics(app);