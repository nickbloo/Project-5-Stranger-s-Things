import React from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";

const Posts = () => {
    const [renderedListings] = useOutletContext();

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