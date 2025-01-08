import AuthContext from "@/Contexts/AuthContext";
import { useState } from "react";



export default function AuthProvider({Children}) {
  const [user,setUser] = useState();
  const [loading,setLoading] = useState(true);
  const creatUser = ()=>{
    
  }
  return (
    <AuthContext.Provider>
      {Children}
    </AuthContext.Provider>
  )
}
