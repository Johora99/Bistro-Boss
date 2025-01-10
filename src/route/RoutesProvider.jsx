import Carts from "@/customComponents/Carts";
import UserDashBoard from "@/DashBoard/UserDashBoard";
import MainLayOut from "@/MainLayOut/MainLayOut";
import ContactUs from "@/Pages/ContactUs";
import HomePage from "@/Pages/HomePage";
import LoginPage from "@/Pages/LoginPage";
import OurMenuPage from "@/Pages/OurMenuPage";
import OurShopPage from "@/Pages/OurShopPage";
import PrivatePage from "@/Pages/PrivatePage";
import SignUpPage from "@/Pages/SignUpPage";
import {Routes, Route } from "react-router";
export default function RoutesProvider() {
  return (
    <>
      <Routes>
      <Route path="/" element={<MainLayOut></MainLayOut>}>
      <Route index element={<HomePage></HomePage>}></Route>
      <Route path="/ourMenu" element={<OurMenuPage></OurMenuPage>}></Route>
      <Route path="/ourShop" element={<OurShopPage></OurShopPage>}></Route>
      <Route path="/contactUs" element={<ContactUs></ContactUs>}></Route>
      <Route path="/logIn" element={<LoginPage></LoginPage>}></Route>
      <Route path="/signUp" element={<SignUpPage></SignUpPage>}></Route>
      </Route>
      <Route path="/dashBoard" element={<PrivatePage><UserDashBoard></UserDashBoard></PrivatePage>}>
        <Route path="/dashBoard/cart" element={<PrivatePage><Carts></Carts></PrivatePage>}></Route>
      </Route>
    </Routes>
    </>
    
  )
}
