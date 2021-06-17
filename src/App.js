import React, {useState, useEffect} from 'react';
import ProductList from './components/ProductList/ProductList';
import { CartProvider } from "react-use-cart";
import Cart from './components/Cart/Cart';
import CartMenu from './components/Cart/CartMenu';
import Nav from './components/Nav/Nav';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
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

  const searchChange = (e) => {
    setSearchField(e.target.value)
  }

  const itemsFilter = items.filter(item => {
    return item.title.toLowerCase().includes(searchField.toLowerCase());
  })

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
      <CartProvider>
      <Nav searchChange={searchChange}>
        <CartMenu>
            <Cart />
        </CartMenu>
      </Nav>
          <ProductList items={itemsFilter} />
      </CartProvider>
      </>
    );
  }
}

export default App;