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
import CategoryCard from "../Home/ShopCategory/CategoryCard";
import Error from "../Pages/Error";
import PrivateRoute from "./PrivateRoute";
import MyToysView from "../Pages/Shared/MytoysView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "nav",
        element: <NavBer></NavBer>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/addToy",
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path: "/myToys",
        element: (
          <PrivateRoute>
            <MyToy></MyToy>
          </PrivateRoute>
        ),
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/updated/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allToys/${params.id}`),
      },
      {
        path: "/myView/:id",
        element: <MyToysView></MyToysView>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allToys/${params.id}`),
      },

      {
        path: "/error",
        element: <Error></Error>,
      },

      // {
      //     path: '/category/:id',
      //     element: <CategoryCard></CategoryCard>,
      //     loader: ({params})=>fetch(`http://localhost:5000/all-categories/${params.id}`)
      // },
    ],
  },
  // {
  //   path: "/",
  //   element: <Home></Home>,
  //   errorElement: <Error></Error>,
  //   children: [
  //     {
  //       path: "/error",
  //       element: <Error></Error>,
  //     },
  //   ],
  // },
]);

export default router;
