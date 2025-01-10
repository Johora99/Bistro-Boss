import DashBoardSideBar from "@/customComponents/DashBoardSideBar";
import { Outlet } from "react-router";

export default function UserDashBoard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6">
      <div className="col-span-1">
        <DashBoardSideBar></DashBoardSideBar>
      </div>
      <div className="col-span-11">
        <Outlet></Outlet>
      </div>
    </div>
  )
}
