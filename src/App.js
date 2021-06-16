import React, {useState, useEffect} from 'react';
import ProductList from './components/ProductList/ProductList';
import Navigation from './components/Navigation/Navigation';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

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

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
      <Navigation />
      <ProductList items={items} />
      </>
    );
  }
}

export default App;