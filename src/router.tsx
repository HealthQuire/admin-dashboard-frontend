import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/home"
import Organizations from "./pages/organizations";
import Doctors from "./pages/doctors";
import Clients from "./pages/clients";
import Appointments from "./pages/appointments";
import Cards from "./pages/cards";
import RouterWrapper from "./components/router-wrapper/router-wrapper"


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
                element: <Organizations />
            },
            {
                path: "doctors",
                element: <Doctors />
            },
            {
                path: "clients",
                element: <Clients />
            },
            {
                path: "appointments",
                element: <Appointments />
            },
            {
                path: "cards",
                element: <Cards  />
            }
        ]
    }
])

export default router
