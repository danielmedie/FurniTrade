import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  // image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, description, price, }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold">{name}</h2>
      <div className="relative w-full h-48">
        {/* <Image alt={name} layout="fill" objectFit="cover" className="rounded-md" /> */}
      </div>
      <p className="text-red-700">{description}</p>
      <p className="text-gray-800 font-semibold mt-2">${price}</p>
      <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
