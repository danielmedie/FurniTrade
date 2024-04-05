import React from 'react';
import ProductCard from './ProductCard';

const ProductList: React.FC = () => {
  const products = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 19.99, image: '/src/images/runt-soffbord-design_grande.jpg' },
    { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 29.99, image: '/images/fc3920fa248cec8e63f7a9897c0f3bab.jpg' },
    { id: 3, name: 'Product 3', description: 'Description of Product 3', price: 39.99, image: '/images/c440b062dc7461b5d2b2eb7b079e82b4.jpg' }
  ];

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductList;
