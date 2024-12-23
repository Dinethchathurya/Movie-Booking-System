import React, { useState } from "react";
import "./style/Upcoming.css";

const movies = [
  {
    id: 1,
    title: "SONIC THE HEDGEHOG 3",
    image: "https://theatersollution.s3.amazonaws.com/6d8bf40e-8697-4c08-a339-bef2d6597f91.jpg",
    status: "UPCOMING",
    trailerUrl: "https://www.youtube.com/watch?v=5gYVdJtXjFg",
  },
  {
    id: 2,
    title: "THE ROYAL BALLET - THE NUTCRACKER",
    image: "https://theatersollution.s3.amazonaws.com/d3b3f57b-4ecf-432a-9f8f-5881ed680d8c.jpg", 
    status: "UPCOMING",
    trailerUrl: "https://www.youtube.com/watch?v=1L_Hxu1rPY0", 
  },
  {
    id: 3,
    title: "LORD OF THE RINGS: THE WAR OF ROHIRRIM",
    image: "https://theatersollution.s3.amazonaws.com/8e7ef57e-f3e1-424c-b83f-967d97ff1e0b.jpg", 
    status: "UPCOMING",
    trailerUrl: "https://www.youtube.com/watch?v=QgwcPU9kpyY", 
  },
  {
    id: 4,
    title: "RED ONE",
    image: "https://theatersollution.s3.amazonaws.com/f74eb2dd-7ce5-42b6-ab59-e5120ebe1f73.jpg", 
    status: "UPCOMING",
    trailerUrl: "https://www.youtube.com/watch?v=1jl4bbPz4Kw", 
  },
];

function UpcomingMovies() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");

  const handleWatchTrailerClick = (trailerUrl) => {
    setTrailerUrl(trailerUrl);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTrailerUrl(""); 
  };

  const handleMoreInfoClick = (movieId) => {
    window.location.href = `/movies/${movieId}`;
  };

  return (
    <div className="text-center p-5 bg-white">
      <h2 className="text-3xl font-semibold uppercase tracking-wide mb-7 mt-2 text-black">Upcoming Movies</h2>
      <div className="movie-grid">
        {movies.map((movie, index) => (
          <div className="movie-card" key={index}>
            <div className="movie-image-container">
              <img src={movie.image} alt={movie.title} className="movie-poster" />
              <div className="movie-buttons">
                <button className="watch-trailer" onClick={() => handleWatchTrailerClick(movie.trailerUrl)}>
                  Watch Trailer
                </button>
                <button className="more-info" onClick={() => handleMoreInfoClick(movie.id)}>
                  More Info
                </button>
              </div>
            </div>
            <h3 className="movie-title">{movie.title}</h3>
            <p className="movie-status">{movie.status}</p>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="ss" onClick={handleCloseModal}>X</button>
            <iframe
              width="800"
              height="450"
              src={`https://www.youtube.com/embed/${trailerUrl.split("v=")[1]}?autoplay=1`}
              title="Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default UpcomingMovies;
