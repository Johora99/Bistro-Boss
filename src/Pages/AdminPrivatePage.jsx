import useAdmin from "@/Hooks/useAdmin";
import useAuth from "@/Hooks/useAuth"
import { Circles } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router";

export default function AdminPrivatePage({children}) {
  const {user,loading} = useAuth();
  const {isAdmin,isLoading} = useAdmin();
  const location = useLocation();
  if(loading || isLoading){
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
  }
  if(user && isAdmin){
    return children
  }
  return (
      <Navigate to='/logIn' state={{from:location}}></Navigate>
  )
}
