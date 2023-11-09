import react from "react";
import { PRODUCT } from '../../product';
import { Product } from  './product';
import './shop.css';


export const Shop = () => {
    return (
    <div className="shop">
        <div className="shopTitle">
            <h1>n-kart</h1>
        </div>

        <div className="products">
            { PRODUCT.map((product) => (<Product data={product}/>)) }
        </div>
    </div>
    );
}
