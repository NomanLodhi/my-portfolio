import React from 'react'
import AnimatedText from '../Components/AnimatedText';
export default function Intro() {
  return (
      <div className='bg-intro relative h-screen bg-no-repeat bg-cover bg-center'>
    
        <div className="absolute h-screen bg-black/[.50]  w-full">
            <div className='flex flex-col items-center justify-center font-mono text-white h-full'>
         
        <h1 className='font-montserrat font-bold text-8xl max-md:text-5xl'>Noman <span className="text-red-500">Lodhi</span></h1>
          <AnimatedText className='font-bold text-3xl'/>
            </div>
        </div>
        </div>
  )
}
