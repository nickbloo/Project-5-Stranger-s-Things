import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Function for logging in user
    async function logInUser(event) {
        event.preventDefault();
        try {
            const response = await fetch(
                "https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/login",
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
            console.log("The data: ", data);
            localStorage.setItem("token", data.data.token)
            navigate("/profile");

        } catch (error) {
            console.log(error)
        }
    };

    // The two following functions set the username and password states to the values of the inputs rendered below
    function updateUsernameState(event) {
        setUsername(event.target.value)
    };

    function updatePasswordState(event) {
        setPassword(event.target.value)
    };

    return (
        <div id="login-container">
            {/* Log in function invoked on submit */}
            <form onSubmit={logInUser}>Log in
                <br />
                <input type="text" value={username} onChange={updateUsernameState} placeholder="Your Username" required />
                <br />
                <input type="text" value={password} onChange={updatePasswordState} placeholder="Your Password" required />
                <br />
                <button type="submit" id="login-btn">Submit</button>
                <br />
                <p>Don't have an account?<Link to={"/register"}>Register Here</Link></p>
            </form>
        </div>
    )
};

export default Login