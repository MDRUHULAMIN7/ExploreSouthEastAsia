import { FaDollarSign } from "react-icons/fa6";

const Tour = ({tour}) => {
    return (
        <div>
             <div className="  bg-base-100 flex hover:shadow-2xl" >

                <div className="">
                <figure className="hover:-translate-y-px transition-shadow" ><img className=" " src={tour.image} alt="Shoes" /></figure>
                </div>

                <div>
                <div className="card-body">
  
  <div className="">
      <div className=" space-y-2 md:text-sm">
      <p className="text-2xl md:text-xl">{tour.touristspotname} </p>
          <p className="flex items-center"><span>AverageCost </span>  : {tour.averagecost} <FaDollarSign></FaDollarSign></p>
          <p><span>VisitTime</span> : {tour.traveltime}</p>
      </div>
      <div className="space-y-2 md:text-sm">
        
          <p ><span>Season</span> : {tour.seosanlity}</p>
      
      </div>
  </div>



</div>
                </div>
    

  </div>
        </div>
    );
};

export default Tour;