import React from 'react'
import { useCart } from "react-use-cart";

function Cart() {
    const {
        isEmpty,
        items,
        updateItemQuantity,
        removeItem,
        totalItems,
        cartTotal
      } = useCart();
    
      if (isEmpty) return <p>Your cart is empty</p>;
    
      return (
        <>
          <h1 className='mt6 ml4'>Cart: {totalItems} </h1>
    
          <ul className='list'>
            {items.map((item) => (
              <li key={item.id}>
               {item.quantity} x {item.title} <br></br>

                <button className='ml2'
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}  
                >
                  -
                </button>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button onClick={() => removeItem(item.id)}>&times;</button>
              </li>
            ))}
          </ul>

          <h1 className='ml4'>Total: ${ cartTotal.toFixed(2) }</h1>
        </>
      );
    }
    
  export default Cart;