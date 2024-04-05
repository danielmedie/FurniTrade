import React from 'react';
import { Footer } from '@/src/components/Footer';
import { Header } from '../components/Header';
import companyImage from "@/src/images/fc3920fa248cec8e63f7a9897c0f3bab.jpg";
import ProductList from "@/src/components/ProductList"

import Image from "next/image";


const Home: React.FC = () => {
  return (
    <div>
      <Header />

      <div className="container mx-auto py-8">
        <div className="max-w-4xl mx-auto mb-8">
          {/* Använd next/image för att rendera bilden */}
          <Image src={companyImage} alt="Company" className="w-full rounded-lg" />
        </div>

        <h2 className="text-3xl font-semibold mb-4">Featured Products</h2>
        <ProductList></ProductList>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
