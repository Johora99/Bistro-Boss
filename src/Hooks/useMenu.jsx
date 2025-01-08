
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";





export default function useMenu() {
  const axiosSecure = useAxios();
const {data : menus = [],isLoading} = useQuery({
  queryKey : ['menu'],
  queryFn : async ()=>{
    const {data} = await axiosSecure.get('/menu')
    return data;
  }
  
})
return {menus,isLoading};
  
}
