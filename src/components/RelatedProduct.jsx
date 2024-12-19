import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

function RelatedProduct(props) {
    const { category, subCategory } = props;
    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState();

    useEffect(() => {
        if (products) {
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item) => category === item.category);
            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);
            setRelated(productsCopy);
        }
    }, [products])

    return (
        <div className='my-24'>
            <div className='text-3xl text-center py-2'>
                <Title text1={'RELATED'} text2={'PRODUCTS'} />
            </div>

            <div className='my-12 grid grid-cols-2 gap-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
                {
                    related && related.map((item, index) => {
                        return (
                            <ProductItem key={index} item={item} image={item.image[0]} price={item.price} name={item.name} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RelatedProduct
