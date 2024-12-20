import React, { useState } from "react";
import "../style/MovieList.css";

const movies = [
  {
    id: 1,
    title: "THE WILD ROBOT",
    image: "https://theatersollution.s3.amazonaws.com/5b241cf1-fafb-498e-b8bc-aaf97bf8ebe1.jpg",
    status: "NOW SCREENING",
    trailerUrl: "https://www.youtube.com/watch?v=5gYVdJtXjFg",
  },
  {
    id: 2,
    title: "SMILE 2",
    image: "https://theatersollution.s3.amazonaws.com/6778eba5-c390-4d72-b578-201e8ea46224.jpg", 
    status: "NOW SCREENING",
    trailerUrl: "https://www.youtube.com/watch?v=1L_Hxu1rPY0", 
  },
  {
    id: 3,
    title: "BHOOL BHULAIYAA 3",
    image: "https://theatersollution.s3.amazonaws.com/07e4aab1-7500-4fb0-9754-83d567e3ebdd.jpg", 
    status: "NOW SCREENING",
    trailerUrl: "https://www.youtube.com/watch?v=QgwcPU9kpyY", 
  },
  {
    id: 4,
    title: "SINGHAM-AGAIN",
    image: "https://theatersollution.s3.amazonaws.com/661574ee-c2df-4ea1-9615-41e3bedd5aca.jpg", 
    status: "NOW SCREENING",
    trailerUrl: "https://www.youtube.com/watch?v=1jl4bbPz4Kw", 
  },
];

function MovieList() {
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

  const handleBuyTicketClick = (movieId) => {
    window.location.href = `/buyticket/${movieId}`;
  };

  const handleMoreInfoClick = (movieId) => {
    window.location.href = `/movies/${movieId}`;
  };

  return (
    <div className="text-center p-5">
      <h2 className="text-3xl font-semibold uppercase tracking-wide mb-7 mt-2">Now Showing</h2>
      <div className="movie-grid">
        {movies.map((movie, index) => (
          <div className="movie-card" key={index}>
            <div className="movie-image-container">
              <img src={movie.image} alt={movie.title} className="movie-poster" />
              <div className="movie-buttons">
                <button className="buy-ticket" onClick={() => handleBuyTicketClick(movie.id)}>
                  Buy Tickets
                </button>
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

export default MovieList;
