import React from 'react'
import { useState } from 'react'
import Logo from '../Img/Logo.png'
export default function Navbar() {
const [translate,setTranslate]=useState('animate-none');
const [rotate1,setRotate1]=useState('animate-none');
const [rotate2,setRotate2]=useState('animate-none');
const [hide,setHide]=useState('animate-none');
const toggle=()=>{
if(translate==='animate-none'){
  setTranslate('animate-navtoggle')
}
else{
  setTranslate('animate-none')
}
if(rotate1==='animate-none'){
  setRotate1('animate-rotate1')
}
else{
  setRotate1('animate-none')
}

if(rotate2==='animate-none'){
  setRotate2('animate-rotate2')
}
else(
  setRotate2('animate-none')
  )

if(hide==='animate-none'){
  setHide('animate-hide')
}
else{
  setHide('animate-none')
}
}

  return (
    <nav className='bg-black py-3 sticky top-0 z-40 w-full flex h-20 '>
     <div className='lg:w-[10%] max-lg:z-50'> <img src={Logo} alt="" width={60} className='mx-3' /></div>
      <div className={`nav-part max-lg:flex-col max-lg:absolute max-lg:top-[-500px] ${translate} py-3 max-lg:w-full max-lg:z-20 bg-black flex lg:w-[90%] font-montserrat font-semibold`}>
      <ul className='flex text-white items-center justify-center w-[80%] max-lg:flex-col max-lg:space-x-0 max-lg:items-start max-lg:mx-10 max-lg:pt-20 max-lg:py-3  space-x-20'>
        <li className='max-lg:py-3'><a href="#Home" className='hover:text-red-500 transition-all '>Home</a></li>
        <li className='max-lg:py-3'><a href="#About" className='hover:text-red-500 transition-all '>About</a></li>
        <li className='max-lg:py-3'><a href="#Skills" className='hover:text-red-500 transition-all '>Skills</a></li>
        <li className='max-lg:py-3'><a href="#Portfolio" className='hover:text-red-500 transition-all '>Portfolio</a></li>
      </ul>
      <ul className='flex text-white lg:w-[20%] max-md:mx-20 max-lg:mx-10 text-3xl items-center space-x-10'>
        <li><a href="https://github.com/NomanLodhi" target='_main'><i class="fa-brands fa-square-github hover:text-red-500 transition-all"></i></a></li>
        <li><a href="https://www.linkedin.com/in/noman-lodhi-274313247/" target='_main'><i class="fa-brands fa-linkedin hover:text-red-500 transition-all"></i></a></li>
        <li><a href="Mailto:nomanlodhi348@gmail.com"><i class="fa-solid fa-envelope hover:text-red-500 transition-all"></i></a></li>
      </ul>
      </div>
      <button className='text-white mx-5 max-lg:z-50 absolute end-0 my-3 focus-within:outline-none' onClick={toggle}>
        <span className={`block bg-white w-[35px] rounded-full h-1 lg:hidden my-2 ${rotate1}`}></span>
        <span className={`block bg-white w-[40px] rounded-full h-1 lg:hidden my-2 ${rotate2}`}></span>
        <span className={`block bg-white w-[30px] rounded-full h-1 lg:hidden my-2 ${hide}`}></span>
      </button>
    </nav>
  )
}
