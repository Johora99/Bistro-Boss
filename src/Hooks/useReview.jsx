import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";


export default function useReview() {
  const axiosPublic = UseAxiosPublic;
  const {data : reviews = []} = useQuery({
    queryKey : ['review'],
    queryFn : async ()=>{
      const {data} = await axiosPublic.get('/review')
      return data
    }
  })
  return {reviews}
}
