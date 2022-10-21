import React from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";


const PostDetails = () => {
    const [renderedListings] = useOutletContext();
    const { id } = useParams();
    const currentListing = renderedListings[id];

    return (
        <div id="post-details-container">
            {
                currentListing && currentListing.title ?
                <div>
                        <h2>{currentListing.title}</h2>
                        <h4>Price: {currentListing.price}</h4>
                        <p><b>Description: </b>{currentListing.description}</p>
                        <p><b>Location: </b>{currentListing.location}</p>
                        <p><b>Seller: </b>{currentListing.author.username}</p>
                        <p>Posted on: {currentListing.createdAt}</p>
                        <p>Latest activity: {currentListing.updatedAt}</p>
                        <Link to="/messages">Message this seller</Link>
                        <br />
                        <Link to="/posts">Browse more listings</Link>
                </div>
         : <div id="loading-div">Loading...</div>
            }
        </div>
    )
};

export default PostDetails;