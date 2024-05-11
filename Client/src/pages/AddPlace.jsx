import React, { useEffect } from 'react'
import AddPlaceCard from '../components/AddPlaceCard'
import { useRecoilValue } from 'recoil'
import { userAtom } from '../store/user'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom';
function AddPlace() {
  const user=useRecoilValue(userAtom);
  const navigate=useNavigate();
  useEffect(()=>{
    if(user==null){
      toast("Please Login First")
      navigate('/login');
  }
  },[user]);
  return (
    <div className=" flex w-screen h-screen ">
    <div className="hidden h-screen w-full lg:flex lg:flex-col justify-center items-center border-solid border-r-black border-2 bg-white">
        <img src='https://media.licdn.com/dms/image/D4D12AQFZrcMNousSGg/article-cover_image-shrink_600_2000/0/1685689346607?e=2147483647&v=beta&t=GD6W3wVhn-r5kX95dEHvDaUE5XEwgOary4tc0nmnZhk'/>
    </div>
    <div className=" flex items-center justify-center h-screen w-full">
          <AddPlaceCard/>
    </div>
</div>
  )
}

export default AddPlace