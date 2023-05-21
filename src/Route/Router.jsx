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
import Error from "../Pages/Error";
import PrivateRoute from "./PrivateRoute";
import MyToysView from "../Pages/Shared/MytoysView";
import AllToysView from "../Pages/Shared/AllToys/AllToysView";
import CategoryView from "../Home/ShopCategory/CategoryView";

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
          fetch(`https://assignment-11-toy-marketplace-server-alif819015.vercel.app/allToys/${params.id}`),
      },
      {
        path: "/myView/:id",
        element: <MyToysView></MyToysView>,
        loader: ({ params }) =>
          fetch(`https://assignment-11-toy-marketplace-server-alif819015.vercel.app/allToys/${params.id}`),
      },
      {
        path: "/allView/:id",
        element: <AllToysView></AllToysView>,
        loader: ({ params }) =>
          fetch(`https://assignment-11-toy-marketplace-server-alif819015.vercel.app/allToys/${params.id}`),
      },
      {
        path: "/categoryView/:id",
        element: <CategoryView></CategoryView>
      },

      {
        path: "/error",
        element: <Error></Error>,
      },
    ]
  },

]);

export default router;
