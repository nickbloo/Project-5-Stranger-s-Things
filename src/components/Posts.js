import React from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";

const Posts = () => {
    // Uses the renderedlistings from the outlet on the homepage as context
    // The renderedlistings is the name given to the 'listings' outlet context
    // No commas are used because listings is the first piece of context in the outlet and the only piece of context accessed here
    const [renderedListings] = useOutletContext();


    // renderedListings is evaluated to be true and have content before each listing is rendered, using the map function.
    // If false, a loading div returns instead
    return (
        <div id="listings-container">
            {
                renderedListings && renderedListings.length ? renderedListings.map((eachListing, idx) => {
                    return <div key={idx} className="listing-div">
                        <h2>{eachListing.title}</h2>
                        <h4>Price: {eachListing.price}</h4>
                        <p><b>Description: </b>{eachListing.description}</p>
                        <p><b>Location: </b>{eachListing.location}</p>
                        <p><b>Seller: </b>{eachListing.author.username}</p>
                        <Link to={`/posts/${eachListing._id}`}>Read more</Link>
                    </div>
                }) : <div id="loading-div">Loading...</div>
            }
        </div>
    )
};

export default Posts