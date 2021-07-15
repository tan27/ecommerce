import React from 'react'
import { useCart } from "react-use-cart";
import './Cart.css';

function Cart() {
    const {
        isEmpty,
        items,
        updateItemQuantity,
        removeItem,
        totalItems,
        cartTotal
      } = useCart();
      
      if (isEmpty) return <p className='mt5 tc'>Your cart is empty</p>;
    
      return (
        <>
          <h3 className='mt5'>Cart: {totalItems} </h3>
    
          <ul className='list pa2 ma2'>
            {items.map((item) => (
              <li key={item.id}>
               {item.quantity} x {item.title} <br></br>

                <button className="updt"
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}  
                >
                  -
                </button>
                <button className="updt"
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button className="updt"
                onClick={() => removeItem(item.id)}>&times;</button>
              </li>
            ))}
          </ul>

          <h3>Total: ${ cartTotal.toFixed(2) }</h3>

          <button className='checkout'>Checkout</button>
          
        </>
      );
    }
    
  export default Cart;