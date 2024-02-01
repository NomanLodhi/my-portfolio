import React from 'react'
import { TypeAnimation } from 'react-type-animation';
export default function AnimatedText() {
  return (
    <div>
      <TypeAnimation
          sequence={[
            'Front end developer',
            1000,
            'Transforming ideas into amazing web experiences',
            1000,
            
          ]}
          wrapper="h1"
          speed={50}
         className='py-5 lg:text-3xl text-center'
          repeat={Infinity}
        />
    </div>
  )
}
