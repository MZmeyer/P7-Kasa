import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Title from './Title';
import '../styles/DropdownFL.scss';

function DropdownFL() {
  const { logementId } = useParams();
  const [logement, setLogement] = useState(null);
  const [openDropdowns, setOpenDropdowns] = useState([false, false]);

  useEffect(() => {
    fetch('/logements.json')
      .then(res => res.json())
      .then(data => {
        const logementData = data.find(item => item.id === logementId);
        setLogement(logementData);
      })
      .catch(error => console.error('Error loading JSON data:', error));
  }, [logementId]);

  const toggleDropdown = (index) => {
    setOpenDropdowns(prevState => {
      const newOpenDropdowns = prevState.map((isOpen, i) => i === index ? !isOpen : isOpen);
      return newOpenDropdowns;
    });
  };

  if (!logement) return <div>Loading...</div>;

  return (
    <div className="logement-details">
      <Title 
        title={logement.title}
        location={logement.location}
        tags={logement.tags}
        host={logement.host}
        rating={logement.rating}
      />
      <div className="dropdown-container-fl">
        <div className="dropdown-fl">
          <div className="dropdown-header-fl" onClick={() => toggleDropdown(0)}>
            Description
          </div>
          <div className={`dropdown-content-fl ${openDropdowns[0] ? 'show' : ''}`}>
            <p>{logement.description}</p>
          </div>
        </div>
        <div className="dropdown-fl">
          <div className="dropdown-header-fl" onClick={() => toggleDropdown(1)}>
            Équipements
          </div>
          <div className={`dropdown-content-fl ${openDropdowns[1] ? 'show' : ''}`}>
            <ul>
              {logement.equipments && logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropdownFL;
