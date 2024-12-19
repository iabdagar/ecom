import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';


function LatestCollection() {

    const { products } = useContext(ShopContext);

    const [latestProducts, setlatestProducts] = useState([]);

    useEffect(() => {
        setlatestProducts(products.slice(2, 12));
    }, [])



    return (
        <div className='my-10'>
            <div className=' text-center py-8 text-3xl'>
                <Title text1={'LATEST'} text2={'COLLECTION'} />
                <p className='w-3/4 text-sm m-auto sm:text-base text-gray-600'>Explore wide range of latest collection. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            {/* Rendering latest products */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-8'>
                {
                    latestProducts.map((item, index) => {
                        return <ProductItem key={index} id={item._id} image={item.image} price={item.price} name={item.name} />
                    })
                }
            </div>
        </div>
    )
}

export default LatestCollection
