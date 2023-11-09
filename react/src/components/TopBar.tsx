import { ShoppingCart } from "phosphor-react";

function TopBar() {
    return(
           <div className="navbar">
             <div className="links">
                <a href="/">Shop</a>
                <a href="/cart">
                    <ShoppingCart size={30}/>
                </a>
             </div>
           </div>
    );
}

export default TopBar;