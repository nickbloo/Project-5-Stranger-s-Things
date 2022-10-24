import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Messages = () => {
    // The id parameter is used to target where the message will be sent. 
    // The following function sets the message to the content of the input below and makes the api call to send the message on submit
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
        navigate("/profile")
        .catch((err) => console.log('error: ', err))
    }, [content]); 

    return (
        <div>
            <form>
                <h2>Send a new message</h2>
                <input id="message-input" value={content} onChange={(e) => setContent(e.target.value)} />
                <br />
                <button onClick={handleSubmit}>Send Message</button>
            </form>
        </div>
    )
};

export default Messages;

// This component will render out a view for your currents messages, give you the option to delete them
// And write & send a new message

// Will always check for a token before rendering, if no token you'll be asked to login/register

// add view messages only onto profile page