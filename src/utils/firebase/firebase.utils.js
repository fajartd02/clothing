import { initializeApp } from "firebase/app";
import {
  getAuth,
  SignInWithRedirect,
  SignInWithPopUp,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW6a97_65qshU1ZRhgb8NEx6YLh3kXWcE",
  authDomain: "crwn-clothing-db-dc080.firebaseapp.com",
  projectId: "crwn-clothing-db-dc080",
  storageBucket: "crwn-clothing-db-dc080.appspot.com",
  messagingSenderId: "1072030573055",
  appId: "1:1072030573055:web:ff5ac9ca4a13b6b33f07ca",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
