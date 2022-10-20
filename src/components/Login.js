import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div id="login-container">
            <form>Log in
                <br/>
                <input type="text" placeholder="Your Username" required/>
                <br/>
                <input type="text" placeholder="Your Password" required/>
                <br/>
                <button type="submit" id="login-btn">Submit</button>
                <br />
                <p>Don't have an account?<Link to={"/register"}>Register Here</Link></p>
            </form>
        </div>
    )
};

export default Login