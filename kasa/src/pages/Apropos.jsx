import React from 'react';
import Navbar from '../components/Banner';
import Footer from '../components/Footer';
import Section from '../components/SectionApropos';
import Dropdown from '../components/Dropdown';

function aPropos() {
  return (
    <div className="app-container">
      <Navbar />
      <Section />
      <Dropdown />
      <Footer />      
    </div>
  );
}

export default aPropos;