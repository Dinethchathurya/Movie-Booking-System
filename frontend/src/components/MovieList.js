import React, { useState } from "react";
import "./style/MovieList.css";

const movies = [
  {
    id: 1,
    title: "MUFASA: THE LION KING",
    image: "https://theatersollution.s3.amazonaws.com/629ab5d3-7183-43a0-b442-dac4c033ef0d.jpg",
    status: "NOW SCREENING",
    trailerUrl: "https://www.youtube.com/watch?v=5gYVdJtXjFg",
  },
  {
    id: 2,
    title: "GLADIATOR 2",
    image: "https://theatersollution.s3.amazonaws.com/d261d7fe-1888-4769-ad7b-5525ef5b06fd.jpg", 
    status: "NOW SCREENING",
    trailerUrl: "https://www.youtube.com/watch?v=1jl4bbPz4Kw", 
  },
  {
    id: 3,
    title: "MOANA 2",
    image: "https://theatersollution.s3.amazonaws.com/79bc6a9f-8df9-446b-ba8d-def25032e65b.jpg", 
    status: "NOW SCREENING",
    trailerUrl: "https://www.youtube.com/watch?v=1L_Hxu1rPY0", 
  },
  {
    id: 4,
    title: "WICKED",
    image: "https://theatersollution.s3.amazonaws.com/71477643-7c80-4ab4-8d27-891f8549798b.jpg", 
    status: "NOW SCREENING",
    trailerUrl: "https://www.youtube.com/watch?v=QgwcPU9kpyY", 
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
            <h3 className="movie-title text-white">{movie.title}</h3>
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
