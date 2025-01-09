import Footer from "@/customComponents/Footer";
import Navbar from "@/ShareComponents/Navbar";
import { Outlet, useLocation } from "react-router";
import { ToastContainer} from 'react-toastify';
export default function MainLayOut() {
  const location = useLocation();
  const notNavFooter = location.pathname.includes('/logIn') || location.pathname.includes('/signUp')
  return (
    <div>
      {
        notNavFooter || <Navbar></Navbar>
      }
    
      <Outlet></Outlet>
      {
        notNavFooter || <Footer></Footer>
      }
      <ToastContainer />
    </div>
  )
}
