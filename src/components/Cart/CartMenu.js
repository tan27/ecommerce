import React, { useState } from 'react';
import './Cart.css'
import Cart from './Cart';
// import { useCart } from "react-use-cart";

function CartMenu() {
    const [openCart, setOpenCart] = useState(false);

    const handleToggle = () => {
        setOpenCart(prev => !prev)
      }

    return (
        <div className='cart'>
            <button className='cartb' onClick={handleToggle}>{openCart ? "Keep Shopping" : "Cart"}</button>
                <div className={`menuNav ${openCart ? " showMenu" : ""}`}>
                    <Cart /> 
                </div>
        </div>
    )
}

export default CartMenu;
