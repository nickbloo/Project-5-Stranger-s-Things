import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Homepage = () => {
    return (
        <div>
            <div id="nav-container">
                <h1>Stranger's Things</h1>
                <Navbar />
            </div>
            <Outlet />
        </div>
    )
};

export default Homepage