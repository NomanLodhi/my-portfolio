import React from 'react'
import Html from '../Img/html-logo.png'
import CSS from '../Img/css-logo.png'
import JS from '../Img/java-script-logo.png'
import Bootstrap from '../Img/bootstrap-logo.png'
import jQuery from '../Img/jQuery-logo.png'
import Ract from '../Img/React-logo.png'
import Tailwind from '../Img/tailwind-css-logo.png'
import MUI from '../Img/material-ui-logo.png'
export default function Skills() {
  return (
    <div className='py-10 bg-white overflow-hidden'>
      <div className="flex items-center space-x-20 animate-slide max-md:animate-slide-sm">
        <img src={Html} alt="" className='  aspect-square grayscale' width={'100px'} />
        <img src={CSS} alt="" className=' aspect-square  grayscale' width={'100px'} />
        <img src={JS} alt="" className='  aspect-square grayscale' width={'100px'} />
        <img src={Bootstrap} alt="" className='  aspect-square grayscale' width={'100px'}/>
        <img src={jQuery} alt="" className='  aspect-square grayscale' width={'100px'}/>
        <img src={Ract} alt="" className='  aspect-square grayscale' width={'100px'} />
        <img src={Tailwind} alt="" className='  aspect-square grayscale' width={'100px'} />
        <img src={MUI} alt="" className=' aspect-square  grayscale' width={'100px'} />
      </div>
    </div>
  )
}
