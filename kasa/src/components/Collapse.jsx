import React, { useState } from 'react';
import '../styles/Dropdown.scss';

function Dropdown() {
  const [openDropdowns, setOpenDropdowns] = useState([false, false, false, false]);

  const dropdownTexts = [
    "Fiabilité",
    "Respect",
    "Service",
    "Sécurité"
  ];

  const dropdownContents = [
    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
  ];

  const toggleDropdown = (i) => {
    const newOpenDropdowns = [...openDropdowns];
    newOpenDropdowns[i] = !newOpenDropdowns[i];
    setOpenDropdowns(newOpenDropdowns);
  };

  return (
    <div className="dropdown-container">
      {dropdownTexts.map((text, i) => (
        <div key={i} className="dropdown">
          <div 
            className={`dropdown-header ${openDropdowns[i] ? 'active' : ''}`} 
            onClick={() => toggleDropdown(i)}
          >
            {text}
          </div>
          <div className={`dropdown-content ${openDropdowns[i] ? 'show' : ''}`}>
            {dropdownContents[i]}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dropdown;
