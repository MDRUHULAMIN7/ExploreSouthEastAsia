import { Link, useLoaderData, useParams } from "react-router-dom";


const SpotDetails = () => {

    const spots = useLoaderData();
    console.log(spots);


    // const sId = parseInt(spots._id)
    const{id}=useParams();
  
   console.log(id);
   const spot = spots.find(spot=>spot._id == id)
   console.log(spot);

   const {image,
    touristspotname,countryname,
    averagecost,
    seosanlity,
    traveltime,
    totalvisitor,
    location
    ,
description}=spot
  

    return (
        <div className="  pt-20 bg-rose-50 pb-5 px-4 ">


<div>
    <h1 className="text-4xl md:text-4xl text-center lg:text-4xl">{touristspotname}</h1>
</div>

<div className="md:flex gap-5 mt-5">
<div className=" w-1/2 ">
  <img src={image} className="w-full h-full rounded-lg shadow-2xl" />
  </div>

         <div className="w-1/2 space-y-3">
         <h1 className=" font-bold text-3xl md:text-4xl mb-2">{countryname}</h1>
         <h2 className="text-xl">Location:{location}</h2>
    <p className="py-3 text-xl">{
description}</p>
<p className="text-xl">
    
    
    Averagecost: {averagecost}</p>
<p className="text-xl">Season: {  seosanlity}</p>
<p className="text-xl">TravelTime: {traveltime}</p>
<p className="text-xl">Everyyear about {totalvisitor} people visithere </p>

<Link to={'/alltouristspots'}>
<button className="btn btn-accent mt-2 w-2/4">View All Tourist Spots</button>
</Link>
    
         </div>
</div>


      </div>
    );
};

export default SpotDetails;


