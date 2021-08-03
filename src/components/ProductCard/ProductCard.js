import React, {useState} from 'react';
import './ProductCard.css';
import { useCart } from "react-use-cart";

const ProductCard = ( {items, title, price, description, image} ) => {
    const [text, setText] = useState('Add to Cart')
    const { addItem } = useCart();

    const handleClick = () => {
        setText('Added');
        setTimeout (() => {
            setText('Add to Cart')
        }, 5000);
    };

    return (
        <div className='card tc ma3 mt4 pa4 grow shadow-5 '>
            <img alt='' src={image} height='160'></img>
            <button className='atc ma4' onClick={() => {addItem(items); handleClick()}}>{text}</button>
            <p>${price}</p>
            <h3 className='pa4'>{title}</h3>
            {/* <p>{description}</p> */}
        </div>
    )
}

export default ProductCard;
