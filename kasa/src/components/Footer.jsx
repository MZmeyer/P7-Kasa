import React from 'react';
import './Footer.css';
import logo from '../LogoFoot.png';

function Footer() {
  return (
    <footer className="footer">
        <img src={logo} alt="Logo" className="footer-logo" />
      <p>&copy;  2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;