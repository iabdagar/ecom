import React from 'react'
import { assets } from '../assests/assets'

function Footer() {
    return (
        <>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-10 my-10 mt-40 text-sm'>
                <div>
                    <img src={assets.logo} className='w-32 sm:w-36 mb-5' />
                    <p className='w-full sm:w-2/3 text-justify text-gray-500'>Hey! Forever. friend, welcome to our terms and conditions, We are so happy you've made it here. This may not be the most exciting document you'll ever read, however it is important to establish what you can expect from us and what we expect from you. </p>
                </div>
                <div>
                    <p className='text-xl mb-5 font-medium'>COMPANY</p>
                    <ul className='flex flex-col gap-3 text-gray-500'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl mb-5 font-medium'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-3 text-gray-500'>
                        <li>+91-120 269090</li>
                        <li>help.forever@gmail.com</li>
                    </ul>
                </div>
            </div>

            <div className='py-5 text-center'>
                <hr />
                <p className='text-sm text-gray-800 mt-5'>Copyright 2024@ forever - All Right Reserved.</p>
            </div>
        </>

    )
}

export default Footer
