import React, { useState, useEffect } from 'react';
import styles from './Cards.module.scss';

export const Cards = ({ results }) => {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });
   
  
   
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id) => {
    const index = favorites.indexOf(id);
    if (index === -1) {
      setFavorites([...favorites, id]);
    } else {
      const newFavorites = [...favorites];
      newFavorites.splice(index, 1);
      setFavorites(newFavorites);
    }
  };

  let display;

  if (results) {
    display = results.map((x) => {
      const { id, name, image, location, status } = x;
      const isFavorite = favorites.includes(id);

      return (
        <div className="col-lg-4 col-md-6 col-12 mb-4 position-relative" key={id}>
          <div className={`${styles.cards} d-flex flex-column justify-content-center`}>
  
            <img src={image} alt="" className={`${styles.img}  img-fluid`} />
            <button className={`btn ${isFavorite ? 'btn-warning' : 'btn-outline-warning text-black'} Ubuntu fw-bold`} onClick={() => toggleFavorite(id)}>
                Me gusta 🧡
              </button>
            <div style={{ padding: '10px' }} className="content">
              <div className="fs-4 fw-bold mb-1">{name}</div>
              
              <div className="fs-7 fw-bold text-secondary">Last Location</div>
              <div className="fs-9">{location.name}</div>
              
            </div>
          </div>

          {status === 'Alive' && <div className={`${styles.badge} badge bg-success position-absolute`}>{status}</div>}
          {status === 'Dead' && <div className={`${styles.badge} badge bg-danger position-absolute`}>{status}</div>}
          {status === 'unknown' && <div className={`${styles.badge} badge bg-secondary position-absolute`}>{status}</div>}
        </div>
      );
    });
  } else {
    display = `No Characters Found :/`;
  }

  return <>{display}</>;
};
