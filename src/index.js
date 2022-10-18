import React from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/Homepage";
import Posts from "./components/Posts";
import ErrorPage from "./components/ErrorPage";
import About from "./components/About";
import Login from "./components/Login";
import Navbar from "./components/Navbar";


const appElement = document.getElementById("app");
const root = createRoot(appElement);

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/posts",
                element: <Posts />
            }
        ]
    }
])

root.render(<RouterProvider router={router}/>);