import React from 'react';
import '../styles/Title.scss';

function Title({ title, location, tags, host, rating }) {
  return (
    <div className="logement-info">
      <div className="logement-main-info">
        <div className="logement-title">{title}</div>
        <div className="logement-location">{location}</div>
        <div className="logement-tags">
          {tags && tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </div>
      <div className="logement-side-info">
      {host && (
          <div className="logement-host">
            <img src={host.picture} alt={host.name} className="host-picture" />
            <span className="host-name">{host.name}</span>
          </div>
        )}
        {rating !== undefined && (
          <div className="logement-rating">
            {Array.from({ length: 5 }, (_, index) => (
              <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>★</span>
            ))}
          </div>
        )}
        
      </div>
    </div>
  );
}

export default Title;
