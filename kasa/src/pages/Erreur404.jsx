import React from 'react';
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
