import React, { useContext } from 'react';
import { FavoritesContext } from '../components/FavoritesContext';

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className='mt-5'>
      <div className="container pt-5 mt-5 row justify-content-center">
        {favorites.length > 0 ? (
          favorites.map((photo) => (
            <div key={photo.id} className="card m-2 col-3">
              <div className="row g-0 justify-content-center">
                <div className="col-md-20">
                  <img src={photo.url} className="img-thumbnail" alt={photo.description} style={{height:"400px", width:"300px"}}/>
                  <div className="card-body">
                    <h5 className="card-title">Autor: {photo.photographer}</h5>
                    <p className="card-text">{photo.description}</p>
                    <i className="bi bi-heart-fill" style={{ fontSize: '24px', color: 'red' }}></i>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">
            <h1>No hay fotos favoritas</h1>
            <i className="bi bi-heart-fill" style={{ fontSize: '48px', color: 'red' }}></i>
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;