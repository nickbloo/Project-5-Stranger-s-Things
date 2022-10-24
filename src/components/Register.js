import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Function to register a user
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
                localStorage.setItem("token", data.data.token)
                navigate("/profile");

        } catch (error) {
            console.log(error);
        }
    };

    // Following two functions set the username and password states to the value of the inputs below
    function updateUsernameState(event) {
        setUsername(event.target.value)
    };

    function updatePasswordState(event) {
        setPassword(event.target.value)
    };

    return (
        <div id="register-container">
            {/* Register user function invoked on submit */}
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