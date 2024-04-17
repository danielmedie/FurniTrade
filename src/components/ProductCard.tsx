import React from 'react';

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, description, price }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-red-700">{description}</p>
      <p className="text-gray-800 font-semibold mt-2">{price} kr</p>
      <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
        Lägg i varukorg
      </button>
      <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
        Visa mer
      </button>
    </div>
  );
};

export default ProductCard;
