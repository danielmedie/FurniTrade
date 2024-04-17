import React from 'react';
import Image from 'next/image';
import ProductCard from './ProductCard';
import Product1 from '../images/runt-soffbord-design_grande.jpg';

const ProductList: React.FC = () => {
  const products = [
    { id: 1, name: 'Produkt 1', description: 'Beskrivning av Produkt 1', price: 199, image: Product1, width: 400, height: 350 },
    { id: 2, name: 'Produkt 2', description: 'Beskrivning av Product 2', price: 299, image: Product1, width: 400, height: 350 },
    { id: 3, name: 'Produkt 3', description: 'Beskrivning av Product 3', price: 399, image: Product1, width: 400, height: 350 }
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
