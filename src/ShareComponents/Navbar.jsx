import useAuth from "@/Hooks/useAuth";
import { Link, NavLink, useNavigate } from "react-router";

export default function Navbar() {
  const {user,handleSignOut} = useAuth();
  const navigate = useNavigate();
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
           
           {
            user ? <>
            <li>
            <Link>
            <button onClick={signOut}>SIGN OUT</button>
            </Link>
           </li>
           <li>
            <img src={user?.photoURL} alt="" className="w-12 h-12 rounded-full"/>
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
