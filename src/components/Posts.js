import React, {useEffect, useState} from "react";

const Posts = () => {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        async function fetchListings() {
            try {
                const response = await fetch ("https://strangers-things.herokuapp.com/api/COHORT-NAME/posts");
                const data = await response.json();
                console.log("I am the data: ", data.data.posts)

                setListings(data.data.posts)
            } catch (error) {
                console.log(error)
            }
        }

        fetchListings();

    }, [])

    return (
        <div id="listings-container">
            {
                listings && listings.length ? listings.map((eachListing, idx) => {
                    console.log(eachListing)
                    return <div key={idx} className="listing-div">
                        <h2>{eachListing.title}</h2>
                        <h4>Price: {eachListing.price}</h4>
                        <p><b>Description: </b>{eachListing.description}</p>
                        <p><b>Location: </b>{eachListing.location}</p>
                        <p><b>Seller: </b>{eachListing.author.username}</p>
                        <button type="submit">View More</button>
                    </div>
                }) : <div id="loading-div">Loading...</div>
            }
        </div>
    )
};

export default Posts