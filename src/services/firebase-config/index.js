import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

export const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

if (!getApps().length) {
    initializeApp(firebaseConfig);
}

const auth = getAuth();
const googleAuthProvider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, createUserWithEmailAndPassword, googleAuthProvider, getDownloadURL, onAuthStateChanged, ref, signInWithEmailAndPassword, signOut, storage, signInWithPopup, uploadBytes };

// export default firebaseConfig;