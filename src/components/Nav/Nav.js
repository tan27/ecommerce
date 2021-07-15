import React from 'react';
import CartMenu from '../Cart/CartMenu';
import { useCart } from "react-use-cart";
import './Nav.css';
import logo from '../../default.png';
import logo1 from '../../default1.png';

function Nav ( {searchChange, onRouteChange} ) {

    const { emptyCart } = useCart();
    const onEmptyCart = async () => {
        emptyCart();
    }

    return (
        <div className='navbar flex'> 
        <img id='logo' src={logo} alt='logo'/>
        <img id='logo1' src={logo1} alt='logo'/>
            <div className='flex rightmenu'>
                <input className='search' onChange={searchChange} placeholder='Search'></input>
                <CartMenu />
                    <button className='signout' onClick={async () => { 
                        await onEmptyCart();
                        onRouteChange('signout');
                        }}>Signout</button>
            </div>
        </div>
    )
}

export default Nav;
