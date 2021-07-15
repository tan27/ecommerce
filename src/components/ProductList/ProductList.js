import React from 'react';
import ProductCard from '../ProductCard/ProductCard.js';

function ProductList({items}) {
    return (
      <div className='flex flex-wrap justify-center static'> {
        items.map((item) => {
          return (
            <ProductCard
              key={item.id}
              id={item.id}
              items={item}
              image={item.image}
              title={item.title}
              price={item.price}
              description={item.description}
          />
          );
          })
        }
      </div>
    );
}

export default ProductList;
