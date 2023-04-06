import Login from "../Pages/Login/Login";
import LoginNumber from "../Pages/Login/LoginNumber";
import SignUp from "../Pages/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: ErrorPage } = require("../Components/ErrorPage/ErrorPage");
const { default: Home } = require("../Pages/Home/Home");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
            path: '/',
            element: <Home></Home>
        },
            {
            path: '/login',
            element:<Login></Login>
        },
           
            {
            path: '/loginNumber',
            element:<LoginNumber></LoginNumber>
        },
            {
            path: '/register',
            element:<SignUp></SignUp>
        },
           
    
    
    ]
    },
    
])


export default router