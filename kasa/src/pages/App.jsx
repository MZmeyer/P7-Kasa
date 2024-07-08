import React from 'react';
import '../styles/App.scss';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Section from '../components/Section';

function App() {
  return (
    <div className="app-container">
      <Banner />    
      <Section />
      <Card />      
      <Footer />   
    </div>
  );
}

export default App;
