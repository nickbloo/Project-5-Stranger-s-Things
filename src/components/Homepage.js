import React, {useEffect, useState} from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Homepage = () => {
    // Initial api call for posts, returns an object of all posts
    // Post data set later as outlet context
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

    }, []);

    const [username, setUsername] = useState("");
    const [posts, setPosts] = useState([]);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Initial api call for user information
        // Username posts and messages are set and used later as outlet context
        async function loadProfileInfo() {
            try {
                const response = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/me",
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${localStorage.getItem("token")}`
                        },
                    })

                const data = await response.json();
                setUsername(data.data.username)
                setPosts(data.data.posts)
                setMessages(data.data.messages)

            } catch (error) {
                console.log(error)
            }
        }
        loadProfileInfo() 

    }, []);

    return (
        <div>
            <div id="nav-container">
                <h1>Stranger's Things</h1>
                <Navbar />
            </div>
            {/* Sets the outlet with context to pass down to other components later */}
            <Outlet context={[listings, username, posts, messages]} /> 
        </div>
    )
};

export default Homepage