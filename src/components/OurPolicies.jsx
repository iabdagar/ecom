import React from 'react'
import { assets } from '../assests/assets'

function OurPolicies() {

    return (
        <div className='flex flex-col gap-12 py-20 text-center sm:flex-row items-center justify-around sm:text-sm md:text-base'>
            <div>
                <img className='w-12 mb-5 m-auto' src={assets.exchange_icon} />
                <p className='font-semibold mb-2 text-gray-800'>Easy Exchange Policy</p>
                <p className='text-gray-500'>We offer easy exchange and return</p>
            </div>
            <div>
                <img className='w-12 mb-5 m-auto' src={assets.quality_icon} />
                <p className='font-semibold mb-2 text-gray-800'>100% Original products</p>
                <p className='text-gray-500'>Original guarantee for all products</p>
            </div>
            <div>
                <img className='w-12 mb-5 m-auto' src={assets.support_img} />
                <p className='font-semibold mb-2 text-gray-800'>Quality Customer Support</p>
                <p className='text-gray-500'>We provide 24/7 cumtomer support</p>
            </div>
        </div>
    )
}

export default OurPolicies
