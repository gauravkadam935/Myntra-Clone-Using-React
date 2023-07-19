// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYxnsUvtVeeqDDOLEjPwcK1Zfl-UHj2oA",
  authDomain: "bookstey.firebaseapp.com",
  projectId: "bookstey",
  storageBucket: "bookstey.appspot.com",
  messagingSenderId: "111453278629",
  appId: "1:111453278629:web:b5df193326782f6509d84c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };