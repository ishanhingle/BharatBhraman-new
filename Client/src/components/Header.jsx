import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { userAtom } from '../store/user';
import axios from 'axios';
import BACKEND_URL from '../config';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
function Header() {
  const [user,setUser]=useRecoilState(userAtom);
  const navigate=useNavigate();
  const logout=()=>{
      axios.get(BACKEND_URL+"user/logout")
      .then((res)=>{
        setUser(null);
        toast("Logged out successfully");
        navigate('/');
      }
      )
  }
  return (
    <div className=' flex bg-slate-900 text-lime-50 p-2 py-4 border-b-4 border-solid border-red-300 justify-between items-center'>
       <div className=' md:text-3xl italic drop-shadow-2xl  font-extrabold'><Link to={'/'}>भारतभ्रमण</Link></div>
       <div className='flex gap-4 justify-center items-center text-xs md:text-l   md:px-3'>
        <Link className='hover:scale-105 hover:text-zinc-200 delay-75 font-semibold lg:text-lg' to={'/explore'}>EXPLORE</Link>
        <Link className='hover:scale-105 hover:text-zinc-200 delay-75 font-semibold lg:text-lg' to={'/addPlace'}>ADD A PLACE</Link>
        {(user==null)?
            <Link className= 'over:scale-105 hover:text-zinc-200 delay-75 font-semibold lg:text-lg' to='login'>SIGNIN</Link>
            :(<div className=' flex flex-wrap'>
              <button className=' ml-1 rounded-xl  p-2 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black' onClick={logout}>
                <svg
							  	xmlns="http://www.w3.org/2000/svg"
							  	fill="none"
							  	viewBox="0 0 24 24"
							  	strokeWidth="1"
							  	stroke="currentColor"
							  	className="w-8 h-8"
							  >
							  <path
							  	strokeLinecap="round"
							  	strokeLinejoin="round"
							  	d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
							  />
							  </svg>
              </button>
              </div>
            )
            }
       </div>
    </div>
  )
}

export default Header