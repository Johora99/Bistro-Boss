import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios"



export default function useUser() {
  const axiosSecure = useAxios();
  const {data : user = [],isLoading,refetch} = useQuery({
    queryKey : ['user'],
    queryFn : async ()=>{
    const {data} = await axiosSecure.get('/user');
    return data;
    }
  })
  return {user,isLoading,refetch}
    
  
}
