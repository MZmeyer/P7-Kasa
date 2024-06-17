import React from 'react';
import './App.css';
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
      <p>En construction</p> 
      <Footer />   
    </div>
  );
}

export default App;
