import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import NavBer from "../Pages/Shared/NavBar/NavOne";
import Login from "../Home/Login";
import Register from "../Home/Register";
import Blogs from "../Home/Blogs";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'nav',
            element: <NavBer></NavBer>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/blogs',
            element: <Blogs></Blogs>
        },
      ]
    },
  ]);

export default router;