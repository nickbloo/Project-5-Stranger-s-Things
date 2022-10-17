import React from "react";
import { createRoot } from "react-dom/client";

const appElement = document.getElementById("app");
const root = createRoot(appElement);

const Placeholder = () => {
    return (
        <div>
            <h1>Hello World!</h1>
        </div>
    )
};

root.render(<Placeholder />);