import { useLoaderData } from "react-router-dom";
import SpotCard from './SpotCard';
import {   useEffect, useState } from "react";


const AllTouristSpot = () => {
   
    const spots=useLoaderData();
    const [items,setitems]=useState([])
    
  useEffect(()=>{
setitems(spots)
  },[])
 
console.log(spots);


const handleAscending=()=>{
    const sortitmes= [...spots].sort((a,b)=>
    a.averagecost - b.averagecost)
        
        setitems(sortitmes)
}
const handleDescending=()=>{
    const sortitmes= [...spots].sort((a,b)=>
    b.averagecost - a.averagecost)
        
        setitems(sortitmes)
}
// useEffect(()=>{

    
//     const sortitmes= [...spots].sort((a,b)=>
// a.averagecost - b.averagecost)
    
//     setitems(sortitmes)
//     console.log(sortitmes);
//     console.log(items);
// },[])




  
    return (
        <div className="pt-20 mx-4">
            <h1 className="text-4xl text-center my-3">
            AllTourist Spots
            </h1>

            <div className="flex justify-center items-center w-3/5 mx-auto py-1 rounded-xl">
            <div className="mr-4">
            <h1 className="text-2xl ">TotalTourist Spots : {spots.length} </h1>
            </div>

            <div>
            <details className="dropdown">
  <summary className="m-1 btn">Sort By AverageCost</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box ">
    <li><button onClick={handleAscending}>Ascending </button></li>
    <li><button onClick={handleDescending }>descending </button></li>
 
  </ul>
</details>
            </div>
            </div>
          

          

            <div className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-2 lg:grid-cols-3">
        {items.map(spot=><SpotCard key={spot._id} spot={spot}></SpotCard>)}
            </div>
        </div>
    );
};

export default AllTouristSpot;