import React from 'react'
import LoginCard from '../components/LoginCard'
function Login() {
    return (
        <div className=" flex w-screen h-screen ">
            <div className="hidden h-screen w-full lg:flex lg:flex-col justify-center items-center border-solid border-r-black border-2">
                <h1 className=" font-black md:text-7xl text-slate-900">भारतभ्रमण</h1>
                <h1 className=" m-3  md:text-xl">Incredible India: Discover the Magic!</h1>
            </div>
            <div className=" flex items-center justify-center h-screen w-full">
              <LoginCard/>
            </div>
        </div>
    )
}

export default Login