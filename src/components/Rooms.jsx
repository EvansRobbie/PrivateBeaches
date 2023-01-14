import React from 'react'

const Rooms = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 md:mb-[35%] lg:mb-[20%] px-4 grid lg:grid-cols-3 gap-4'>
        <div className='relative col-span-2 lg:top-20 lg:col-span-1'>
            <h3 className='text-2xl font-bold'>Fine Interior Rooms</h3>
            <p className='pt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam temporibus deserunt culpa nemo fugit numquam.</p>
        </div>
        <div className='grid grid-cols-2 col-span-2 gap-2 '>
            <img className='object-cover w-full h-full rounded-tl-lg' src="https://images.pexels.com/photos/3201758/pexels-photo-3201758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            <img className='row-span-2 object-cover w-full h-full rounded-r-lg' src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            <img className='object-cover w-full h-full rounded-bl-lg' src="https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
        </div>
    </div>
  )
}

export default Rooms