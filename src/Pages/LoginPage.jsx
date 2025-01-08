import { FaLongArrowAltLeft } from "react-icons/fa";
import bgImg from '../assets/others/authentication.png'
import BgImage from "@/ShareComponents/BgImage";
import Img1 from '../assets/others/authentication2.png'
import { Link } from "react-router";
export default function LoginPage() {
  return (
    <BgImage bgImg={bgImg}>
    <div className="w-full h-screen flex items-center justify-center">
    <div className="container w-11/12 mx-auto loginShadow p-10">
    <BgImage bgImg={bgImg}>
      <p className="cinzel flex items-center gap-2 text-xl font-semibold text-yellowOrange"><FaLongArrowAltLeft /> <Link to='/'>Go HOME</Link></p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <img src={Img1} alt="" />
        <div className="inter">
          <form>
            <div>
              <label className="form-control w-full ">
      <div className="label">
      <span className="label-text">Email</span>
     </div>
      <input type="text" name="email" placeholder="Enter your email" className="input input-bordered formInput" />
     </label>
            </div>
            <div className="my-5">
              <label className="form-control w-full ">
      <div className="label">
      <span className="label-text">Password</span>
     </div>
      <input type="text" name="password" placeholder="Enter your password" className="input input-bordered formInput" />
     </label>
            </div>
            <div>
              <input type="text"  placeholder="" className="input input-bordered formInput" />
              <input type="text" placeholder="Type here" className="input input-bordered formInput my-5" />
            </div>
            <div>
              <button className="w-full py-3 bg-Tan bg-opacity-[0.7] text-white text-xl font-bold rounded-lg">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </BgImage>
    </div>
    </div>
    </BgImage>
  )
}
