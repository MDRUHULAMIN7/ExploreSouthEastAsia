import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Errorpage from "./Errorpage";
import Home from "../Components/Home";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";
import AddTouristSpot from "../Components/AddTouristSpot";
import PrivateRoute from "../AuthProvider.jsx/PrivateRoute";
import AllTouristSpot from "../Components/AllTouristSpot";
import SpotDetails from "../Components/SpotDetails";
import MyList from "../Components/MyList";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<Errorpage></Errorpage>,
        children:[
        {
        path:'/',
        element:<Home></Home>,
        loader:()=> fetch('http://localhost:5000/spots')
         },

        {
        path:'/signin',
        element:<SignIn></SignIn>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        },
        {
            path:'/addtouristspot',
            element:<PrivateRoute><AddTouristSpot></AddTouristSpot></PrivateRoute>
        },
        {
            path:'/alltouristspots',
            element:<AllTouristSpot></AllTouristSpot>,
            loader:()=>fetch('http://localhost:5000/spots')
        },
        {

        path:'/spotdetails/:id',
        element:<PrivateRoute><SpotDetails></SpotDetails></PrivateRoute>,
        loader:()=>fetch("http://localhost:5000/spots")
        },
        {
            path:"/mylist",
            element:<PrivateRoute><MyList></MyList></PrivateRoute>,
            loader:()=>fetch('http://localhost:5000/spots')
        }
            ]
    }
])
export default router;