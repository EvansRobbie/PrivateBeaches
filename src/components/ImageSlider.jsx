import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import { RxDotFilled} from 'react-icons/rx'

const ImageSlider = () => {
    const slides = [
        {
            url: 'https://images.pexels.com/photos/5490153/pexels-photo-5490153.jpeg?auto=compress&cs=tinysrgb&w=600',
            title: 'Lobster'
        },
        {
            url: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=600',
            title: 'Sushi'
        },
        {
            url: 'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=600',
            title: 'Pasta'
        },
        {
            url: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=600',
            title: 'Salmon'
        },
       
    ]
    const [ currentIndex, setCurrentIndex] = useState(0)
    const prevSlide = () =>{
        const isFirstIndex = currentIndex === 0
        const newIndex = isFirstIndex ? slides.length -1 :currentIndex -1
        setCurrentIndex(newIndex)
    }
    const nextSlide = () =>{
        const isLastSlide = currentIndex === slides.length-1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
        
    }
    const goToSlide = (slideIndex) =>{
        setCurrentIndex(slideIndex)
    }
  return (
    <div className='max-w-[1400px] h-[580px] w-full  m-auto py-16 px-4 relative group'>
        <div className='w-full h-full rounded-2xl bg-center duration-500 bg-cover' style={{backgroundImage: `url(${slides[currentIndex].url})`}}>

        </div>
        {/* Left Arrow */}
        <div onClick={prevSlide} className='absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 rounded-full group-hover:bg-black/20 text-2xl p-2 text-white cursor-pointer'>
            <BsChevronCompactLeft size={30}/>
        </div>
        {/* Rifht arro */}
        <div onClick={nextSlide} className='absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 rounded-full group-hover:bg-black/20 text-2xl p-2 text-white cursor-pointer'>
            <BsChevronCompactRight size={30}/>
        </div>
        <div className='flex justify-center py-2 top-4' >
            {slides.map((slide, slideIndex) =>(
                <div className='text-2xl cursor-pointer' key={slideIndex} onClick={()=>goToSlide(slideIndex)}>
                    <RxDotFilled/>
                </div>
            ))}

        </div>
    </div>
  )
}

export default ImageSlider