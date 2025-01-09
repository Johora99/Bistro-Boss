import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios"
import useAuth from "./useAuth";


export default function useCart() {
  const {user} = useAuth();
  const axiosSecure  = useAxios();
  const {data : cart = [],isLoading,refetch} = useQuery({
    queryKey:['cart',user?.email],
    queryFn :async ()=>{
      const {data} = await axiosSecure.get(`/cart?email=${user?.email}`)
       return data;
    }
  })
  return {cart , isLoading,refetch}
}
