import DashBoardSideBar from "@/customComponents/DashBoardSideBar";
import { Outlet } from "react-router";

export default function UserDashBoard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12">
      <div className="col-span-2 min-h-screen h-full bg-Tan">
        <DashBoardSideBar></DashBoardSideBar>
      </div>
      <div className="col-span-10 bg-gray">
        <Outlet></Outlet>
      </div>
    </div>
  )
}
