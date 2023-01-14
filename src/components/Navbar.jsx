import React, {useState} from 'react'
import {HiMenuAlt3} from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () =>{
    setNav(!nav)
    if(!nav) {
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = 'scroll'
    }
  }
  return (
    <div className='absolute w-full flex justify-between p-4 items-center'>
      <h1 className='text-white font-bold text-2xl z-20'>Experiences</h1>
      <div className='z-20 text-white font-bold ' onClick={handleNav} >
        {nav? <AiOutlineClose size={25} className='cursor-pointer'/>: <HiMenuAlt3 className='cursor-pointer' size={25} />}
      </div>
      <nav className={`${nav ? 'fixed left-0   bg-black/90 ' : 'absolute -left-full '}  top-0 w-full h-screen  px-4 py-7 text-gray-300 z-10 ease-in duration-500`}>
        <ul className='w-full h-full flex justify-center items-center flex-col'>
          <li className='text-3xl p-8'>Home</li>
          <li className='text-3xl p-8'>Destination</li>
          <li className='text-3xl p-8'>Reservations</li>
          <li className='text-3xl p-8'>Amenities</li>
          <li className='text-3xl p-8'>Rooms</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar