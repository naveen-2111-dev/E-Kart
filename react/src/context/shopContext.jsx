import React from "react";
import { createContext } from "react";
import { useState } from "react";
import { PRODUCT } from "../product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
     for (let i=1;i< PRODUCT.length; i++) {
        cart[i] = 0;
     }
     return cart;
}

export const ShopContextProvider = (props) => {
    
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (ItemId) => {
        setCartItems((prev) => ({...prev, [ItemId]: prev [ItemId]+1}))
    }

    const removeFromCart = (ItemId) => {
        setCartItems((prev) => ({...prev, [ItemId]: prev [ItemId]-1}))
    }

    const contextValue = { cartItems, addToCart, removeFromCart };

    console.log(cartItems);

    return( 
        <ShopContext.Provider value={contextValue}> {props.children} </ShopContext.Provider>
    );
}