import AuthContext from "@/Contexts/AuthContext";
import auth from "@/firebase/firebase.init";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";



export default function AuthProvider({children}) {
  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(true);
  const creatUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password);
  }
  const logInUser = (email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser);
      setLoading(false)
    })
    return ()=> unsubscribe();
  },[])
   const handleUpdate = (name,photoURL)=>{
   return updateProfile(auth.currentUser,{
    displayName:name,photoURL:photoURL
   })
   }
  const handleSignOut = ()=>{
    return signOut(auth);
  }
  const provider = new GoogleAuthProvider();
  const googleSignIn = ()=>{
    return signInWithPopup(auth,provider);
  }
  const allInfo = {
    creatUser,
    logInUser,
    handleUpdate,
    handleSignOut,
    googleSignIn,
    user
  }
  return (
    <AuthContext.Provider value={allInfo}>
      {children}
    </AuthContext.Provider>
  )
}
