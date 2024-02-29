import React from 'react'

import Icons from '../iconimages.json'
export default function Skills() {
  return (
    <div className='py-10 bg-white overflow-hidden'>
      <div className="flex items-center space-x-20 animate-slide max-md:animate-slide-sm">
        {
          Icons.map(urls=>(
            <img src={require(`../${urls.iconImg}`)} alt="" className='  aspect-square grayscale' width={'100px'} />
            ))
          }
        
      </div>
    </div>
  )
}
