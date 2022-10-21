import React from "react";
import { Link, useOutletContext, useParams, useNavigate } from "react-router-dom";
import NewPost from "./NewPost";

const Profile = () => {
    function logOutUser(event) {
        event.preventDefault();
        localStorage.removeItem("token");
        navigate("/login");
     };

    const currentToken = localStorage.getItem("token");
    const navigate = useNavigate();

    const [, username, posts, messages] = useOutletContext();

    return (
        <div>
            { currentToken && currentToken.length ? 
                <div id="user-info-container">
                    <form onSubmit={logOutUser}>
                        <p>Username: {username}</p>
                        <button type="submit">Log Out</button>
                    </form>
                    <br />
                    <h2>Your posts: </h2>
                    <NewPost />
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
