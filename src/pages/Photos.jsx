import React, { useContext } from "react"
import { FavoritesContext } from "../components/FavoritesContext"

const Photos = () => {
  const photos = [
    {
      id: 1,
      photographer: "John Smith",
      description: "Curious Cat",
      url: "https://images.pexels.com/photos/17133050/pexels-photo-17133050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      photographer: "Jane Smith",
      description: "Majestic Mountains",
      url: "https://images.pexels.com/photos/2724664/pexels-photo-2724664.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      id: 3,
      photographer: "David Johnson",
      description: "Gorgeous Green Valley",
      url: "https://images.pexels.com/photos/943592/pexels-photo-943592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 4,
      photographer: "Sarah Davis",
      description: "Iron Window",
      url: "https://images.pexels.com/photos/5518953/pexels-photo-5518953.jpeg"
    },
    {
      id: 6,
      photographer: "Emily Thompson",
      description: "Sunny Beach",
      url: "https://images.pexels.com/photos/17014071/pexels-photo-17014071/free-photo-of-a-group-of-friends-on-the-beach-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 9,
      photographer: "James Taylor",
      description: "City Skyline at Night",
      url: "https://images.pexels.com/photos/3227984/pexels-photo-3227984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 10,
      photographer: "Sophia Martin",
      description: "Black and White Reflections",
      url: "https://images.pexels.com/photos/6011998/pexels-photo-6011998.png"
    },
    {
      id: 13,
      photographer: "Alexander Turner",
      description: "Broken Glass",
      url: "https://images.pexels.com/photos/6387834/pexels-photo-6387834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 14,
      photographer: "Grace Martinez",
      description: "Flowery Field",
      url: "https://images.pexels.com/photos/4485217/pexels-photo-4485217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];
    const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

    return (
      <div className="container pt-5 mt-5">
        <div className="row justify-content-center">
          {photos.map((photo) => (
            <div key={photo.id} className="card m-2 col-6 col-md-4 col-lg-3">
              <div className="row g-0">
                <div className="col-md-20">
                  <img src={photo.url} className="img-thumbnail" alt={photo.description} />
                  <div className="card-body">
                    <h5 className="card-title">Autor: {photo.photographer}</h5>
                    <p className="card-text">{photo.description}</p>
                    <button
                      className={`btn btn-${favorites.find((fav) => fav.id === photo.id) ? "danger" : "outline-dark"}`}
                      onClick={() =>
                        favorites.find((fav) => fav.id === photo.id)
                          ? removeFavorite(photo.id)
                          : addFavorite(photo)
                      }
                    >
                      {favorites.find((fav) => fav.id === photo.id) ? (
                        <i className="bi bi-heart"></i>
                      ) : (
                        <i className="bi bi-heart-fill"></i>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Photos;