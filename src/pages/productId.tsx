import React from 'react';
import Link from 'next/link';

const ProductCard: React.FC<{ id: string }> = ({ id }) => {
  return (
    <div className="border p-4 rounded-md shadow-md mb-4">
      <h2 className="text-xl font-semibold mb-2">Product {id}</h2>
      <p>Description of product {id}</p>
      <Link href={`/product/${id}`}>
        <a className="text-blue-500 hover:text-blue-600">View Details</a>
      </Link>
    </div>
  );
};

export default ProductCard;
