import React, { useCallback, useState, useEffect } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";


const PostDetails = () => {
    // Listings is used as outlet context and the parameter of the rendered listing is set to "id"
    const [renderedListings] = useOutletContext();
    const { id } = useParams();
    const [currentPost, setCurrentPost] = useState(null);

    // A function, findPost, is used to sort through the rendered listings for the matching _id number of the current post
    // That _id number is set to current post
    // The function runs in a use effect hook when the id has changed
    const findPost = useCallback(() => {
        for (let i = 0; i < renderedListings.length; i++) {
            const post = renderedListings[i];
            if (post._id !== id) continue;
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
                    <div id="detailed-view-div">
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

