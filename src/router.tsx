import {createBrowserRouter} from "react-router-dom"
import RouterWrapper from "./components/router-wrapper/router-wrapper"
import Home from "./pages/home"
import Workshop from "./pages/workshop";
import Login from "./pages/login";


const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/",
        element: <RouterWrapper />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "organizations",
                element: <Workshop />
            },
            {
                path: "doctors",
                element: <Workshop />
            },
            {
                path: "clients",
                element: <Workshop />
            },
            {
                path: "appointments",
                element: <Workshop />
            },
            {
                path: "managers",
                element: <Workshop />
            },
            {
                path: "documentation",
                element: "Sorry... Not implemented yet"
            }
        ]
    }
])

export default router
