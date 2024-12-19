import React from 'react'
import { assets } from '../assests/assets'

function Hero() {
    return (
        <div className='flex flex-col sm:flex-row justify-center items-center border border-gray-500'>

            {/* left hero section */}
            <div className='w-full sm:w-1/2 py-10 sm:py-0 flex items-center justify-center'>
                <div className='text-[#414141]'>
                    <div className='flex items-center gap-3'>
                        <p className='w-8 bg-[#414141] h-[2px] md:w-11'></p>
                        <p className='md:text-base'>OUR BESTSELLERS</p>
                    </div>
                    <h1 className='text-3xl sm:py-3 lg:text-5xl pt-serif-regular'>Latest Arrivals</h1>
                    <div className='flex items-center gap-2'>
                        <p className='md:text-base'>SHOP NOW</p>
                        <p className='w-8 bg-[#414141] h-[1px] md:w-11'></p>
                    </div>
                    {/* at p:13 & p:17  i removed text-sm class */}
                </div>
            </div >

            {/* right hero section */}
            < div className='w-full sm:w-1/2' >
                <img src={assets.hero_img} className='w-full h-96 object-fill' />
            </ div>

        </div >
    )
}

export default Hero
