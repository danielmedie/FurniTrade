import React from 'react';

const ProductDetail: React.FC = () => {
  return (
    <div className="product-detail">
      <h2>Produkt namn</h2>
      <p>Produktbeskrivning</p>
      <p>Pris: 99kr</p>
      <button>Lägg till</button>
    </div>
  );
};

export default ProductDetail;
