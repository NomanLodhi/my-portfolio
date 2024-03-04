import React, { useState } from 'react'

import Data from "../data.json"
export default function Portfolio() {

    return (
    <div className=' bg-gradient-to-t to-black from-pink-700 py-10'>
<h1 className="text-center py-7 text-yellow-500 lg:text-7xl max-lg:text-2xl font-wix font-bold  ">Featured Work</h1>


<div className="grid max-md:grid-cols-1 max-lg:grid-cols-2 grid-cols-3  py-6 justify-center  mx-3 items-center flex-wrap">
    {Data.map(data=>(
        <div className=' cursor-pointer h-[200px]  mx-3 my-5 rounded-md relative overflow-hidden hov'  >
    <img src={require(`../${data.imageUrl}`)} alt="" className='aspect-square w-full h-full rounded-md'/>
    <div className="absolute  bg-gradient-to-t to-black/70 from-red-700/70 py-10 w-full h-full rounded-md text-white ani transition-all text-center">
       <div className="flex align-middle justify-center space-x-2">
       <button className="text-white text-center my-10 font-montserrat font-semibold " ><a href={data.url} target='_main' className=' bg-red-500 p-3 rounded-md'>Live Demo  <i class="fa-solid fa-eye px-2"></i></a></button>
       <button className="text-white text-center my-10 font-montserrat font-semibold " ><a href={data.githubUrl} target='_main' className=' bg-purple-700 p-3 rounded-md'>View Code  <i class="fa-solid fa-code px-2"></i></a></button>
       </div>
    </div>
</div>
    ))}



</div>
    </div>



   

  )
}
