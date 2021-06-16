import React from 'react';
// import './ProductCard.css';

const ProductCard = ( {title, price, description, image} ) => {
    return (
        <div className='tc bg-light-green dib br2 ma2 grow shadow-5 w-30 .h-25'>
            <img alt='' src={image} width='200'></img>
            <div>
                <h3>{title}</h3>
                <p>${price}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ProductCard;
