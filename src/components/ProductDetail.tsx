import React from 'react';

const ProductDetail: React.FC = () => {
  return (
    <div className="product-detail">
      <h2>Product Name</h2>
      <p>Description of the product goes here.</p>
      <p>Price: $99.99</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
