import { useQuery } from "@tanstack/react-query"
import useAxios from "./useAxios"
import useAuth from "./useAuth";


export default function useAdmin() {
  const axiosSecure = useAxios();
  const {user} = useAuth()
  const {data : isAdmin,isLoading} = useQuery({
    queryKey : [user?.email,'isAdmin'],
    queryFn : async ()=>{
      const {data} = await axiosSecure.get(`/user/admin/${user?.email}`);
      console.log(data.admin)
      return data?.admin;
    }
  })
  return {isAdmin,isLoading};
}
