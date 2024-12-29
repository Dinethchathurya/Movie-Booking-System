import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

// Updated movie data
const initialMovies = [
  {
    id: 1,
    title: "Gladiater 2",
    genre: "Spoactionrt",
    DateStart: "2024-12-01",
    DateEnd: "2024-12-10",
    showTime: "10:30 AM",
    imdb: "https://www.imdb.com/title/tt9218128/",
    price: "$100",
    coverImage: "https://via.placeholder.com/150",
    posterImage: "https://via.placeholder.com/150",
    imdbUrl: "https://imdb.com/football-match",
    status: "Now Screening",
  },
];

function EditMovie() {
  const [movies, setMovies] = useState(initialMovies);
  const [filter, setFilter] = useState("");

  // Filter movies based on title, genre, or location
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filter.toLowerCase()) ||
      movie.genre.toLowerCase().includes(filter.toLowerCase()) ||
      movie.location?.toLowerCase().includes(filter.toLowerCase()) // Handles movies without a location property
  );

  return (
    <div className="overflow-x-auto">
      <div className="text-xl pb-4 text-center text-black">
        Now Showing Movies
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        {/* Filter Input */}
        <div>
          <input
            type="text"
            placeholder="Search by Title, Genre or Location"
            className="input input-bordered border-gray-400 m-2 w-full max-w-xs text-sm"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </div>

      <table className="table table-xs sm:table-md text-black">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Title</th>
            <th>Status</th>
            <th>Release Date Range</th>
            <th>Show Time Range</th>
            <th>Price</th>
            <th>IMDb URL</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredMovies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.id}</td>
              <td>
                <img
                  src={movie.coverImage}
                  alt={movie.title}
                  className="w-16 h-16"
                />
              </td>
              <td>{movie.title}</td>
              <td>{movie.status}</td>
              <td>
                {movie.DateStart} - {movie.DateEnd}
              </td>
              <td>{movie.showTime}</td>
              <td>{movie.price}</td>
              <td>
                <a href={movie.imdb} target="_blank" rel="noopener noreferrer">
                  {movie.imdb}
                </a>
              </td>
              <td>
                <button onClick={""} className="btn btn-sm btn-primary">
                  <FaEdit />
                </button>
              </td>
              <td>
                <button onClick={""} className="btn btn-sm btn-danger">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Title</th>
            <th>Status</th>
            <th>Release Date Range</th>
            <th>Show Time Range</th>
            <th>Price</th>
            <th>IMDb URL</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default EditMovie;
