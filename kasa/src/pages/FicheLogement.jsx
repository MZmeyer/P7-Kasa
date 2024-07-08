import React from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Slideshow from '../components/Slideshow';
import CollapseFL from '../components/CollapseFL';
import Title from '../components/Title';
import '../styles/Slideshow.scss'
import '../styles/App.scss';
import '../styles/Banner.scss';
import '../styles/Title.scss';

function FicheLogement() {
  return (
    <div className="app-container">
      <Banner/>
      <Slideshow/>
      <Title/>
      <CollapseFL/>
      <Footer/>
    </div>
  );
}

export default FicheLogement;