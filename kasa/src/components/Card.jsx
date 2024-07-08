import React, { useState, useEffect } from 'react';
import '../styles/Gallery.scss';
import { Link, Navigate } from 'react-router-dom';

function Gallery() {
  const [logements, setLogements] = useState([]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetch('/logements.json')
      .then(res => res.json())
      .then(data => setLogements(data))
      .catch(error => {
        console.error('Error fetching data:', error);
        setRedirect(true); 
      });
  }, []);

  if (redirect) {
    return <Navigate to="/error" />;
  }

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
