import { useContext, useState } from "react";

import { AuthContext } from "../AuthProvider.jsx/AuthProvider";

import { useEffect } from "react";
import MyListCard from "./MyListCard";


const MyList = () => {
    const {user}=useContext(AuthContext)
    const [myLists,SetMyLists]=useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/mylist/${user?.email}`)
    .then(res=>res.json())
.then(data=>{
    console.log(data);
    SetMyLists(data)
})
    },[user])
   


    return (
        <div className="pt-20 mx-4">

            <h1 className="text-center text-2xl md:text-2xl lg:text-4xl">You Added {myLists.length} TouristSpots</h1>

            <div className=" mx-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-10">
                {
                    myLists.map(spot=> <MyListCard  key={spot._id} spot={spot} myLists={myLists} SetMyLists={SetMyLists}></MyListCard>)
                }
            </div>
           
        </div>
    );
};

export default MyList;