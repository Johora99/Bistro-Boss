import AuthContext from "@/Contexts/AuthContext";
import auth from "@/firebase/firebase.init";
import UseAxiosPublic from "@/Hooks/UseAxiosPublic";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";




export default function AuthProvider({children}) {
  const axiosPublic  = UseAxiosPublic()
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
      if(currentUser){
        const userInfo = {email : currentUser.email};
         axiosPublic.post('/jwt',userInfo)
         .then(res =>{
          if(res.data.token){
            localStorage.setItem('token',res.data.token)
          }
         })
      }else{
         localStorage.removeItem('token')
      }
      setLoading(false)
    })
    return ()=> unsubscribe();
  },[axiosPublic])
   const handleUpdate = (name,photoURL)=>{
   return updateProfile(auth.currentUser,{
    displayName:name,photoURL:photoURL
   })
   }
  const handleSignOut = ()=>{
    setLoading(true);
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
    loading,
    user
  }
  return (
    <AuthContext.Provider value={allInfo}>
      {children}
    </AuthContext.Provider>
  )
}
