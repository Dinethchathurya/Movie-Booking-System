import React from "react";
import Footer from "../components/Footer";
import MovieList from "../components/MovieList";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

function Home(){
    return(
        <div>
            <Navbar/>
            <Slider/>
            <MovieList/>
            <Footer/>
        </div>
    );
}

export default Home;