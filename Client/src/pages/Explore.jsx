import React, { useEffect, useState } from 'react'
import PlaceCard from '../components/PlaceCard'
import axios from 'axios';
import env from "react-dotenv";
import BACKEND_URL from '../config';
import { HashLoader, PropagateLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import MapModal from '../components/MapModal';

function Explore() {
  const [places,setPlaces]=useState([]);
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    axios.get(BACKEND_URL+"places/")
    .then(res=>{setPlaces(res.data.places)
      setLoading(false);
    })
    .catch((err)=>console.log(err));
  },[])
  return (
    <div className='min-h-screen w-screen '>
      <h1 className=' text-sm md:text-3xl lg:text-4xl text-center mt-6 drop-shadow-2xl font-extrabold text-slate-700'>𝖶𝗁𝖾𝗋𝖾 𝖢𝗎𝗅𝗍𝗎𝗋𝖾 𝖬𝖾𝖾𝗍𝗌 𝖠𝖽𝗏𝖾𝗇𝗍𝗎𝗋𝖾: 𝖣𝗂𝗏𝖾 𝗂𝗇𝗍𝗈 𝗍𝗁𝖾 𝖧𝖾𝖺𝗋𝗍 𝗈𝖿 𝖨𝗇𝖽𝗂𝖺!</h1>
      <div className=' text-left p-3 '>
        <div className='flex justify-between p-3'>
        <h1 className=' lg:text-2xl font-bold m-3 '>Explore Places</h1>
        <MapModal places={places}/>
        </div>
        {(loading)?
        (<div className='w-full h-screen flex items-center justify-center'>
          <HashLoader size={75}/>
         </div> )
        : 
        ( 
          <div className='flex flex-wrap justify-center gap-6 mt-12  lg:gap-9'>
           {places.map(place=><PlaceCard place={place} key={place._id}></PlaceCard>)}
        </div>
        )}
      </div>
      <div className= 'm-5 flex justify-end' title="Add a new Place">
          <Link className='text-right text-5xl font-bold p-3 md:p-6 md:pt-4 bg-slate-200 rounded-full'
          to={'/addPlace'}
          >
            +
          </Link>
        </div>
    </div>
  )
}

export default Explore