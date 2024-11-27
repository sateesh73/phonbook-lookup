import { getApps, initializeApp } from '@firebase/app';
import { getAuth } from '@firebase/auth';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAkK2ZV1e1iFe39QFKYg0-JPMIeWsNMDiI",
  authDomain: "phonebook-lookup.firebaseapp.com",
  projectId: "phonebook-lookup",
  storageBucket: "phonebook-lookup.firebasestorage.app",
  messagingSenderId: "550789110829",
  appId: "1:550789110829:web:22fcb8a3acb0e00ed9eca4",
  measurementId: "G-35YGEE21BX"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };