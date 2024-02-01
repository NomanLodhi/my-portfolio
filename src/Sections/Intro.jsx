import React from 'react'
import  Profile  from '../Img/Profile.jpg';
import AnimatedText from '../Components/AnimatedText';
export default function Intro() {
  return (
      <div className='bg-intro relative h-screen bg-no-repeat bg-cover bg-center'>
    
        <div className="absolute h-screen bg-black/[.50]  w-full">
            <div className='flex flex-col items-center justify-center font-mono text-white h-full'>
            <img src={Profile} alt="" width={200} height={200} className='my-10 rounded-full grayscale ring-8 ring-blue-50/[.60]'/>
        <h1 className='font-montserrat font-bold text-5xl'>Noman <span className="text-red-500">Lodhi</span></h1>
          <AnimatedText className='font-bold text-3xl'/>
            </div>
        </div>
        </div>
  )
}
