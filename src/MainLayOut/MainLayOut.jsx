import Footer from "@/customComponents/Footer";
import Navbar from "@/ShareComponents/Navbar";
import { Outlet, useLocation } from "react-router";

export default function MainLayOut() {
  const location = useLocation();
  const notNavFooter = location.pathname.includes('/logIn')
  return (
    <div>
      {
        notNavFooter || <Navbar></Navbar>
      }
      <Outlet></Outlet>
      {
        notNavFooter || <Footer></Footer>
      }
    </div>
  )
}
