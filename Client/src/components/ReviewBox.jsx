import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { userAtom } from '../store/user'
import { Rating } from 'react-simple-star-rating';
import axios from 'axios';
import { toast } from 'react-toastify';
import BACKEND_URL from '../config';
import { useNavigate } from 'react-router-dom';
function ReviewBox({place}) { 
  const user=useRecoilValue(userAtom);
    const [rating,setRating]=useState(0);
    const [body,setBody]=useState("");
    const {_id}=place
    const navigate=useNavigate();

    const handleRating=(rate)=>{
        setRating(rate);
    }
    const handleBody=(e)=>{
        setBody(e.target.value);
    }
    const handleSubmit=()=>{
      const data={
         body,
         rating,
      }
      axios(
        {
            url:BACKEND_URL+`review/${_id}`,
            method: "POST",
            withCredentials:true,
            data,
        }
       ).then(res=>{
        window.location.reload();
        toast("Review Added");
       })
       .catch(err=>{
        toast("something went wrong");
        console.log(err);
       }
       )
    }
  return (
    <div className='py-2 min-h-100 w-full px-10' >
      <div className=' overflow-y-scroll max-h-80 '>
       {
        place.review.map(r=>(
          <div className='flex items-center bg-gray-100 p-2 m-2'>
            <h1 className='text-2xl italic font-semibold mr-3'>{r.author.username}</h1>
            <h1 className='p-1 bg-white font-bold mr-5'>{r.rating}⭐</h1>
            <h1 className='flex'>{r.body}</h1>
          </div>
        ))
       }
      </div>
      {user &&<div className='text-center border-y-2 h-2/12 mt-4 border-black'> 
          <div className='flex justify-center flex-wrap items-center  p-1 mt-2'>
          <input value={body} onChange={handleBody} placeholder='Your review' className='border-2 text-sm border-gray-800 border-solid rounded-2xl p-3 w-1/2' />
          <Rating onClick={handleRating} className='' SVGstyle={{"display":"inline"}} disableFillHover={true} size={25} />
          </div>
          <button className='p-2 bg-slate-100 mt-3 rounded-2xl' onClick={handleSubmit}>Submit</button>
      </div>}
    </div>
  )
}

export default ReviewBox