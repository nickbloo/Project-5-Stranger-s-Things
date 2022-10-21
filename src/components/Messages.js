import React, { useState, useEffect} from "react";
import { Link, useOutletContext, useParams, useNavigate } from "react-router-dom";

const Messages = () => {
    const [,,,messages] = useOutletContext();
    const navigate = useNavigate();


    return (
        <div>
            <form>
                <h2>Send a new message</h2>
            </form>
            <h2>Your Messages: </h2>
            { messages && messages.length ? messages.map((eachUserMessage, idx) => {
                return <div className="user-display-div" key={idx}>
                        <p><b>From: </b>{eachUserMessage.fromUser.username}</p>
                        <p>{eachUserMessage.content}</p>
                </div>
            }) : null }
        </div>
    )
};

export default Messages;

// This component will render out a view for your currents messages, give you the option to delete them
// And write & send a new message

// Will always check for a token before rendering, if no token you'll be asked to login/register