import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios"


export default function useReview() {
  const axiosSecure = useAxios();
  const {data : reviews = []} = useQuery({
    queryKey : ['review'],
    queryFn : async ()=>{
      const {data} = await axiosSecure.get('/review')
      return data
    }
  })
  return {reviews}
}
