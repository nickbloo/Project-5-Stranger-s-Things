import React, { useState, useEffect, useCallback } from "react";
import { Link, useOutletContext, useParams, useNavigate } from "react-router-dom";

const Messages = () => {
    const [,,,messages] = useOutletContext();
    const { id } = useParams();
    const navigate = useNavigate();
    const [content, setContent] = useState('');
    const handleSubmit = useCallback(async () => {
        if (content.length < 1) return;
        fetch (`https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts/${id}/messages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
              },
              body: JSON.stringify({ message: { content }})
        })
        .then((res) => res.json())
        .then((data) => console.log('data: ', data))
        .catch((err) => console.log('error: ', err))
    }, [content]); 

    return (
        <div>
            <form>
                <h2>Send a new message</h2>
                <input id="message-input" value={content} onChange={(e) => setContent(e.target.value)} />
                <button onClick={handleSubmit}>Send Message</button>
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

// add view messages only onto profile page