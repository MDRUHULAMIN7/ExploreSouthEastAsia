import { Link } from "react-router-dom";


const FilterCountry = ({country}) => {
    const {image,countryName,description,
        touristsspotname,
        location,
        averagecost,seasonality,_id
    }=country
    return (
        <div className="h-[365px] w-full m-5">

       
        <div className=" h-1/2">
        <img className=" h-full w-full" src={image} alt="" />
        </div>
       
<div className=" h-1/2 space-y-2"> 
<h1 className="text-xl">{touristsspotname}</h1>
<h1 className="text-lg">{countryName}</h1>
<h1 className="text-base">{location}</h1>     
<div className="flex gap-2 items-center text-sm">
    <h1>{averagecost}$</h1> <h1>{seasonality}</h1></div>     
<h1 className="text-sm">{description}</h1></div>

<Link to={`/countrydetails/${_id}`}><button className="bg-rose-300 px-3 py-2">View Details</button></Link>
        
      
    </div>
    );
};

export default FilterCountry;