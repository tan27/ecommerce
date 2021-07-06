import React from 'react'
import CartMenu from '../Cart/CartMenu'
import { useCart } from "react-use-cart";

function Nav ( {searchChange, onRouteChange} ) {

    const { emptyCart } = useCart();
    const onEmptyCart = async () => {
        emptyCart();
    }

    return (
        <div className='bg-light-blue flex justify-end'>
            <input onChange={searchChange} placeholder='search'></input>
            <CartMenu />
            <ul className='flex list pa2'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <button onClick={async () => { 
                    await onEmptyCart();
                    onRouteChange('signout')
                    }}>Signout</button>
            </ul>
        </div>
    )
}

export default Nav;
