
import Countrycard from "./Countrycard";
import { useEffect, useState } from "react";


const Countries = () => {


    const [countries,setCountries] =useState([]);

    useEffect(()=>{
      fetch('https://y-xi-rose.vercel.app/countries')
      .then(res=> res.json())
      .then(data=>{
        setCountries(data)
      })
    },[])
    
    console.log(countries);
    
    return (
        <div className="my-10 ">

          <div className="text-2xl lg:text-4xl text-center font-semibold pb-8"><span>Explore</span>Countries</div>
         <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 md:mx-10 mx-3">
         {countries.slice(0,6).map( country => <Countrycard key={country._id} country={country}></Countrycard>)}
         </div>
        </div>
    );
};

export default Countries;