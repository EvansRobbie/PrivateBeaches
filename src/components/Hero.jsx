import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen '>
        <img className='top-0 left-0 w-full h-screen object-cover' src="https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
        <div className=' absolute top-0 left-0 w-full h-screen bg-black/40 '/>
        <div className='absolute top-0 flex flex-col justify-center w-full h-full text-white '>
            <div className='md:left-[10%] max-w-[1100px] absolute p-4 mx-auto'>
            <p className='capitalize'>All inclusive</p>
            <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl capitalize '>Private beaches and getaways</h1>
            <p className='max-w-[600px] drop-shadow-2xl text-lg py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum veniam maxime facilis voluptatem, a necessitatibus quisquam sequi exercitationem officia voluptates.</p>
            <button className='bg-white text-black'>Reserve now</button>
            </div>
        </div>
    </div>
  )
}

export default Hero