import React from 'react'
import CartMenu from '../Cart/CartMenu'

function Nav( {searchChange} ) {
    return (
        <div className='bg-light-blue'>
            <input onChange={searchChange} placeholder='search'></input>
            <button>Signout</button>
            <CartMenu />
        </div>
    )
}

export default Nav;
