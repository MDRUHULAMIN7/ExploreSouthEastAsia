

const Countrycard = ({country}) => {
   const {image,countryName,description}=country
    return (
        <div className="h-80 w-full">
            <div className=" h-1/3">
            <img className=" h-full w-full" src={image} alt="" />
            </div>
           
 <div className=" h-1/2"> <h1>{countryName}</h1>          
  <h1>{description}</h1></div>
        </div>
    );
};

export default Countrycard;