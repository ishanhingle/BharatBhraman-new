import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

function Home() {
    return (
        <div className='h-screen w-screen bg-cover flex flex-col justify-center items-center p-10 bg-center bg-blend-darken bg-gray-500' style={{backgroundImage:`URL('https://etimg.etb2bimg.com/photo/92380696.cms')`,height:`87vh`,}}>
            <div className='md:p-12 text-2xl md:text-4xl lg:text-5xl  font-black text-white italic text-center' style={{filter:`brightness(1.75)`}}>
            From the Himalayan peaks to the sun-kissed shores, Bharat Bhraman beckons with its diverse roars.
            </div>
            <div className='flex justify-center m-4'>
                  <button className='p-3 lg:p-5 text-l md:p-5 md:text-3xl font-bold bg-gray-200 hover:bg-slate-50 hover:scale-110 rounded-3xl'>
                    <Link to={'/explore'}>
                        GET STARTED
                    </Link>
                  </button>
            </div>
        </div>
    )
}

export default Home