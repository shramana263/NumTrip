import { createBrowserRouter } from "react-router-dom";
// import App from "./App";
import HomeBackup from "./Pages/HomeBackup";
import AuthLayout from "./layouts/AuthLayout";
import GuestLayout from "./layouts/GuestLayout";
import Landing from "./Pages/Landing";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import AboutGame from "./Pages/AboutGame";
import Advertise from "./components/Advertise";

const router = createBrowserRouter([
    {
        path:"/",
        element:<AuthLayout/>,
        children:[
            {
                path:"",
                element:<Landing/>
            },
            {
                path:"home",
                element:<HomeBackup/>
            },
            {
                path:"advertise",
                element:<Advertise/>
            }
        ]
    },
    {
        path:"/",
        element:<GuestLayout/>,
        children:[
            {
                path:"landing",
                element:<Landing/>
            },
            {
                path:"login",
                element:<Login/>
            },
            {
                path:"signup",
                element:<Signup/>
            },
        ]
    },
    {
        path:"/aboutgame",
        element:<AboutGame/>
    }
])

export default router