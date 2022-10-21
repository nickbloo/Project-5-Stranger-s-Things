import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
    const [username, setUsername] = useState("");
    const [posts, setPosts] = useState("");
    const [messages, setMessages] = useState("");

    const currentToken = localStorage.getItem("token");
    const navigate = useNavigate();

    function logOutUser(event) {
        event.preventDefault();
        localStorage.removeItem("token");
        navigate("/login");
     };

    useEffect(() => {
        async function loadProfileInfo() {
            try {
                const response = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/me",
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${currentToken}`
                        },
                    })

                const data = await response.json();
                setUsername(data.data.username)
                setPosts(data.data.posts)
                setMessages(data.data.messages)
                console.log(data.data.posts)
                console.log(data.data.messages)

            } catch (error) {
                console.log(error)
            }
        }
        loadProfileInfo() 

    }, []);

    return (
        <div>
            { currentToken && currentToken.length ?
                <div id="user-info-container">
                    <form onSubmit={logOutUser}>
                        <p>Username: {username}</p>
                        <button type="submit">Log Out</button>
                    </form>
                    <br />
                    <p>Your posts: {JSON.stringify(posts.title)}</p>
                    <Link to="/newpost">Make a New Post</Link>
                    <br />
                    <p>Messages: {messages}</p>
                    <Link to="/messages">Send New Message</Link>
                </div> : 
                <div>
                    <p>Please log in or register for an account</p>
                    <Link to="/login">Click Here</Link>
                </div>
            }
        </div>
    )
};

export default Profile;