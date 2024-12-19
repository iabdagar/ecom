import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

function BestSeller() {

    const { products } = useContext(ShopContext);

    const [bestSeller, setBestSeller] = useState([]);
    console.log(bestSeller);
    useEffect(() => {
        const bestProducts = products.filter((item) => {
            return item.bestseller
        }
        );

        setBestSeller(bestProducts.slice(2, 7));
    }, [])

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p className='w-3/4 text-sm m-auto sm:text-base text-gray-600'>Our best sellers. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            {/* Rendering best sellers products */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-8'>
                {
                    bestSeller.map((product, index) => {
                        return <ProductItem key={index} name={product.name} id={product._id} image={product.image} price={product.price} />
                    })
                }
            </div>


        </div>
    )
}

export default BestSeller
