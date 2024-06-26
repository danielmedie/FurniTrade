import React from 'react';
import ProductList from '../components/ProductList';
import { NavLinks } from '@/components/NavLinks';
import { Footer } from '@/components/Footer';

const Products: React.FC = () => {
  return (
    <div>
      <NavLinks></NavLinks>
      <ProductList />
      <Footer />
    </div>
  );
};

export default Products;
