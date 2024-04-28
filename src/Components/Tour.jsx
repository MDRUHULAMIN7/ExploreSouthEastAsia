import { FaDollarSign } from "react-icons/fa6";

const Tour = ({tour}) => {
    return (
        <div>
             <div className="  bg-base-100 border-2 h-96 border-base-200
             hover:border-rose-300 hover:text-rose-400  hover:shadow-2xl" >

                <div className="h-1/2">
                <img className=" h-full w-full" src={tour.image} alt="Shoes" />
                </div>

                <div className="h-1/2 mt-4 ml-4">
  
                <div className=" space-y-2 md:text-sm">
      <p className="text-2xl md:text-xl">{tour.touristspotname} </p>
          <p className="flex items-center"><span>TotalCost </span>  : {tour.averagecost} <FaDollarSign></FaDollarSign></p>
          <p><span>TourTime</span> : {tour.traveltime}</p>
          <p ><span>Season</span> : {tour.seosanlity}</p>
      </div>



</div>
            
    

  </div>
        </div>
    );
};

export default Tour;