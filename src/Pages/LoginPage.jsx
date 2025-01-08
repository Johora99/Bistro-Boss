import { FaLongArrowAltLeft } from "react-icons/fa";
import bgImg from '../assets/others/authentication.png'
import BgImage from "@/ShareComponents/BgImage";
import Img1 from '../assets/others/authentication2.png'
import { Link } from "react-router";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { loadCaptchaEnginge, LoadCanvasTemplate,validateCaptcha } from 'react-simple-captcha';
import { useEffect } from "react";
export default function LoginPage() {
  const handleLogin = (e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password)
  }
  useEffect(()=>{
    loadCaptchaEnginge(6); 

  },[])
  return (
    <BgImage bgImg={bgImg}>
    <div className="w-full h-screen flex items-center justify-center">
    <div className="container w-11/12 mx-auto loginShadow p-10">
    <BgImage bgImg={bgImg}>
      <p className="cinzel flex items-center gap-2 text-xl font-semibold text-yellowOrange"><FaLongArrowAltLeft /> <Link to='/'>Go HOME</Link></p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <img src={Img1} alt="" />
        <div className="inter">
          <form onSubmit={handleLogin}>
            <div>
              <label className="form-control w-full ">
      <div className="label">
      <span className="label-text">Email</span>
     </div>
      <input type="email" name="email" placeholder="Enter your email" className="input input-bordered formInput" />
     </label>
            </div>
            <div className="my-5">
              <label className="form-control w-full ">
      <div className="label">
      <span className="label-text">Password</span>
     </div>
      <input type="password" name="password" placeholder="Enter your password" className="input input-bordered formInput" />
     </label>
            </div>
            <div>
              <div>
                < LoadCanvasTemplate/>
              </div>
              <input type="text" name="captcha" placeholder="Type here" className="input input-bordered formInput my-5" />
            </div>
            <div>
              <button className="w-full py-3 bg-Tan bg-opacity-[0.7] text-white text-xl font-bold rounded-lg">Sign In</button>
            </div>
          </form>
          <div>
            <p className="text-Tan text-xl text-center mt-5">New here? <Link to='/signUp' className="font-bold">Create a New Account</Link></p>
            <p className="text-center text-dimGray font-medium my-3">Or sign in with</p>
          </div>
          <div>
            <ul className="flex items-center justify-center gap-5">
            <li>
          <Link className=" w-12 h-12 rounded-full border-[1px] border-dimGray relative flex items-center justify-center">
           <FaGoogle className="text-dimGray text-2xl" />
          </Link>
         </li>
         <li>
           <Link className=" w-12 h-12 rounded-full border-[1px] border-dimGray relative flex items-center justify-center">
       <FaGithub className="text-dimGray text-xl" />
         </Link>
  </li>
</ul>

          </div>
        </div>
      </div>
    </BgImage>
    </div>
    </div>
    </BgImage>
  )
}
