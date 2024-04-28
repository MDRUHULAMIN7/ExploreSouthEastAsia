import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {

    const spots =useLoaderData();
    console.log(spots);

    const{id}=useParams()

    const spot = spots.find(spot=> spot._id == id)
    console.log(id,spot);

    const {_id,image,
        touristspotname,countryname,
        averagecost,
        seosanlity,
        location,
        description,
        traveltime,
        totalvisitor}=spot

        
    const handleUpdateSpot=(e)=>{
        e.preventDefault();
    
     
        const image = e.target.image.value;
        const touristspotname =e.target.touristspotname.value;
        const countryname = e.target.countryname.value;
        const location = e.target.location.value;
        const averagecost = e.target.averagecost.value;
        const seosanlity = e.target.seasonality.value;
        const traveltime = e.target.traveltime.value;
        const totalvisitor = e.target.totalvisitorperyear.value;
       
        const description =e.target.shortdescription.value;
console.log(image);
        const  updatedspot = {image,touristspotname,countryname,location,averagecost,seosanlity,traveltime,totalvisitor,description}

    // send data to server 
    fetch(`http://localhost:5000/mylist/${_id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify( updatedspot)
    })
    .then(res=> res.json())
    .then(data=>{
        console.log(data);
        if(data.modifiedCount > 0){
            Swal.fire({
                title: 'Success!',
                text: 'TouristSpot Updated Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        }
    })



}
    return (
        <div className="pt-10 mx-4">
              <div className="card shrink-0 w-full mt-10 shadow-2xl bg-rose-200">
                <h1 className="text-center lg:text-3xl text-2xl text-rose-400 my-3">Update Tourist Spot Here !</h1>
            <form onSubmit={handleUpdateSpot} className="card-body grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
              <div className="e.target-control lg:col-span-2">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input type="text"  defaultValue={image} name="image" placeholder="use image url" className="input input-bordered w-full" required />
              </div>
              <div className="e.target-control">
                <label className="label">
                  <span className="label-text">Tourist Spot Name</span>
                </label>
                <input type="text" defaultValue={touristspotname} placeholder="tourist spot name" name="touristspotname" className="input input-bordered w-full" required />
               
              </div>


            
              <div className="e.target-control">
                <label className="label">
                  <span className="label-text">Country Name</span>
                </label>

                <select className='px-12 py-3 rounded-xl w-full' name="countryname">
             
                <option defaultValue={countryname} value={"bangladesh"}>Bangladesh</option>
                <option value={"Thailand"}>Thailand</option>
                <option value={"Indonesia"}>Indonesia</option>
                <option value={"Malysia"}>Malysia</option>
                <option value={"Vietnam"}>Vietnam</option>
                <option value={"Combodia"}>Combodia</option>

                </select>
               
              </div>
              <div className="e.target-control">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input type="text" defaultValue={location} placeholder="location" name="location" className="input input-bordered w-full" required />
               
              </div>
              <div className="e.target-control">
                <label className="label">
                  <span className="label-text">Average Cost</span>
                </label>
                <input type="number" defaultValue={averagecost} placeholder="average cost" name="averagecost" className="input input-bordered w-full" required />
               
              </div>
              <div className="e.target-control">
                <label className="label">
                  <span className="label-text">Season</span>
                </label>
                <input type="text" defaultValue={seosanlity} name="seasonality" placeholder="sesonality" className="input input-bordered w-full" required />
               
              </div>
              <div className="e.target-control">
                <label className="label">
                  <span className="label-text">Travel Time</span>
                </label>
                <input type="text" placeholder="traveltime" defaultValue={traveltime} name="traveltime" className="input input-bordered w-full" required />
               
              </div>
              <div className="e.target-control">
                <label className="label">
                  <span className="label-text">TotalVisitorPerYear</span>
                </label>
                <input type="text" defaultValue={totalvisitor} placeholder="total visitors per year" className="input input-bordered w-full" name="totalvisitorperyear" required />
               
              </div>
            
           
              <div className="e.target-control lg:col-span-3 w-full md:col-span-2 col-span-1">
                <label className="label">
                  <span className="label-text">ShortDescription</span>
                </label>
                <input type="text" placeholder="shortDescription" defaultValue={description}  className="input input-bordered w-full" name="shortdescription" required />
               
              </div>
              <div className="e.target-control mt-6 lg:col-span-3 md:col-span-2 col-span-1">
                <button className="btn bg-rose-400 w-full">Update Tourist Spot</button>
              </div>
            </form>
         
          </div>
        </div>
    );
};

export default Update;