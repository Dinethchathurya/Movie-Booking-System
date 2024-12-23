import React from "react";
import { Route, Routes } from "react-router-dom";
import BuyTickets from "./pages/BuyTickets";
import Home from "./pages/Home";
import Location from "./pages/Location";
import Login from "./pages/Login";
import Movie from "./pages/Movie";
import MyAccount from "./pages/MyAccount";
import Register from "./pages/Register";

const App = () => {
    return(
        <Routes>
            <Route path="/" element ={ <Home/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/movie" element={<Movie/>} />
            <Route path="/location" element={<Location/>} />
            <Route path="/myaccount" element={<MyAccount/>} />
            <Route path="/buytickets" element={<BuyTickets/>} />
            <Route path="/buyticket/:movieId" element={<BuyTickets/>} />
        </Routes>
    );
}
export default App;