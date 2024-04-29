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
import Update from "../Components/Update";
import Countries from "../Components/Countries";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<Errorpage></Errorpage>,
        children:[
        {
        path:'/',
        element:<Home></Home>,
        loader:()=> fetch('https://y-xi-rose.vercel.app/spots')
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
            loader:()=>fetch('https://y-xi-rose.vercel.app/spots')
        },
        {

        path:'/spotdetails/:id',
        element:<PrivateRoute><SpotDetails></SpotDetails></PrivateRoute>,
        loader:()=>fetch("https://y-xi-rose.vercel.app/spots")
        },
        {
            path:"/mylist",
            element:<PrivateRoute><MyList></MyList></PrivateRoute>,
            loader:()=>fetch('https://y-xi-rose.vercel.app/spots')
        },
        {
            path:"/updatemylist/:id",
            element:<Update></Update>,
            loader:()=>fetch(`https://y-xi-rose.vercel.app/spots`)
        },{
            path:"/countries",
            element:<Countries></Countries>,
            loader:()=>fetch('http://localhost:5000/countries')
        }
            ]
    }
])
export default router;