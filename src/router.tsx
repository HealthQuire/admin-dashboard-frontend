import {createBrowserRouter, Navigate} from "react-router-dom"
import RouterWrapper from "./components/router-wrapper/router-wrapper"
import Home from "./pages/home"
import Workshop from "./pages/workshop";
import Login from "./pages/login";

const ProtectedRoute = ({ children }) => {
    const res = localStorage.getItem("hq_id");
    if (!res) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <RouterWrapper />
            </ProtectedRoute>
        ),
        children: [
            {
                path: "/",
                element: (
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                )
            },
            {
                path: "organizations",
                element: (
                    <ProtectedRoute>
                        <Workshop />
                    </ProtectedRoute>
                )
            },
            {
                path: "doctors",
                element: (
                    <ProtectedRoute>
                        <Workshop />
                    </ProtectedRoute>
                )
            },
            {
                path: "clients",
                element: (
                    <ProtectedRoute>
                        <Workshop />
                    </ProtectedRoute>
                )
            },
            {
                path: "appointments",
                element: (
                    <ProtectedRoute>
                        <Workshop />
                    </ProtectedRoute>
                )
            },
            {
                path: "managers",
                element: (
                    <ProtectedRoute>
                        <Workshop />
                    </ProtectedRoute>
                )
            }
        ]
    }
])

export default router
