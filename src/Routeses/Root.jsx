import { Outlet } from "react-router-dom";

import Navbar from "../Components/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Foter from "../Components/Foter";

const Root = () => {
    return (
        <div>
          <Navbar></Navbar>
            <Outlet></Outlet>
            <ToastContainer />
            <Foter></Foter>
        </div>
    );
};

export default Root;