import React from 'react';
// import './ProductCard.css';

const ProductCard = ( {title, price, description, image} ) => {
    return (
        <div className='tc bg-light-green w-20 ma3 pa4 grow shadow-5'>
            <img alt='' src={image} height='200'></img>
            <h3 className='pa4'>{title}</h3>
            <p>${price}</p>
            {/* <p>{description}</p> */}
            <button>Add To Cart</button>
        </div>
    )
}

export default ProductCard;
