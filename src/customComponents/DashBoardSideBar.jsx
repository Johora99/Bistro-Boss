import React from 'react'
import { NavLink } from 'react-router'
import { AiFillHome } from "react-icons/ai";
import { FaCalendarDays } from "react-icons/fa6";
import { FaMoneyCheck } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { PiListStarFill } from "react-icons/pi";
import { MdBookmarkAdded } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { GiShoppingBag } from "react-icons/gi";
import { FaEnvelope } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaBook } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import useAdmin from '@/Hooks/useAdmin';

export default function DashBoardSideBar() {
  const {isAdmin} = useAdmin();
  return (
    <div>
      <div className='p-10 cinzel'>
        <div>
        <h2 className="text-2xl font-black">BISTRO BOSS</h2>
        <p className="text-lg font-bold tracking-[6px]">Restaurant</p>
      </div>
      <div className='mt-20'>
        {
         isAdmin ? <>
             <ul className=''>
          <li className='dashboard-nav'>
            <AiFillHome className='text-xl'/>
            <NavLink>Admin Home</NavLink>
          </li>
          <li className='dashboard-nav'>
            <FaUtensils className='text-xl'/>
            <NavLink to='/dashBoard/addItems' className={({isActive}) => isActive && 'text-white'}>add items</NavLink>
          </li>
          <li className='dashboard-nav'>
            <TfiMenuAlt className='text-xl'/>
            <NavLink>manage items</NavLink>
          </li>
          <li className='dashboard-nav'>
            <FaBook className='text-xl'/>
            <NavLink className='dashboard-nav'>Manage bookings</NavLink>
          </li>
          <li className='dashboard-nav'>
          <IoIosPeople className='text-xl'/>
            <NavLink to='/dashBoard/allUser' className={({isActive}) => isActive && 'text-white'}>all users</NavLink>
          </li>
        </ul>
          </> :
          <>
             <ul className=''>
          <li className='dashboard-nav'>
            <AiFillHome className='text-xl'/>
            <NavLink>User Home</NavLink>
          </li>
          <li className='dashboard-nav'>
            <FaCalendarDays className='text-xl'/>
            <NavLink>reservation</NavLink>
          </li>
          <li className='dashboard-nav'>
            <FaMoneyCheck className='text-xl'/>
            <NavLink>payment history</NavLink>
          </li>
          <li className='dashboard-nav'>
            <FaShoppingCart className='text-xl'/>
            <NavLink to='/dashBoard/cart' className={({isActive}) => isActive && 'text-white'}>my cart</NavLink>
          </li>
          <li className='dashboard-nav'>
            <PiListStarFill className='text-xl'/>
            <NavLink>add review</NavLink>
          </li>
          <li className='dashboard-nav'>
            <MdBookmarkAdded className='text-xl'/>
            <NavLink>my booking</NavLink>
          </li>
        </ul>
          </>
        }
      
      </div>
      <div className='border-b-[1px] border-white w-full my-10'></div>
      <div>
        <ul>
          <li className='dashboard-nav'>
            <AiFillHome className='text-xl'/>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li className='dashboard-nav'>
            <IoMenu className='text-xl'/>
            <NavLink>Menu</NavLink>
          </li>
          <li className='dashboard-nav'>
            <GiShoppingBag className='text-xl'/>
            <NavLink>Shop</NavLink>
          </li>
          <li className='dashboard-nav'>
            <FaEnvelope className='text-xl'/>
            <NavLink>Contact</NavLink>
          </li>
        </ul>
      </div>
      </div>
    </div>
  )
}
