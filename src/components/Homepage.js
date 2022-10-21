import React, {useEffect, useState} from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Homepage = () => {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        async function fetchListings() {
            try {
                const response = await fetch ("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts");
                const data = await response.json();

                setListings(data.data.posts)
            } catch (error) {
                console.log(error)
            }
        }

        fetchListings();

    }, [])

    return (
        <div>
            <div id="nav-container">
                <h1>Stranger's Things</h1>
                <Navbar />
            </div>
            <Outlet context={listings} />
        </div>
    )
};

export default Homepage