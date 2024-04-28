
import { FaDollarSign } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SpotCard = ({spot}) => {
    const {_id,image,
        touristspotname,countryname,
        averagecost,
        seosanlity,
        traveltime,
        totalvisitor}=spot
    return (
        <div className="card h-96  bg-base-100 shadow-xl hover:scale-105 hover:shadow-2xl">
            <div className="h-1/2 ">
            <img className="h-full w-full rounded-t-lg" src={image} alt="Shoes" />
            </div>
 
  <div className="h-1/2 pl-3 pt-2">

    <div className="flex lg:gap-3  gap-2">
        <div className="w-1/2 space-y-2  md:text-sm">
        <p className="text-2xl md:text-xl">{touristspotname} </p>
            <p className="flex items-center"><span>AverageCost </span>  : {averagecost} <FaDollarSign></FaDollarSign></p>
            <p><span>VisitTime</span> : {traveltime}</p>
        </div>
        <div className="space-y-2 md:text-sm">
            <p className="text-2xl md:text-xl">{countryname}</p>
            <p ><span>Season</span> : {seosanlity}</p>
            <p><span>PeopleVisited</span> : { totalvisitor} per year</p>
        </div>
    </div>
   
    <div className="mt-4 px-4">

        <Link to={`/spotdetails/${_id}`}>  <button className="btn btn-secondary w-full">View Details</button></Link>
    
    </div>
  </div>
</div>
    );
};

export default SpotCard;