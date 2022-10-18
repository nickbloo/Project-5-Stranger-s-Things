import React from "react";

const Login = () => {
    return (
        <div id="login-container">
            <form>Log in
                <br/>
                <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Your Email" required/>
                <br/>
                <input type="password" placeholder="Your Password" required/>
                <br/>
                <button id="login-btn">Submit</button>
            </form>
        </div>
    )
};

export default Login