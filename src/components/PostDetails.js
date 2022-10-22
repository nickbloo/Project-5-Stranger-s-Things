import React, { useCallback, useState, useEffect } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";


const PostDetails = () => {
    const [renderedListings] = useOutletContext();
    const { id } = useParams();
    const [currentPost, setCurrentPost] = useState(null);
    const findPost = useCallback(() => {
        for (let i = 0; i < renderedListings.length; i++) {
            const post = renderedListings[i];
            if (post._id !== id) continue;
            console.log(post);
            setCurrentPost(post);
        }
    }, [id]);
    useEffect(() => {
        findPost();
    }, [id]);

    return (
        <div id="post-details-container">
            {
                currentPost && currentPost.title ?
                    <div>
                        <h2>{currentPost.title}</h2>
                        <h4>Price: {currentPost.price}</h4>
                        <p><b>Description: </b>{currentPost.description}</p>
                        <p><b>Location: </b>{currentPost.location}</p>
                        <p><b>Seller: </b>{currentPost.author.username}</p>
                        <p>Posted on: {currentPost.createdAt}</p>
                        <p>Latest activity: {currentPost.updatedAt}</p>
                        <Link to={'/messages/' + id}>Message this seller</Link>
                        <br />
                        <Link to="/posts">Browse more listings</Link>
                    </div>
                    : <div id="loading-div">Loading...</div>
            }
        </div>
    )
};

export default PostDetails;

// {`/posts/${idx}`}