import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

function ProductItem(props) {
    const { id, image, name, price } = props;
    const { currency } = useContext(ShopContext)

    return (

        <Link className='cursor-pointer text-gray-600' to={`/product/${id}`}>
            <div className='overflow-hidden'>
                <img src={image} className='hover:scale-105 transition ease-linear' />
            </div>
            <p className='text-sm pt-2'>{name}</p>
            <p className='text-sm pt-1 font-medium'>{currency} {price}</p>

        </Link>


    )
}

export default ProductItem
