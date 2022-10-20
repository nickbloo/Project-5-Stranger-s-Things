import React from "react";
import { useOutletContext, useParams } from "react-router-dom";


const PostDetails = () => {
    // const listingDetails = useOutletContext();
    // const { currentListing } = useParams();
    // console.log("Params obj: ", useParams());
    // console.log("Actual parameter: ", currentListing);
    return (
        <div>
            <p>Read more here</p>
        </div>
    )
};

export default PostDetails;


// Need to render posts individually without another api call