import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function registerUser (event) {
        event.preventDefault();
        try {
            const response = await fetch(
                "https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        user: {
                            username: username,
                            password: password
                        }
                    })
                })

                const data = await response.json();
                // console.log("This is our translated data: ", data)
                localStorage.setItem("token", data.data.token)

        } catch (error) {
            console.log(error);
        }
    };

    function updateUsernameState(event) {
        setUsername(event.target.value)
    };

    function updatePasswordState(event) {
        setPassword(event.target.value)
    };

    function redirectToProfile () { 
            const currentToken = localStorage.getItem("token");
            currentToken && currentToken.length ? useNavigate("/profile")
            : console.log("Try again!") } 
    

    return (
        <div id="register-container">
            <form onSubmit={registerUser}>Register Account
                <br />
                <input type="text" value={username} onChange={updateUsernameState} placeholder="Create Username" required />
                <br />
                <input type="text" value={password} onChange={updatePasswordState} placeholder="Create Password" required />
                <br />
                <button type="submit" id="register-btn">Submit</button>
                <br />
            </form>
        </div>
    )
};

export default Register;

// Need to add redirectToProfile function to register user function, so submitting the form redirects
// the user to the profile page