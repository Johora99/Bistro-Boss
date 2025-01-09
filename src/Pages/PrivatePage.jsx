import useAuth from "@/Hooks/useAuth"
import { use } from "react";
import { Circles } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router";


export default function PrivatePage({children}) {
  const {user,loading} = useAuth();
  const location = useLocation()
  if(loading){
    return   render(<Circles
  height="80"
  width="80"
  color="rgb(217, 153, 4)"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />)
  }
  if(user){
    return children
  }
  return (
    <Navigate to='/logIn' state={{from:location}}></Navigate>
  )
}
