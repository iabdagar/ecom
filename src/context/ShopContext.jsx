import { createContext, useEffect, useState } from "react";
import { products } from '../assests/assets'
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = "$";
    const delivery_Fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItem, setCartItem] = useState({});

    const addToCart = (itemId, size) => {

        if (!size) {
            toast.error("Please select size.")
            return;
        }

        let cartData = structuredClone(cartItem);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }
            else {
                cartData[itemId][size] = 1;
            }
        }
        else {
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }
        setCartItem(cartData);
    }

    const cartCount = () => {
        let count = 0;
        for (let items in cartItem) {
            for (let item in cartItem[items]) {
                try {
                    if (cartItem[items][item]) {
                        count += cartItem[items][item]
                    }

                } catch (error) {

                }
            }
        }
        return count;
    }

    const updateQuantity = (itemId, size, quantity) => {
        let cartData = structuredClone(cartItem);
        cartData[itemId][size] = quantity;
        setCartItem(cartData);
    }

    const value = {
        products, currency, delivery_Fee, search, setSearch, showSearch, setShowSearch, cartItem, setCartItem, addToCart, cartCount, updateQuantity
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;