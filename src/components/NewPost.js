import React, { useState } from "react";
import { useOutletContext, useParams, useNavigate } from "react-router-dom";


const NewPost = () => {
    const [,, posts,] = useOutletContext();
    const navigate = useNavigate();
    const { id } = useParams();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const [postId, setPostId] = useState("");

        // This function creates a new post and sets the needed information to the value of the respective getters
        // Which are in turn set to the value of the inputs below
        async function addNewPost(event) {
            event.preventDefault();
            try {
                const response = await fetch ("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    },
                    body: JSON.stringify({
                        post: {
                            title: title,
                            description: description,
                            price: price,
                            willDeliver: true
                        }
                    })
                })
                const data = await response.json();
                navigate("/posts");

            } catch (error) {
                console.log(error)
            }
        };

    
    function updateTitleState(event) {
        setTitle(event.target.value)
    };

    function updateDescriptionState(event) {
        setDescription(event.target.value)
    };

    function updatePriceState(event) {
        setPrice(event.target.value)
    };

    // Function to delete posts sets the POST ID in the api call to be a parameter of the function
    // That parameter is passed to the function on submit
    async function deletePost(event, postId) {
        event.preventDefault();
        try {
            const response = await fetch (`https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts/${postId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
            const data = await response.json();
            navigate("/posts");
            console.log("successfully deleted");
            console.log(data);
            console.log(postId);

        } catch (error) {
            console.log(error)
        }
    };

    function updatePostIdState(event) {
        setPostId(event.target.value)
    };


    return (
        <div> 
            <form onSubmit={addNewPost}>
                <h2>Make a new post</h2>
                <br />
                <input className="profile-input" required placeholder="Title" value={title} onChange={updateTitleState} type="text" ></input>
                <br />
                <input className="profile-input" required placeholder="Description" value={description} onChange={updateDescriptionState} type="text"></input>
                <br />
                <input className="profile-input" required placeholder="Price" value={price} onChange={updatePriceState} type="text"></input>
                <br />
                <button type="submit">Post</button>
            </form>
            <h2>Your Posts: </h2>
            {/* If a post is set to active it is rendered, if not then it is not. So "deleted" posts do not display, though they remain in the api. */}
            { (posts && posts.length) ? posts.map((eachUserPost, idx) => {
                if (eachUserPost.active == true) {
                return <div className="user-display-div" key={idx}>
                    <form onSubmit={ (e) => deletePost(e, eachUserPost._id) } >
                        <p>{eachUserPost.title}</p>
                        <p>Price: {eachUserPost.price}</p>
                        <button value={postId} onClick={updatePostIdState} type="submit">Delete This Post</button>
                    </form>
                </div> }
            }) : null }
        </div> 
    )
};

export default NewPost;


// Style a little bit
// check it again
// add comments for the code 