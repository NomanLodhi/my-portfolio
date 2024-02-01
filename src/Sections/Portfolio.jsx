import React, { useState } from 'react'
import ConnectBok from '../Img/Connectbok.png'
import Nike from '../Img/Nike-Clone-Site.png'
import Urban from '../Img/Urban-fit.png'
import Dash from '../Img/web-dashboard.png'
import Nomi from '../Img/Nomi-Home.png'
import GED from '../Img/GED-Tutors-Clone.png'

export default function Portfolio() {

    return (
    <div className=' bg-gradient-to-t to-black from-pink-700 py-10'>
<h1 className="text-center py-7 text-yellow-500 lg:text-7xl max-lg:text-2xl font-wix font-bold  ">Featured Work</h1>
<div className="flex py-6 justify-center max-lg:flex-col mx-3 items-center flex-wrap">
<div className=' cursor-pointer h-[200px] lg:w-[30%] mx-3  max-lg:w-[90%] my-5 rounded-md relative overflow-hidden hov'  >
    <img src={ConnectBok} alt="" className='aspect-square w-full h-full rounded-md'/>
    <div className="absolute  bg-gradient-to-t to-black/70 from-red-700/70 py-10 w-full h-full rounded-md text-white ani transition-all text-center">
        <p className="text-white text-center my-10 font-montserrat font-semibold  "><a href="https://nomanlodhi.github.io/ConnectBok/" target='_main'className=' bg-red-500 p-3 rounded-md'>Live Demo  <i class="fa-solid fa-eye px-2"></i></a></p>
    </div>
</div>
<div className=' cursor-pointer h-[200px] lg:w-[30%] mx-3  max-lg:w-[90%] my-5 rounded-md relative overflow-hidden hov'  >
    <img src={Nike} alt="" className='aspect-square w-full h-full rounded-md'/>
    <div className="absolute  bg-gradient-to-t to-black/70 from-red-700/70 py-10 w-full h-full rounded-md text-white ani transition-all text-center">
        <p className="text-white text-center my-10 font-montserrat font-semibold  "><a href="https://nomanlodhi.github.io/Nike-Clone/" target='_main'className=' bg-red-500 p-3 rounded-md'>Live Demo  <i class="fa-solid fa-eye px-2"></i></a></p>
    </div>
</div>
<div className=' cursor-pointer h-[200px] lg:w-[30%] mx-3 mx-3  max-lg:w-[90%] my-5 rounded-md relative overflow-hidden hov'  >
    <img src={Urban} alt="" className='aspect-square w-full h-full rounded-md'/>
    <div className="absolute  bg-gradient-to-t to-black/70 from-red-700/70 py-10 w-full h-full rounded-md text-white ani transition-all text-center">
        <p className="text-white text-center my-10 font-montserrat font-semibold  "><a href="https://nomanlodhi.github.io/Urban-fit/" target='_main'className=' bg-red-500 p-3 rounded-md'>Live Demo  <i class="fa-solid fa-eye px-2"></i></a></p>
    </div>
</div>
</div>
<div className="flex py-6 justify-center max-lg:flex-col mx-3 items-center flex-wrap">
<div className=' cursor-pointer h-[200px] lg:w-[30%] mx-3 mx-3  max-lg:w-[90%] my-5 rounded-md relative overflow-hidden hov'  >
    <img src={Dash} alt="" className='aspect-square w-full h-full rounded-md'/>
    <div className="absolute  bg-gradient-to-t to-black/70 from-red-700/70 py-10 w-full h-full rounded-md text-white ani transition-all text-center">
        <p className="text-white text-center my-10 font-montserrat font-semibold " ><a href="https://nomanlodhi.github.io/Web-Team-DashBoard/" target='_main' className=' bg-red-500 p-3 rounded-md'>Live Demo  <i class="fa-solid fa-eye px-2"></i></a></p>
    </div>
</div>
<div className=' cursor-pointer h-[200px] lg:w-[30%] mx-3  max-lg:w-[90%]  my-5 rounded-md relative overflow-hidden hov'  >
    <img src={Nomi} alt="" className='aspect-square w-full h-full rounded-md'/>
    <div className="absolute  bg-gradient-to-t to-black/70 from-red-700/70 py-10 w-full h-full rounded-md text-white ani transition-all text-center">
        <p className="text-white text-center my-10 font-montserrat font-semibold " ><a href="https://nomanlodhi.github.io/Nomi-Ecommerce-Store/" target='_main' className=' bg-red-500 p-3 rounded-md'>Live Demo <i class="fa-solid fa-eye px-2"></i></a></p>
    </div>
</div>
<div className=' cursor-pointer h-[200px] lg:w-[30%] mx-3  max-lg:w-[90%] my-5 rounded-md relative overflow-hidden hov'  >
    <img src={GED} alt="" className='aspect-square w-full h-full rounded-md'/>
    <div className="absolute  bg-gradient-to-t to-black/70 from-red-700/70 py-10 w-full h-full rounded-md text-white ani transition-all text-center">
        <p className="text-white text-center my-10 font-montserrat font-semibold " ><a href="https://nomanlodhi.github.io/GEDtutorclonesite/" target='_main' className=' bg-red-500 p-3 rounded-md'>Live Demo  <i class="fa-solid fa-eye px-2"></i></a></p>
    </div>
</div>
</div>
    </div>



   

  )
}
