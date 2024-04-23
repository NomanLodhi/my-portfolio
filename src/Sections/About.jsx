import React from 'react'
import CV from '../Img/Noman Lodhi Resume.pdf'
export default function About() {
  return (
    <>
    <section className='relative  bg-gradient-to-t to-black from-pink-700'>
     <div className="  flex max-lg:flex-col p-10 items-center justify-center" >
<div className='flex flex-col items-start md:w-[80%] py-5'>
        <h1 className='font-wix lg:text-7xl max-md:text-2xl lg:p-10 font-bold text-yellow-500'>About me :</h1>
        <p className='text-white font-montserrat lg:px-10 py-5 text-justify '>
            Hello, I'm Noman Lodhi, a 21-year-old Frontend Web Developer based in Karachi, Pakistan. With a fervent passion for my craft, I channel my energy into transforming ideas into captivating and seamless web experiences. I thrive on the dynamic nature of web development, constantly seeking innovative solutions to create visually appealing and user-friendly interfaces. My journey as a developer is driven by a commitment to staying at the forefront of evolving technologies, ensuring that every line of code I write contributes to a seamless digital landscape.
        </p>
   <div className="flex space-x-4  flex-wrap items-center lg:px-10 py-3 font-wix">
    <span className='bg-white px-3 flex rounded-full p-1 my-3 items-center'>
    <i className="fa-solid fa-user text-red-500 bg-red-200 p-1 rounded-md"></i>
    <p className="px-2 text-xs">Name :  Noman Lodhi</p>
    </span>
    <span className='bg-white px-3 flex rounded-full p-1 my-3 items-center'>
    <i className="fa-solid fa-id-card-clip text-red-500 bg-red-200 p-1 rounded-md"></i>
    <p className="px-2 text-xs">Age :  21 Years</p>
    </span>
    <span className='bg-white px-3 flex rounded-full p-1 my-3 items-center'>
    <i className="fa-regular fa-calendar-days text-red-500 bg-red-200 p-1 rounded-md"></i>
    <p className="px-2 text-xs">Birthday :  10-08-2002</p>
    </span>
    <span className='bg-white px-3 flex rounded-full p-1 my-3 items-center'>
    <i className="fa-regular fa-envelope text-red-500 bg-red-200 p-1 rounded-md"></i>
    <p className="px-2 text-xs">E-mail :  nomanlodhi348@gmail.com</p>
    </span>
    <span className='bg-white px-3 flex rounded-full p-1 my-3 items-center'>
    <i className="fa-solid fa-phone text-red-500 bg-red-200 p-1 rounded-md"></i>
    <p className="px-2 text-xs">Phone :  +92-3308456873</p>
    </span>
   </div>

   <a className="lg:mx-10 p-3 my-3 cursor-pointer font-montserrat bg-red-500 text-white rounded-md" href={CV} download={CV}>Download CV  <i class="fa-solid fa-download font-bold px-2"></i></a>
        </div>
       
     </div>
    
    </section>
 </>
    )
}
