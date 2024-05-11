import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BACKEND_URL from '../config';
import axios from 'axios';
import { Carousel } from "@material-tailwind/react";
import ImageCarousel from '../components/ImageCarousel';
import { HashLoader, RingLoader } from 'react-spinners';
import PlaceMap from '../components/PlaceMap';
import ReviewBox from '../components/ReviewBox';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../store/user';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Place() {
  const params = useParams();
  const id = params.id;
  const user=useRecoilValue(userAtom);
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate=useNavigate()
  useEffect(() => {
    const fetchPlace=async()=>{
      const res= await axios.get(BACKEND_URL + "places/" + id);
      setPlace(res.data.place)
      setLoading(false);
    }
    fetchPlace();
  }, [])
 
  const deletePlace=()=>{
    axios({
      url:BACKEND_URL+'places/delete/'+id,
      method:'DELETE',
      withCredentials:true,
    })
    .then(res=>{
      toast("Place Deleted")
      navigate('/explore');
    })
    .catch(
      err=>{toast("something went wrong")}
    )
  }

  return (
    (!loading)?(
    <div className='min-h-screen w-screen bg-slate-100 '>
      <div className='w-screen justify-around flex flex-wrap bg '>
        <div className=' w-4/5 h-100  lg:w-2/5 bg-slate-300 p-2 mt-4'>
        <ImageCarousel className="h-fit" image={place.image}/>
        </div>
        <div className='h-100 w-full flex flex-col items-center lg:w-1/2 lg:px-3 bg-white  m-4 lg:m-2 lg:mt-4 rounded-2xl shadow-2xl p-4 '>
        <h1 className=' mt-4 text-2xl lg:text-5xl font-black text-neutral-600 '>{place.name}</h1>
        <h1 className=' text-center  lg:text-2xl lg:m-2   text-neutral-600 '>{place.location}</h1>
        <div className='w-4/5 max-h-2/5 m-4 text-xl lg:text-2xl font-semibold overflow-scroll'>
          {place.description}
        </div>
        <h1 className='w-4/5 mt-6'>AVERAGE TICKET PRICE : {place.price}</h1>
        </div>
      </div>
      <div className='w-screen justify-around flex flex-wrap  my-4'>
         <div className=' w-4/5 min-h-96  lg:w-2/5 bg-slate-300 p-2 mt-4'>
           <PlaceMap place={place}/>
         </div> 
         <div className=' w-full flex flex-col items-center lg:w-1/2 l bg-white  m-4 lg:m-2 lg:mt-4 rounded-2xl shadow-2xl'>
         <h1 className=' mt-4 text-2xl lg:text-5xl font-black text-neutral-600 '>Reviews</h1>
         <ReviewBox place={place}/>
         </div> 
      </div>
      { 
        (user._id===place.author._id) &&
        <div className='w-screen bg-gray-100 flex justify-center m-4'>
        <button className='text-2xl font-semibold bg-red-500 text-white p-2 hover:bg-red-800 ' onClick={deletePlace}>Delete Place</button>
      </div>
      }
     
    </div>)
    :(<div className=" h-screen w-screen flex justify-center items-center">
      <HashLoader size={100}/>
    </div>)
)
}

export default Place