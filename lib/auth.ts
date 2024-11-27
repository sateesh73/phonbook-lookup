import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  
  await setDoc(doc(db, "users", result.user.uid), {
    name: result.user.displayName,
    email: result.user.email,
    createdAt: new Date().toISOString(),
    lastLogin: new Date().toISOString(),
  }, { merge: true });
  
  return result;
}