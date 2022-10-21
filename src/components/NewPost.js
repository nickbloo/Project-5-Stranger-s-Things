import React from "react";
import { Link, useOutletContext, useParams, useNavigate } from "react-router-dom";


const NewPost = () => {

    const [,, posts,] = useOutletContext();

    return (
        <div>
            { posts && posts.length ? posts.map((eachUserPost, idx) => {
                return <div className="user-post-div" key={idx}>
                    <p>{eachUserPost.title}</p>
                    <p>Price: {eachUserPost.price}</p>
                    <button>Delete This Post</button>
                </div>
            }) : null }
        </div> 
    )
};

export default NewPost;

// This component will render out a view for your currents posts, give you the option to delete them
// And make a new post

// Will always check for a token before rendering, if no token you'll be asked to login/register