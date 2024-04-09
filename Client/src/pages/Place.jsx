import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import BACKEND_URL from '../config';
import axios from 'axios';

function Place() {
    const params=useParams();
    const id=params.id;
    const [place,setPlace]=useState({});
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
      axios.get(BACKEND_URL+"places/"+id)
      .then(res=>{
        setPlace(res.data.place);
      })
      .catch((err)=>console.log(err));
      setLoading(false);
    },[id])
    return (
    <div className='h-72 w-64 '>

    </div>
  )
}

export default Place