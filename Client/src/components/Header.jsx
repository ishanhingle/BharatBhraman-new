import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className=' flex bg-slate-900 text-lime-50 p-2 py-4 border-b-4 border-solid border-red-300 justify-between items-center'>
       <div className=' md:text-3xl italic drop-shadow-2xl  font-extrabold'><Link to={'/'}>भारतभ्रमण</Link></div>
       <div className='flex gap-4 md:text-l md:px-3'>
        <Link className='hover:scale-105 hover:text-zinc-200 delay-75' to={'/explore'}>EXPLORE</Link>
        <Link className='hover:scale-105 hover:text-zinc-200 delay-75' to={'/about'}>ABOUT</Link>
        <Link className='hover:scale-105 hover:text-zinc-200 delay-75' to={'/login'}>LOGIN</Link>
        <Link className='hover:scale-105 hover:text-zinc-200 delay-75' to={'/signup'}>SIGNUP</Link>
       </div>
    </div>
  )
}

export default Header