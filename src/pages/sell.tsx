import React from 'react';
import SellForm from '../components/SellForm';
import { Footer } from '@/components/Footer';
import { NavLinks } from '@/components/NavLinks';

const SellPage: React.FC = () => {
  return (
    <div>
      <NavLinks/>

      <SellForm />
      <Footer />

    </div>
  );
};

export default SellPage;
