import React from 'react'
import CartMenu from '../Cart/CartMenu'

function Nav( {searchChange} ) {
    return (
        <div className='bg-light-blue flex justify-end'>
            <input onChange={searchChange} placeholder='search'></input>
            <CartMenu />
            <ul className='flex list pa2'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <button>Signout</button>
            </ul>
        </div>
    )
}

export default Nav;
