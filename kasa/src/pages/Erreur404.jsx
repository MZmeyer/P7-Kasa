import React from 'react';
import '../styles/Erreur404.scss';
import Erreur from '../components/Erreur';
import Banner from '../components/Banner';
import Footer from '../components/Footer';


function Erreur404() {
  return (
    <div className="app-container">
      <Banner /> 
      <Erreur /> 
      <Footer />   
    </div>
  );
}

export default Erreur404;
