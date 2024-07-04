import React from 'react';
import '../styles/App.scss';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Section from '../components/Section';

function App() {
  return (
    <div className="app-container">
      <Banner />    
      <Section />
      <Gallery />      
      <Footer />   
    </div>
  );
}

export default App;
