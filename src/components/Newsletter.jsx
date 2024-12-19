import React from 'react'

function Newsletter() {

    const submitFormHandler = (event) => {
        event.preventDefault();
    }

    return (
        <div className='py-5 text-center'>
            <p className='font-semibold text-xl text-gray-800 mb-3'>Subscribe now & get flat 25% off</p>
            <p className='text-gray-400 mb-3'>Grab this offer now! Lorem ipsum dolor sit amet Lorem ipsum, dolor.</p>
            <form className='w-full sm:w-1/2 flex items-center m-auto my-6 gap-2' onSubmit={submitFormHandler}>
                <input className='w-full border sm:flex-1 px-2 py-2 rounded-sm' type="email" placeholder="Enter your email" required />
                <button type='submit' className='bg-black text-white px-2 py-2 rounded-sm '>SUBSCRIBE</button>
            </form>
        </div>

    )
}

export default Newsletter
