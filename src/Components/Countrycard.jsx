import { Link } from "react-router-dom";


const Countrycard = ({country}) => {
   const {image,countryName,description}=country
    return (
        <div className="h-80 w-full hover:border-2 hover:border-rose-300 hover:text-red-300">

            <Link to={`/countries/${countryName}`}>
            <div className=" h-2/3">
            <img className=" h-full w-full" src={image} alt="" />
            </div>
           
 <div className=" h-1/3 mx-3"> <h1 className="text-2xl">{countryName}</h1>          
  <h1>{description}</h1></div>
            </Link>
          
        </div>
    );
};

export default Countrycard;