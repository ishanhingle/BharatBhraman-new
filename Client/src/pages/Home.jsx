import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

function Home() {
    return (
        <div className='h-screen w-screen bg-cover bg-left-top bg-no-repeat backdrop-blur-md' style={{backgroundImage:`URL('https://img.myloview.com/posters/incredible-india-background-with-indian-monuments-700-179338332.jpg')`,height:`90vh`}}>
            <div className='p-12 text-3xl md:text-5xl md:w-4/5 lg:text-7xl lg:w-3/5 font-black text-gray-700 italic'>
            From the Himalayan peaks to the sun-kissed shores, Bharat Bhraman beckons with its diverse roars.
            </div>
            <div className='flex justify-center m-4'>
                  <button className='p-5 text-3xl font-bold bg-gray-200 hover:bg-slate-50 hover:scale-110 rounded-3xl'>
                    <Link to={'/explore'}>
                        GET STARTED
                    </Link>
                  </button>
            </div>
        </div>
    )
}

export default Home