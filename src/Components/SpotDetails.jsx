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
        <div className="  pt-20 bg-base-200 px-4 ">


<div>
    <h1 className="text-4xl md:text-4xl text-center lg:text-4xl">{touristspotname}</h1>
</div>

<div className="md:flex gap-5 mt-5">
<div className=" w-1/2">
  <img src={image} className="w-full h-full rounded-lg shadow-2xl" />
  </div>

         <div className="w-1/2">
         <h1 className=" font-bold text-3xl md:text-4xl mb-2">{countryname}</h1>
         <h2>{location}</h2>
    <p className="py-3">{
description}</p>
<p>
    
    
    Averagecost: {averagecost}</p>
<p>Season: {  seosanlity}</p>
<p>TravelTime: {traveltime}</p>
<p>Everyyear about {totalvisitor} people visithere </p>

<Link to={'/alltouristspots'}>
<button className="btn btn-accent mt-2 w-2/4">View All Tourist Spots</button>
</Link>
    
         </div>
</div>


      </div>
    );
};

export default SpotDetails;


