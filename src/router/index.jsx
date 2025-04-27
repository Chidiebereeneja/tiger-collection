import { createBrowserRouter } from "react-router-dom";
import MainWebLayout from "../layouts";
import App from "../pages/App";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainWebLayout,
        children: [  
            { index: true, Component: App } 
        ]
    }
])
