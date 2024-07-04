import React from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import SectionApropos from '../components/SectionApropos';
import Dropdown from '../components/Dropdown';
import '../styles/App.scss';
import '../styles/SectionApropos.scss'

function aPropos() {
  return (
    <div className="app-container">
      <Banner />
      <SectionApropos />
      <Dropdown />
      <Footer />      
    </div>
  );
}

export default aPropos;