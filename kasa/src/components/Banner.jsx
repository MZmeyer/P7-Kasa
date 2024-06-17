import React from 'react';
import { Link } from 'react-router-dom';
import "./Banner.css";

function Banner() {
    return (
        <header className="navbar">
            <div className="navbar__logo">
                <img src="logo.png" alt="Website logo"/>
            </div>
            <ul className="navbar__menu">
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/Apropos">A propos</Link></li>
            </ul>
        </header>
    );
}

export default Banner;
