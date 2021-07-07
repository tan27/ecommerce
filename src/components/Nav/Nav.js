import React from 'react';
import CartMenu from '../Cart/CartMenu';
import { useCart } from "react-use-cart";
import './Nav.css';
import logo from './default.png';


function Nav ( {searchChange, onRouteChange, initialState} ) {

    const { emptyCart } = useCart();
    const onEmptyCart = async () => {
        emptyCart();
    }

    return (
        <div className='navbar flex'> 
        <img id='logo' src={logo} alt='logo'/>
            <div className='flex pr6'>
                <input onChange={searchChange} placeholder='  Search'></input>
                <CartMenu />
                    <button onClick={async () => { 
                        await onEmptyCart();
                        onRouteChange('signout');
                        }}>Signout</button>
            </div>
        </div>
    )
}

export default Nav;
