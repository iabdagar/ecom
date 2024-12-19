import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assests/assets';

function Cart() {

    const { products, currency, cartItem, updateQuantity } = useContext(ShopContext);

    const [cartData, setCartData] = useState([]);

    useEffect(() => {

        const tempData = [];

        for (const items in cartItem) {

            for (const item in cartItem[items]) {
                if (cartItem[items][item]) {
                    tempData.push({
                        _id: items,
                        size: item,
                        quantity: cartItem[items][item]
                    })
                }
            }
        }

        setCartData(tempData);

    }, [cartItem]);

    return (
        <div className='border-t-2 pt-8'>
            <div className='text-2xl mb-5'>
                <Title text1={'YOUR'} text2={'CART'} />
            </div>
            <div className='my-10'>
                {
                    cartData.map((item, index) => {
                        const produtData = products.find((product) => product._id === item._id)
                        return (
                            <div key={index} className='py-4 borber-t border-b text-gray-500 grid grid-cols-[4fr_0.5fr_0.5fr]  items-center gap-4 sm:grid-cols-[4fr_2.5fr_0.5fr]'>
                                <div className='flex items-start gap-4'>
                                    <img src={produtData.image[0]} className='w-16 sm:w-20' />
                                    <div>
                                        <p className='text-sm sm:text-sm font-medium'>{produtData.name}</p>
                                        <div className='flex items-center mt-2 gap-3'>
                                            <p>{currency}{produtData.price}</p>
                                            <p className='px-2 border bg-gray-100 sm:px-3 rounded-sm'>{item.size}</p>
                                        </div>
                                    </div>

                                </div>
                                <input onChange={(e) => { e.target.value === '' || e.target.value === 0 ? null : updateQuantity(item._id, item.size, Number(e.target.value)) }} type="number" min={1} defaultValue={item.quantity} className='border max-w-16 sm:max-w-20 px-2 rounded-sm' />
                                <img onClick={() => { updateQuantity(item._id, item.size, 0) }} src={assets.bin_icon} className='w-4 cursor-pointer' />
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div>
    )
}

export default Cart
