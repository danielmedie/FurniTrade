import React from 'react';
import Image from 'next/image';
import ProductCard from './ProductCard';

const ProductList: React.FC = () => {
  const products = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 19.99, image: `/images/runt-soffbord-design_grande.jpg` },
    { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 29.99, image: '/images/fc3920fa248cec8e63f7a9897c0f3bab.jpg' },
    { id: 3, name: 'Product 3', description: 'Description of Product 3', price: 39.99, image: '/images/c440b062dc7461b5d2b2eb7b079e82b4.jpg' }
  ];

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id}>
          <ProductCard
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
          />
          <Image src={product.image} alt={product.name} width={400} height={300} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
