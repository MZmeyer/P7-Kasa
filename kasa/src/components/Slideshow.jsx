import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Slideshow.scss';

function Slideshow() {
  const { logementId } = useParams();
  const [pictures, setPictures] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('/logements.json')
      .then(response => response.json())
      .then(data => {        
        const logement = data.find(item => item.id === logementId);
        if (logement) {
          setPictures(logement.pictures); 
        }
      })
      .catch(error => console.error('Error loading JSON data:', error));
  }, [logementId]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  if (pictures.length === 0) return null;

  const showControls = pictures.length > 1; 

  return (
    <div className="slideshow">
      <div className="slideshow-items">
        {pictures.map((picture, index) => (
          <div
            className={`slideshow-item ${index === currentIndex ? 'active' : ''}`}
            key={index}
          >
            <img src={picture} alt={`Slide ${index}`} />
            {showControls && (
              <div className="picture-number">{`${index + 1}/${pictures.length}`}</div>
            )}
          </div>
        ))}
      </div>
      {showControls && (
        <>
          <button className="prev" onClick={prevSlide}>❮</button>
          <button className="next" onClick={nextSlide}>❯</button>
        </>
      )}
    </div>
  );
}

export default Slideshow;
