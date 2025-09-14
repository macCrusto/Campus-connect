import React from 'react'
import heroImage from '../images/hero-image1.png'
import { BiArrowToRight } from "react-icons/bi";

const Hero = () => {
  return (
    <section 
        className="h-[91vh] bg-cover bg-center md:bg-[50%_60%] text-white flex flex-col items-center justify-center gap-2 text-center"
        style={{ backgroundImage: `url(${heroImage})` }}>
    
        <h1 className='font-bold text-5xl/16 md:text-7xl/24 text-shadow-heading text-balance w-md md:w-xl'>Welcome to CampusConnect</h1>
        <h2 className='font-light tracking-wide text-lg md:text-2xl'>Your Gateway to Campus Events</h2>
        <p className='font-thin text-white/70 tracking-widest text-sm md:text-md'>Discover, explore and participate in existing college events</p>
        <button className='mt-8 bg-[#0056D2] rounded-lg px-4 py-2 flex items-center justify-center font-medium'>Learn More <BiArrowToRight className='ml-1'/></button>
    </section>
  )
}

export default Hero