import { createBrowserRouter } from "react-router-dom";
import AddToy from "../Component/AddToy/AddToy";
import AllToys from "../Component/AllToys/AllToys";
import MyToys from "../Component/MyToys/MyToys";
import Update from "../Component/Update/Update";
import Main from "../Main/Main";
import Details from "../Page/Details/Details";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import Blog from "../Shared/Blog/Blog";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import PrivateRouter from "./Private/PrivateRouter";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [

            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
              path:"/toysDetails/:id",
              element:<PrivateRouter><Details/></PrivateRouter>,
              loader:({params})=>fetch(`http://localhost:3000/toysDetails/${params.id}`)
            },
            {
                path:"/add-toy",
                element:<PrivateRouter><AddToy/></PrivateRouter>
            },
            {
                path:"/my-toy",
                element:<PrivateRouter><MyToys/></PrivateRouter>
            },
            {
                path:"/update/:id",
                element:<PrivateRouter><Update></Update></PrivateRouter>,
                loader:({params})=>fetch(`http://localhost:3000/update/${params.id}`)
                
            },
            {
                path:'all-Toys',
                element:<AllToys/>

            },
            {
                path:"/details/:id",
                element:<PrivateRouter><Details/></PrivateRouter>,
                loader:({params})=>fetch(`http://localhost:3000/all-toys/${params.id}`)
   },
   
   {
path:"/blog",
element:<Blog></Blog>
   }

        ]
    }
])

