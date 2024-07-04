import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Erreur.scss';


function Erreur() {
  return (
    <div className="erreur">        
      <p>404</p>
      <h1>Oups! La page que vous demandez n'existe pas.</h1>   
    
    <li><Link to="/">Retourner sur la page d’accueil</Link></li>
    </div>
  );
}

export default Erreur;