import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import NavBer from "../Pages/Shared/NavBar/NavOne";
import Login from "../Home/Login";
import Register from "../Home/Register";
import Blogs from "../Home/Blogs";
import AddToy from "../Pages/AddToy/AddToy";
import MyToy from "../Pages/Shared/MyToy";
import AllToys from "../Pages/Shared/AllToys/AllToys";
import UpdateToy from "../Pages/Shared/UpdateToy";


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
        {
            path: '/allToys',
            element: <AllToys></AllToys>
        },
        {
            path: '/updated/:id',
            element: <UpdateToy></UpdateToy>,
            loader: ({params})=>fetch(`http://localhost:5000/allToys/${params.id}`)
        },
      ]
    },
  ]);

export default router;