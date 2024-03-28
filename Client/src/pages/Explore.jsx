import React from 'react'
import PlaceCard from '../components/PlaceCard'

function Explore() {
  const place={
    name:"Rajwada",
    image:[{
      url:'https://res.cloudinary.com/dpz7dqgk6/image/upload/v1690564521/BharatBhraman/elzuavmjjjseybd1qprx.jpg'
    }],
    location:'Indore,mp'
  }
  return (
    <div className='h-screen w-screen text-center'>
      <h1 className=' text-sm md:text-3xl lg:text-4xl md:m-2 mt-6 drop-shadow-2xl font-extrabold text-slate-700'>𝖶𝗁𝖾𝗋𝖾 𝖢𝗎𝗅𝗍𝗎𝗋𝖾 𝖬𝖾𝖾𝗍𝗌 𝖠𝖽𝗏𝖾𝗇𝗍𝗎𝗋𝖾: 𝖣𝗂𝗏𝖾 𝗂𝗇𝗍𝗈 𝗍𝗁𝖾 𝖧𝖾𝖺𝗋𝗍 𝗈𝖿 𝖨𝗇𝖽𝗂𝖺!</h1>
      <div className=' text-left p-3 '>
        <h1 className=' text-2xl font-bold m-3 '>Explore Places</h1>
        <div className='flex flex-wrap gap-3'>
          <PlaceCard place={place}></PlaceCard>
        </div>
      </div>
    </div>
  )
}

export default Explore