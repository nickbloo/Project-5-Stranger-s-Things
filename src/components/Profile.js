import React from "react";
import { Link, useOutletContext, useParams, useNavigate } from "react-router-dom";
import NewPost from "./NewPost";
import Messages from "./Messages";

const Profile = () => {
    // A function to log out users is declared which removes the token from the local storage of the client
    // Without a token the will not be able to access the profile page
    function logOutUser(event) {
        event.preventDefault();
        localStorage.removeItem("token");
        navigate("/login");
    };

    const currentToken = localStorage.getItem("token");
    const navigate = useNavigate();

    const [, username, , messages] = useOutletContext();

    return (
        <div>
            {/* Log out function is invoked on submit and the users messages are mapped out once evaluated to true and that they have content
            If there is no token on local storage, the user is prompted to log in or register */}
            {currentToken && currentToken.length ?
                <div id="user-info-container">
                    <form onSubmit={logOutUser}>
                        <h2>Username: {username}</h2>
                        <button type="submit">Log Out</button>
                    </form>
                    <br />
                    <NewPost />
                    <br />
                    <h2>Your Messages: </h2>
                    {messages && messages.length ? messages.map((eachUserMessage, idx) => {
                        return <div className="user-display-div" key={idx}>
                            <p><b>From: </b>{eachUserMessage.fromUser.username}</p>
                            <p>{eachUserMessage.content}</p>
                        </div>
                    }) : null}
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
