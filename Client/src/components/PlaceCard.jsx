import React from 'react'
import { Link } from 'react-router-dom'

function PlaceCard({place}) {
  return (
    <div className=' bg-white rounded-xl p-1 py-2 md:p-3 h-64 w-40 md:h-96 md:w-72 truncate'>
      <div className='flex justify-center m-1 h-1/2'>
        <img className='rounded-xl h-full w-full' src={place.image[0].url}/>
      </div>
      <div className='text-left'>
        <h1 className='font-bold text-sm md:text-2xl  mt-2'>{place.name}</h1>
        <h1 className='text-xs md:text-sm'>{place.location}</h1>
        <div className='mt-3 w-full text-xs md:text-xl truncate'>{place.description}</div>
       </div>
       <div className='text-right mt-3 lg:mt-6'>
         <Link className=' bg-cyan-100 rounded-xl text-sm p-1 md:p-2 font-semibold hover:bg-cyan-300 delay-75' to={`/place/${place._id}`}>View Details→</Link>
       </div> 
    </div>
  )
}

export default PlaceCard