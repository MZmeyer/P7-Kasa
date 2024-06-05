import React from 'react';
import './App.css';
import './components/Navbar.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <div className="section_1">        
        <h2>Section 1</h2>
        <p>en Construction</p>
      </div>
      <Navbar />
      <div className='gallery'>
        
      </div>
      <p>En construction</p> 
      <Footer />   
    </div>
  );
}

export default App;
