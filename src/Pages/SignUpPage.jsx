import BgImage from "@/ShareComponents/BgImage";
import bgImg from '../assets/others/authentication.png'
import Img1 from '../assets/others/authentication2.png'
import { Link } from "react-router";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
export default function SignUpPage() {
  return (
    <BgImage bgImg={bgImg}>
    <div className="w-full h-screen flex items-center justify-center">
    <div className="container w-11/12 mx-auto loginShadow p-10">
    <BgImage bgImg={bgImg}>
      <p className="cinzel flex items-center gap-2 text-xl font-semibold text-yellowOrange"><FaLongArrowAltLeft /> <Link to='/'>Go HOME</Link></p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
      
        <div className="inter">
          <form>
            <div>
              <label className="form-control w-full ">
      <div className="label">
      <span className="label-text">Name</span>
     </div>
      <input type="text" name="name" placeholder="Enter your name" className="input input-bordered formInput mb-5" />
     </label>
            </div>
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
              <button className="w-full py-3 bg-Tan bg-opacity-[0.7] text-white text-xl font-bold rounded-lg">Sign Up</button>
            </div>
          </form>
          <div>
            <p className="text-Tan text-xl text-center mt-5">Already registered?<Link to='/logIn' className="font-bold">Go to log in</Link></p>
            <p className="text-center text-dimGray font-medium my-3">Or sign up with</p>
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
          <img src={Img1} alt="" />
      </div>
    </BgImage>
    </div>
    </div>
    </BgImage>
  )
}
