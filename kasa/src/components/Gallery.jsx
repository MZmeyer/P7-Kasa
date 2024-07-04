import React, { useState, useEffect } from 'react';
import '../styles/Gallery.scss';
import { Link } from 'react-router-dom';

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
          <Link key={logement.id} to={`/FicheLogement/${logement.id}`} className='grid-item'>
            <img src={logement.cover} alt={logement.title} />
            <p>{logement.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
