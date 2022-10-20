import React, { useState, useEffect } from "react";

const Profile = () => {
    const [username, setUsername] = useState("");
    const [posts, setPosts] = useState("");
    const [messages, setMessages] = useState("");

    const currentToken = localStorage.getItem("token");

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
                console.log("The profile data: ", data)
                setUsername(data.data.username)
                setPosts(data.data.posts)
                setMessages(data.data.messages)

            } catch (error) {
                console.log(error)
            }
        }

        loadProfileInfo();

    }, []);

    return (
        <div>
            <p>Username: {username}</p>
            <p>Your posts: {posts}</p>
            <p>Messages: {messages}</p>
        </div>
    )
};

export default Profile;

// Add, delete, edit posts
// Send and view messages
// Log out button that deletes token from local storage