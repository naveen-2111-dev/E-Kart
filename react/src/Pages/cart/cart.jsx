import React, { useContext } from "react";
import { PRODUCT } from "../../product";
import { ShopContext } from "../../context/shopContext";
import { CartItem } from './cartItem.jsx';
import "./cart.css";

export const Cart = () => {

    const { cartItems } = useContext(ShopContext);

    return ( 
    <div className="cart">
        <div className="font">
            <h1>Your cart Items</h1>
        </div>

        <div className="cartItems">
            {PRODUCT.map((PRODUCT) => {
                if (cartItems[PRODUCT.id] > 0) {
                    return <CartItem data={Product} />
                }
            })}
        </div>
    </div> 
    );
}