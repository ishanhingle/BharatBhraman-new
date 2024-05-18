import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import BACKEND_URL from '../config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { HashLoader, RingLoader } from 'react-spinners';
import { useSetRecoilState } from 'recoil';
import { userAtom } from '../store/user';

function SignupCard() {
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);
    const setUser=useSetRecoilState(userAtom);
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        setLoading(true);
        axios({
            url: BACKEND_URL + "user/register/",
            method: "POST",
            withCredentials:true,
            data,
        }).then(res => {
            setUser(res.data.user);
            toast("Registration Successfull!")
            navigate('/explore');
            setLoading(false);
        })
            .catch(err => {
                toast(err.message);
                setLoading(false);
            });
       
    }
    return (
        <>
            {(loading) ? (<HashLoader size={100} />) :
                (<div className=' bg-white flex flex-col  justify-center items-center m-2 rounded-xl md:p-3'>
                    <h1 className='text-2xl underline md:text-4xl md:m-3 mb-5'>SIGNUP</h1>

                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-evenly'>
                        <div>
                            <label className='text-xl m-3 italic'>Username</label>
                            <input className=" border-solid border-2 p-1 rounded-lg bg-slate-50 m-2 focus:bg-slate-200" {...register("username")} />
                        </div>
                        <div>
                            <label className='text-xl m-3 mr-12 italic'>Email</label>
                            <input className=" border-solid border-2 p-1 rounded-lg bg-slate-50 m-2 focus:bg-slate-200" {...register("email")} />
                        </div>
                        <div>
                            <label className='text-xl m-3 italic'>Password</label>
                            <input className='border-solid border-2 p-1 rounded-lg bg-slate-50 m-2  focus:bg-slate-200' type='password' {...register("password")} />
                        </div>
                        <button type='submit' className='md:text-2xl p-2 m-3 bg-slate-50 rounded-xl hover:bg-slate-200'>Submit</button>
                    </form>
                </div>)}
        </>
    )
}

export default SignupCard