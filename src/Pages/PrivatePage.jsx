import useAuth from "@/Hooks/useAuth"
import { Circles } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router";


export default function PrivatePage({children}) {
  const {user,loading} = useAuth();
  const location = useLocation()
  if(loading){
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Circles
  height="80"
  width="80"
  color="rgb(217, 153, 4)"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
      </div>
    )
  }
  if(user){
    return children
  }
  return (
    <Navigate to='/logIn' state={{from:location}}></Navigate>
  )
}
