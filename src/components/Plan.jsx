import React from 'react'

const Plan = () => {
  return (
    <div className='max-w-[1400px] mx-auto py-10 px-4 grid lg:grid-cols-2 gap-4 '>
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh] overflow-hidden '>
            <img className=' row-span-3 object-cover w-full h-full p-2 rounded-tl-2xl' src="https://images.pexels.com/photos/1938032/pexels-photo-1938032.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
            <img className=' row-span-2 object-cover w-full h-full p-2 rounded-tr-2xl' src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
            <img className=' row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/1449767/pexels-photo-1449767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            <img className='row-span-3 object-cover w-full h-full p-2 rounded-bl-2xl' src="https://images.pexels.com/photos/1450351/pexels-photo-1450351.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="/" />
            <img className='row-span-2 object-cover w-full h-full p-2 rounded-br-2xl' src="https://images.pexels.com/photos/1449729/pexels-photo-1449729.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="/" />
        </div>
        {/* Lright Side */}
        <div className='flex flex-col h-full justify-center'>
            <h3 className='text-4xl md:text-6xl font-bold capitalize'>Plan Your next trip</h3>
            <p className='text-2xl py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, aut.</p>
            <p className='pb-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta dolore officia dolor, quia nam laboriosam molestias aliquam, cupiditate quo quasi natus molestiae perspiciatis obcaecati maiores necessitatibus soluta expedita pariatur praesentium!</p>
            <div>
                <button className='border-black mr-4 hover:shadow-xl'>Learn more</button>
                <button className='bg-black text-white border-black hover:shadow-xl'>Book Your trip</button>
            </div>
        </div>
    </div>
  )
}

export default Plan