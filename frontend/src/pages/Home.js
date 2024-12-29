import React from "react";

import MovieList from "../components/MovieList";

import Slider from "../components/Slider";

function Home(){
    return(
        <div>

            <Slider/>
            <MovieList/>

        </div>
    );
}

export default Home;