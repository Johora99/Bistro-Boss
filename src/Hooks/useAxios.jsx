import axios from "axios"
import { useNavigate } from "react-router";
import useAuth from "./useAuth";
import { useEffect } from "react";



const axiosSecure = axios.create({
  baseURL:`${import.meta.env.VITE_API}`
})
export default function useAxios() {
  const navigate = useNavigate();
  const {handleSignOut} = useAuth()
  axiosSecure.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token')
    config.headers.authorization = `Bearer ${token}`
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

   axiosSecure.interceptors.response.use(
  function (response) {
    return response;
  },async (error) => {
    const status = error.response?.status; // Use optional chaining to avoid crashes if `error.response` is undefined.
    if (status === 401 || status === 403) {
      await handleSignOut();
      navigate('/logIn',{replace : true})
  
    }
    return Promise.reject(error);
  }
);





  return axiosSecure;
  
  
}
