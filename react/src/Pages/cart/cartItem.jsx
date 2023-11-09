import React from "react";

export const CartItem = (props) => {

    const { id, productName, price, ProductImage } = props.data;
    return(
        <div className="cartItem">
           <img src={ProductImage}/>

           <div className="description">
            
               <p>
                   <b>{productName}</b>
               </p>

               <p>
                    ${price}
               </p>

           </div>
        </div>
    );
};