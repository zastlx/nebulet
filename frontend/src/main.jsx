import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import pages from "./pages/pages";

const router = createBrowserRouter([
    {
        path: "/*",
        element: (<pages.errors.error404/>)
    },
    {
        path: "/login",
        element: (<pages.auth type="login"/>)
    },
    {
        path: "/register",
        element: (<pages.auth type="register"/>)
    },
    {
        path: "/",
        element: (<pages.home/>)
    },
    {
        path: "/terms",
        element: (<pages.terms/>)
    },
    {
        path: "/test",
        element: (<pages.test/>)
    },
    {
        path: "/demo",
        element: (<pages.demo/>)
    },
    {
        path: "/stats",
        element: (<pages.stats/>)
    }
]);

window.global = window; // discord is stupid :/
ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
