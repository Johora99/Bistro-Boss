
import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";





export default function useMenu() {
  const axiosPublic = UseAxiosPublic();
const {data : menus = [],isLoading} = useQuery({
  queryKey : ['menu'],
  queryFn : async ()=>{
    const {data} = await axiosPublic.get('/menu')
    return data;
  }
  
})
return {menus,isLoading};
  
}
