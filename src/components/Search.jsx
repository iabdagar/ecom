import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assests/assets';
import { useLocation } from 'react-router-dom';

function Search() {

    const { Search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const [visible, setVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes('collection')) {
            setVisible(true);
        }
        else {
            setVisible(false);
        }
    })

    return showSearch && visible ? (
        <div className='border-t border-b py-5 bg-gray-25 text-center'>
            <div className='inline-flex items-center justify-center border border-gray-400 px-4 py-2 w-2/3 rounded-full sm:w-1/2 mx-3'>
                <input value={Search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='search' className='flex-1 w-full outline-none px-2 text-sm bg-inherit' />
                <img src={assets.search_icon} className='w-4' />
            </div>
            <img onClick={() => setShowSearch(false)} src={assets.cross_icon} className='w-3 inline cursor-pointer' />
        </div>
    ) : null
}

export default Search
