import React, { useState, useEffect } from 'react';
import './Gallery.css';

function Gallery() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch('/logements.json')
      .then(res => res.json())
      .then(data => setLogements(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='gallery'>
      <div className='grid'>
        {logements.map((logement) => (
          <div key={logement.id} className='grid-item'>
            <img src={logement.cover} alt={logement.title} />
            <p>{logement.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
