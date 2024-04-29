import { useLoaderData, useParams } from "react-router-dom";
import FilterCountry from "./FilterCountry";


const Country = () => {

    const{countryName}=useParams()

   const Countries=useLoaderData();
   console.log(Countries);

   const myCountries = Countries.filter((kc) => kc.countryName === countryName);
   console.log(myCountries);
    return (
        <div className="pt-20">
            <h1 className="lg:text-4xl md:text-3xl text-2xl text-center py-4">You can Explore more...</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10 mt-5">
            {myCountries.map(country=><FilterCountry key={country._id} country={country}></FilterCountry>)}
        </div>
         
        </div>
    );
};

export default Country;