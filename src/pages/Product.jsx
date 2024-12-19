import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assests/assets';
import RelatedProduct from '../components/RelatedProduct';

function Product() {
    const { productId } = useParams();
    const { products, currency, addToCart } = useContext(ShopContext);
    const [productData, setProductData] = useState(false);
    const [image, setImage] = useState();
    const [size, setSize] = useState('');

    const fetchProductData = async () => {
        console.log(products);
        products.map((item) => {
            if (item._id === productId) {
                setProductData(item);
                setImage(item.image[0])
                return null
            }
        })
    }

    useEffect(() => {
        fetchProductData();
    }, [productId])

    return productData ? (
        <div className='border-t-2 pt-10'>
            <div className='flex flex-col gap-12 sm:flex-row sm:gap-12'>
                <div className='flex flex-1 flex-col-reverse gap-3 sm:flex-row'>
                    <div className='flex justify-between w-full cursor-pointer sm:flex-col sm:justify-normal  sm:w-[19%]'>
                        {
                            productData.image.map((item, index) => (
                                <img onClick={() => { setImage(item) }} src={item} key={index} className='w-[23%] flex-shrink-0 cursor-pointer sm:mb-2 sm:w-full ' />
                            ))
                        }
                    </div>
                    <div className='w-full sm:w-[80%]'>
                        <img src={image} className='w-full h-auto' />
                    </div>
                </div>

                <div className='flex-1'>
                    <h1 className='text-2xl'>{productData.name}</h1>
                    <div className='flex items-center gap-1 mt-2'>
                        <img src={assets.star_icon} className='w-3' />
                        <img src={assets.star_icon} className='w-3' />
                        <img src={assets.star_icon} className='w-3' />
                        <img src={assets.star_icon} className='w-3' />
                        <img src={assets.star_dull_icon} className='w-3' />
                        <p className='pl-2'>(209)</p>
                    </div>

                    <p className='text-lg font-semibold mt-5'>{currency}{productData.price}</p>
                    <p className='text-gray-500 mt-5 text-justify md:w-4/5'>{productData.description}</p>

                    <div className='mt-5 flex flex-col gap-4'>
                        <p className='text-gray-800'>Select Size</p>
                        <div className=''>
                            {
                                productData.sizes.map((item, index) => (
                                    <button onClick={() => { setSize(item) }} key={index} className={`border py-2 px-4 rounded-md mr-3 ${item === size ? ' bg-black text-white transition-all' : ''}`} > {item}</button>
                                ))
                            }
                        </div>
                    </div>
                    <button onClick={() => { addToCart(productData._id, size) }} className='mt-5 border px-4 py-2 text-sm bg-black text-white rounded-md active:bg-white active:text-black'>Add To Cart</button>
                    <hr className='mt-5 md:w-4/5' />
                    <div className='mt-5 text-sm text-gray-500 flex flex-col gap-4'>
                        <p className='flex gap-2 items-center'><img className='w-5' src={assets.quality_icon} />100% Original product.</p>
                        <p className='flex gap-2 items-center'><img className='w-5' src={assets.cash_icon} />Cash on delivery is available on this product.</p>
                        <p className='flex gap-2 items-center'><img className='w-5' src={assets.exchange_icon} />Easy return and exchange policy within 7 days.</p>
                    </div>
                </div>
            </div>

            <hr className='mt-16 w-3/5 m-auto' />

            {/* Description and Review Section */}
            <div className='mt-16'>
                <div className='flex items-center'>
                    <b className='border px-5 py-2'>Description</b>
                    <p className='border px-5 py-2'>Reviews (209)</p>
                </div>
                <div className='border border-collapse flex flex-col gap-5 px-5 py-7 text-sm text-gray-500 text-justify'>
                    <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
                    <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>

                </div>
            </div>

            {/* Related Products Section */}
            <RelatedProduct category={productData.category} subCategory={productData.subCategory} />

        </div >

    ) : <div className='opacity-0'></div>
}

export default Product
