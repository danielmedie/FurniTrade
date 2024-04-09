import React from 'react';
import Image from 'next/image';
import ProductCard from './ProductCard';
import Product1 from '../images/runt-soffbord-design_grande.jpg';

const ProductList: React.FC = () => {
  const products = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 19.99, image: Product1, width: 400, height: 300 },
    { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 29.99, image: Product1, width: 600, height: 450 },
    { id: 3, name: 'Product 3', description: 'Description of Product 3', price: 39.99, image: Product1, width: 500, height: 350 }
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
          <Image src={product.image} alt={product.name} width={product.width} height={product.height} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
