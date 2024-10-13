import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { BsYoutube } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa6";
import { MdOutlineVideoCall } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
function Navbar() {
  return (
    <div className='flex justify-between px-14 h-14 items-center bg-[#212121] opacity-95 sticky '>
     <div className='flex gap-8 items-center text-2xl text-white'>
      <div>
        
<GiHamburgerMenu />

      </div>
      <div className="logo flex items-center justify-center gap-2">
        <BsYoutube className='text-2xl text-red-700'/>
        <span className='text-2xl '>Youtube</span>
      </div>
      </div>
      <div className='flex justify-center items-center'>
        <form action="">
          <div className='flex items-center bg-zinc-900 h-10 px-4 pr-0 rounded-3xl'>
            <div className='flex items-center gap-5 pr-5'> 
              <input type="text" placeholder='search' className='w-96 bg-zinc-900 focus:outline-none border-none'/>
              </div>
              <button className='h-10 w-16 flex items-center justify-center bg-zinc-800 rounded-r-3xl'>
                
              <CiSearch  className='text-xl rounded-r-3xl'/>
              </button>
           
          </div>
        </form>
      
        <div className='text-xl p-3 bg-zinc-900 rounded-full '>
          <FaMicrophone/>
        </div>
        </div>
        <div className='flex items-center gap-8 text-xl'>
          <MdOutlineVideoCall/>
         <div className='relative'>
          <FaRegBell  />
          <span className='absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1'>9+</span></div> 
        </div>
        <img src="images\premium_photo-1664474619075-644dd191935f.avif" alt=" profile image"  className='w-9 h-9 rounded-full'/>
     
     
    </div>
  )
}

export default Navbar

