import React from 'react';
import logo from "../images/logo.png";
import { FaHouseChimney } from "react-icons/fa6";
import { IoInformationCircle } from "react-icons/io5";
import { BiSolidCalendarStar } from "react-icons/bi";
import { IoCamera } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";

const Navbar = () => {

  return (
    <div className="sticky top-0 w-full bg-[#0056D2] h-[9vh] flex items-center justify-between px-8 text-white">
        <a href="#" className='flex items-center justify-center'>
            <img src={logo} className="size-12" />
            <span className="font-semibold text-lg">CampusConnect</span>
        </a>

        <ul className="flex gap-8 text-sm">
            <li><a href="#" className='flex items-center justify-center'><FaHouseChimney className='mr-1 text-lg'/>Home</a></li>
            <li><a href="#" className='flex items-center justify-center'><IoInformationCircle className='mr-1 text-xl '/>About</a></li>
            <li><a href="#" className='flex items-center justify-center'><BiSolidCalendarStar className='mr-1 text-lg'/>Events</a></li>
            <li><a href="#" className='flex items-center justify-center'><IoCamera className='mr-1 text-xl'/>Gallery</a></li>
            <li><a href="#" className='flex items-center justify-center'><FaPhone className='mr-1 text-lg'/>Contact</a></li>
            <li><a href="#" className='flex items-center justify-center'><MdMessage className='mr-1 text-xl'/>Feedback</a></li>
        </ul>
    </div>
  )
}

export default Navbar