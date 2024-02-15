import {createBrowserRouter} from "react-router-dom"
import RouterWrapper from "./components/router-wrapper/router-wrapper"
import Home from "./pages/home"
import Workshop from "./pages/workshop";


const router = createBrowserRouter([
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
                path: "appointments/*",
                element: <Workshop />
            },
            {
                path: "services",
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
