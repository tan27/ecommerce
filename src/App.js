import React, {useState, useEffect} from 'react';
import ProductList from './components/ProductList/ProductList';
import { CartProvider } from "react-use-cart";
import Cart from './components/Cart/Cart';
import CartMenu from './components/Cart/CartMenu';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then(res => res.json())
      .then(
        (items) => {
          setIsLoaded(true);
          setItems(items);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
      <CartProvider>
        <ProductList items={items} />
          <CartMenu>
            <Cart />
          </CartMenu>
      </CartProvider>
      </>
    );
  }
}

export default App;