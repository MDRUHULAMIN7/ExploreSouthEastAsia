
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
        <div className="card  bg-base-100 shadow-xl hover:scale-105 hover:shadow-2xl">
  <figure className="hover:-translate-y-px transition-shadow" ><img src={image} alt="Shoes" /></figure>
  <div className="card-body">

    <div className="flex gap-5">
        <div className="w-1/2 space-y-2 md:text-sm">
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
   
    <div className="card-actions ">

        <Link to={`/spotdetails/${_id}`}>  <button className="btn btn-primary w-full">View Details</button></Link>
    
    </div>
  </div>
</div>
    );
};

export default SpotCard;