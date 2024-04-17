import React from 'react';
import ProductList from '../components/ProductList';
import { NavLinks } from '@/components/NavLinks';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

const Products: React.FC = () => {
  return (
    <div>
        <Header />
            <h1>Varukorg - sida</h1>
         <Footer />
    </div>
  );
};

export default Products;
