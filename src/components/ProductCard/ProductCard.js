import React from 'react';
import './ProductCard.css';
import { useCart } from "react-use-cart";

const ProductCard = ( {items, title, price, description, image} ) => {
    const { addItem } = useCart();

    return (
        <div className='card tc ma3 mt4 pa4 grow shadow-5 '>
            <img alt='' src={image} height='200'></img>
            <button className='ma4' onClick={() => addItem(items)}>Add to cart</button>
            <p>${price}</p>
            <h3 className='pa4'>{title}</h3>
            {/* <p>{description}</p> */}
        </div>
    )
}

export default ProductCard;
