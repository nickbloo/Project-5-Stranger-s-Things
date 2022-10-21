import React from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/Homepage";
import Posts from "./components/Posts";
import ErrorPage from "./components/ErrorPage";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Register from "./components/Register";
import PostDetails from "./components/PostDetails";
import Messages from "./components/Messages";
import NewPost from "./components/NewPost";

const appElement = document.getElementById("app");
const root = createRoot(appElement);

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/profile",
                element: <Profile />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/posts",
                element: <Posts />
            },
            {
                path: "/posts/:id",
                element: <PostDetails />
            },
            {
                path: "/messages",
                element: <Messages />
            },
            {
                path: "/newpost",
                element: <NewPost />
            }
        ]
    }
])

root.render(<RouterProvider router={router}/>);