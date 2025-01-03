import React from "react";
import MovieList from "../components/MovieList";
import UpcomingMovies from "../components/UpcomingList";

const Movie = () => {
    return (
        <div>

            <MovieList/>
            <UpcomingMovies/>

        </div>
    );
}

export default Movie;