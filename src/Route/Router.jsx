import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import NavBer from "../Pages/Shared/NavBar/NavOne";
import Login from "../Home/Login";
import Register from "../Home/Register";
import Blogs from "../Home/Blogs";
import AddToy from "../Pages/AddToy/AddToy";
import MyToy from "../Pages/Shared/MyToy";


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
        {
            path: '/addToy',
            element: <AddToy></AddToy>
        },
        {
            path: '/myToys',
            element: <MyToy></MyToy>
        },
      ]
    },
  ]);

export default router;