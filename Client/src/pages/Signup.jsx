import React from 'react'
import SignupCard from '../components/SignupCard'

function Signup() {
  return (
    <div className=" flex w-screen h-screen ">
            <div className=" h-screen w-full flex flex-col justify-center items-center border-solid border-r-black border-2">
                <h1 className=" font-black text-7xl text-slate-900">भारतभ्रमण</h1>
                <h1 className=" m-3 text-xl">Incredible India: Discover the Magic!</h1>
            </div>
            <div className=" flex w-full items-center justify-center h-screen">
              <SignupCard/>
            </div>
        </div>
  )
}

export default Signup