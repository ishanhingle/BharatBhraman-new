import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import BACKEND_URL from '../config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { HashLoader, RingLoader } from 'react-spinners';

function AddPlaceCard() {
    const [loading, setLoading] = useState(false);
    const [files, setFiles] = useState([]);
    const [data, setData] = useState();
    const navigate = useNavigate();

    const fileChange = (e) => {
        console.log(e.target.files);
        setFiles(e.target.files);
        console.log(typeof files);
    }
    const handleChange = (e) => {
        setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const onSubmit = (e) => {
        setLoading(true);
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('price', data.price);
        formData.append('location', data.location);
        formData.append('description', data.description);
        console.log("ready to upload");
        for (let file of files) {
            formData.append('image', file);
        }
        axios({
            url: BACKEND_URL + "places/new",
            method: "POST",
            withCredentials: true,
            headers: {
                "Content-Type": "multipart/form-data"
            },
            data: formData,
        }).then(res => {
            toast("Place Added Successfully")
            navigate('/explore');
            setLoading(false);
        })
        .catch(err => {
            console.log(err)
            setLoading(false);
            toast("err");
        })

    }
    return (
        <>
            {(loading) ? (<HashLoader size={100} />) :
                (<div className='flex flex-col  justify-center items-center rounded-xl md:p-6 h-full w-full'>
                    <h1 className='text-2xl underline md:text-4xl md:m-7'>Add A New Place!</h1>

                    <form onSubmit={onSubmit} className='text-center' encType='multipart/form-data'>
                        <div>
                            <label className='text-xl md:text-3xl m-3 italic'>Name</label>
                            <input className=" border-solid border-2 p-1 rounded-lg bg-slate-50 m-2 ml-9 focus:bg-slate-200" name='name' onChange={handleChange} />
                        </div>
                        <div>
                            <label className='text-xl  md:text-3xl m-3 italic'>Location</label>
                            <input className='border-solid border-2 p-1 rounded-lg bg-slate-50 m-2  focus:bg-slate-200' type='text' name='location' onChange={handleChange} />
                        </div>
                        <div className='flex items-center'>
                            <label className='text-xl md:text-3xl m-3 ml-6 italic'>Description</label>
                            <textarea cols={24} className='border-solid border-2 p-1  rounded-lg bg-slate-50 m-2  focus:bg-slate-200' type='text' name='description' onChange={handleChange} />
                        </div>
                        <div>
                            <label className='text-xl md:text-3xl m-3 italic'>Images</label>
                            <input type='file' multiple onChange={fileChange} className='border-solid border-2 p-1 rounded-lg bg-slate-50 m-4  focus:bg-slate-200' name='image' />
                        </div>
                        <div>
                            <label className='text-xl md:text-3xl m-3 italic'>Ticket Price</label>
                            <input type='text' className='border-solid border-2 p-1 rounded-lg bg-slate-50 m-4  focus:bg-slate-200' name='price' onChange={handleChange} />
                        </div>
                        <button type='submit' className='md:text-2xl p-2 m-3 bg-slate-50 rounded-xl hover:bg-slate-200'>Submit</button>
                    </form>
                </div>)}
        </>
    )
}

export default AddPlaceCard