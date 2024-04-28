import { useLoaderData, useParams } from "react-router-dom";


const Update = () => {

    const spots =useLoaderData();
    console.log(spots);

    const{id}=useParams()

    const spot = spots.find(spot=> spot._id == id)
    console.log(id,spot);

    
    return (
        <div>
            
        </div>
    );
};

export default Update;