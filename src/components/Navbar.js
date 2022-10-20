import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link className="nav-link" to="posts">Listings</Link>
            <Link className="nav-link" to="login">Log In</Link>
            <Link className="nav-link" to="profile">Profile</Link>
        </nav>
    )
};

export default Navbar;