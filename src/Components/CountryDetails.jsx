import { Link, useLoaderData, useParams } from "react-router-dom";


const CountryDetails = () => {
    
    const Countries = useLoaderData();
    console.log(Countries);


    // const sId = parseInt(spots._id)
    const{id}=useParams();
  
   console.log(id);
   const spot = Countries.find(spot=>spot._id == id)
   console.log(spot);

   const {image,countryName,description,
    touristsspotname,
    location,
    averagecost,seasonality
}=spot
    return (
        <div className="  pt-20 bg-rose-50 pb-5 px-4 ">


        <div>
            <h1 className="text-4xl md:text-4xl text-center lg:text-4xl">{touristsspotname}</h1>
        </div>
        
        <div className="md:flex gap-5 mt-5">
        <div className=" w-1/2">
          <img src={image} className="w-full h-full rounded-lg shadow-2xl" />
          </div>
        
                 <div className="w-1/2 space-y-3">
                 <h1 className=" font-bold text-3xl md:text-4xl mb-2">{countryName}</h1>
                 <h2 className="text-xl">{location}</h2>
            <p className="py-3">{
        description}</p>
        <p className="text-xl">
            
            
            Averagecost: {averagecost}$</p>
        <p className="text-xl">Season: { seasonality}</p>
       
        
        <Link to={'/'}>
        <button className="btn btn-accent mt-4 w-2/4">Go Home</button>
        </Link>
            
                 </div>
        </div>
        
        
              </div>
    );
};

export default CountryDetails;