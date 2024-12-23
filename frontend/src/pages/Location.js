import React from "react";
import Footer from "../components/Footer";
import LocationList from "../components/LocationList";
import MovieList from "../components/MovieList";
import Navbar from "../components/Navbar";

const Location = () => {
    return(
        <div>
            <Navbar/>
            <LocationList/>
            <MovieList/>
            <Footer/>
        </div>
    );
}

export default Location;