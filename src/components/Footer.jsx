import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import { TiSocialPinterest} from 'react-icons/ti'

const Footer = () => {
    let today = new Date()
  return (
    <div className='w-full bg-gray-900 text-gray-300 mt-24 px-2 py-2'>
        <div className='max-w-[1400px] grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 px-4 py-8'> 
            <div>
                <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                <ul>
                    <li>Travel</li>
                    <li>Booking</li>
                    <li>Flights</li>
                    <li>Cruises</li>
                    <li>Ground</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Support</h6>
                <ul>
                    <li>Pricing</li>
                    <li>Documentation</li>
                    <li>Tours</li>
                    <li>Refund</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Company</h6>
                <ul>
                    <li>About</li>
                    <li>Blogs</li>
                    <li>Jobs</li>
                    <li>Press</li>
                    <li>Partners</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Legal</h6>
                <ul>
                    <li>Claims</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Policies</li>
                    <li>Conditions</li>
                </ul>
            </div>
            <div className=' col-span-2 py-8 md:pt-2'>
                <p className='font-bold uppercase'>Subscribe to our newsletter</p>
                <p className='py-4'>The latest deals, articles and resources sent tou our inbox weekly.</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4 mb-4 rounded-md' type="email" placeholder='Enter Email....' />
                    <button className='  p-2 rounded-md mb-4 hover:bg-white hover:text-gray-900 ease-in duration-300'>Subscribe</button>
                </form>
            </div>
        </div>
        <div className='flex flex-col py-4 px-2 justify-between max-w-[1440px] mx-auto sm:flex-row text-center text-gray-500 '>
            <p className='py-4'>{today.getFullYear()} Experiences, Robbievans. All rights reserved.</p> 
        
            <div className='flex justify-evenly sm:w-[300px] pt-4 text-2xl'>
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <TiSocialPinterest size={30} />
            </div>
        </div>
    </div>
  )
}

export default Footer