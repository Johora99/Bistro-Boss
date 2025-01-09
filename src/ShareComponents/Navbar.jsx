import useAuth from "@/Hooks/useAuth";
import { Link, NavLink, useNavigate } from "react-router";
import cardImg from '../assets/icon/icons8-shopping-cart-100.png'
import useCart from "@/Hooks/useCart";
export default function Navbar() {
  const {user,handleSignOut} = useAuth();
  const navigate = useNavigate();
  const {cart} = useCart();
  const signOut =()=>{
    handleSignOut()
    .then(res=>{
      navigate('/logIn')
    })
  }
  return (
    <div className="w-full fixed z-20 backdrop-blur-md">
     <div>
     <nav>
      <div className="flex items-center justify-between py-5 px-10 text-white">
      <div className="cinzel">
        <h2 className="text-3xl font-black">BISTRO BOSS</h2>
        <p className="text-2xl font-bold tracking-[8px]">Restaurant</p>
      </div>
      <div>
        <ul className="flex items-center gap-5 *:text-xl *:font-extrabold inter">
          <li>
            <NavLink to='/' className={({isActive}) => isActive && 'text-yellowGreen'}>HOME</NavLink>
          </li>
          <li>
            <NavLink to='/contactUs' className={({isActive}) => isActive && 'text-yellowGreen'}>CONTACT US</NavLink>
          </li>
          <li>
            <NavLink>DASHBOARD</NavLink>
          </li>
          <li>
            <NavLink to='/ourMenu' className={({isActive}) => isActive && 'text-yellowGreen'}>OUR MENU</NavLink>
          </li>
          <li>
            <NavLink to='/ourShop' className={({isActive}) => isActive && 'text-yellowGreen'}>OUR SHOP</NavLink>
          </li>
          <li>
            <NavLink>
             <div className="relative">
                <img src={cardImg} alt="" className="w-10"/>
              <span className="absolute w-5 h-5 rounded-full top-1/2 left-6 bg-red-600 flex items-center justify-center text-sm">{cart.length}</span>
             </div>
            </NavLink>
          </li>
           
           {
            user ? <>
            <li>
            <Link>
            <button onClick={signOut}>SIGN OUT</button>
            </Link>
           </li>
           <li>
            <img src={user?.photoURL} referrerpolicy="no-referrer" alt="" className="w-12 h-12 rounded-full"/>
           </li>
            </>: <>
            <li>
            <Link to='/logIn'>
            <button>LOGIN</button>
            </Link>
           </li>
           <li>
            <Link to='/signUp'>
            <button>SIGN UP</button>
            </Link>
           </li>
            </>
           }
        </ul>
      </div>
      </div>
     </nav>
     </div>
    </div>
  );
}
