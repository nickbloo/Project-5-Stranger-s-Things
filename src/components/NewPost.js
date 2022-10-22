import React, { useState, useEffect} from "react";
import { Link, useOutletContext, useParams, useNavigate } from "react-router-dom";


const NewPost = () => {
    const [,, posts,] = useOutletContext();
    const navigate = useNavigate();
    const { id } = useParams();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const [postId, setPostId] = useState("");
    
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

    async function deletePost(event) {
        event.preventDefault();
        try {
            const response = await fetch (`https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
            const data = await response.json();
            navigate("/posts");
            console.log("successfully deleted");

        } catch (error) {
            console.log(error)
        }
    };

    // function updatePostIdState(event) {
    //     setPostId(event.target.value)
    // };

    console.log(posts);


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
            { posts && posts.length ? posts.map((eachUserPost, idx) => {
                return <div className="user-display-div" key={idx}>
                    <form onSubmit={deletePost} >
                        <p>{eachUserPost.title}</p>
                        <p>Price: {eachUserPost.price}</p>
                        <button type="submit">Delete This Post</button>
                    </form>
                </div>
            }) : null }
        </div> 
    )
};

export default NewPost;

// This component will render out a view for your currents posts, give you the option to delete them
// And make a new post

// Will always check for a token before rendering, if no token you'll be asked to login/register


//view posts= view and delete your posts
// Messages = see all messages and send a new message


// setPostId(eachUserPost._id)