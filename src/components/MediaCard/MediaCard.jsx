import React from 'react';
import './MediaCard.scss';

export const MediaCard = ({ src, alt, key }) => {
  return (
    <div key={key} className="media-card">
      {src.length !== 0 && <img src={src} alt={alt} className="media-card__img"></img>}
    </div>
  );
};
