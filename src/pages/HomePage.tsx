import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Menu from '../components/Menu';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Menu />
      <Contact />
      <Footer />
    </main>
  );
};

export default HomePage;