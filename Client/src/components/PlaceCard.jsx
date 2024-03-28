import React from 'react'

function PlaceCard({place}) {
  return (
    <div className=' bg-white rounded-xl p-3 h-56 w-48 md:h-64 md:w-56'>
      <div className='flex justify-center m-1 h-3/5'>
        <img className='rounded-xl h-full w-full' src={place.image[0].url}/>
      </div>
      <div className='text-left'>
        <h1 className='font-bold text-3xl  mt-2'>{place.name}</h1>
        <h1 className='text-sm'>{place.location}</h1>
       </div> 
    </div>
  )
}

export default PlaceCard