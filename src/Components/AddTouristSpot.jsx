import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../AuthProvider.jsx/AuthProvider';

const AddTouristSpot = () => {

  const{user}=useContext(AuthContext)
  const{displayName,email}=user

    const handleAddSpot=(e)=>{
        e.preventDefault();
    
     
        const image = e.target.image.value;
        const touristspotname =e.target.touristspotname.value;
        const countryname = e.target.countryname.value;
        const location = e.target.location.value;
        const averagecost = e.target.averagecost.value;
        const seosanlity = e.target.seasonality.value;
        const traveltime = e.target.traveltime.value;
        const totalvisitor = e.target.totalvisitorperyear.value;
        const username = e.target.name.value;
        const email =e.target.email.value;
        const description =e.target.shortdescription.value;
console.log(image);
        const  touristspot = {image,touristspotname,countryname,location,averagecost,seosanlity,traveltime,totalvisitor,username,email,description}

console.log(touristspot);

fetch(`https://y-xi-rose.vercel.app/spots`,{
    method:"POST",
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(touristspot)
})
.then(res =>res.json())
.then(data=>{
  if(data.insertedId){
    Swal.fire({
      title: 'Success!',
      text: 'Tourist Spot Added Successfully',
      icon: 'success',
      confirmButtonText: 'Cool'
    })
  }
    console.log(data);
})
    }
    return (
        <div className=" h-4/6 w-5/6 mx-auto pt-20 bg-base-200">
        <div className=" flex-col">
          <div className="text-center ">
            <h1 className="text-3xl font-bold">Add Tourist Spot</h1>
       
          </div>
          <div className="card shrink-0 w-full shadow-2xl bg-rose-200">
            <form onSubmit={handleAddSpot} className="card-body grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
              <div className="e.target-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input type="text" name="image" placeholder="use image url" className="input input-bordered" required />
              </div>
              <div className="e.target-control">
                <label className="label">
                  <span className="label-text">Tourist Spot Name</span>
                </label>
                <input type="text" placeholder="tourist spot name" name="touristspotname" className="input input-bordered" required />
               
              </div>


            
              <div className="e.target-control">
                <label className="label">
                  <span className="label-text">Country Name</span>
                </label>

                <select className='px-12 py-3 rounded-xl' name="countryname">
             
                <option value={"bangladesh"}>Bangladesh</option>
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
                <input type="text" placeholder="location" name="location" className="input input-bordered" required />
               
              </div>
              <div className="e.target-control">
                <label className="label">
                  <span className="label-text">Average Cost</span>
                </label>
                <input type="number" placeholder="average cost" name="averagecost" className="input input-bordered" required />
               
              </div>
              <div className="e.target-control">
                <label className="label">
                  <span className="label-text">Season</span>
                </label>
                <input type="text" name="seasonality" placeholder="sesonality" className="input input-bordered" required />
               
              </div>
              <div className="e.target-control">
                <label className="label">
                  <span className="label-text">Travel Time</span>
                </label>
                <input type="text" placeholder="traveltime" name="traveltime" className="input input-bordered" required />
               
              </div>
              <div className="e.target-control">
                <label className="label">
                  <span className="label-text">TotalVisitorPerYear</span>
                </label>
                <input type="text" placeholder="total visitors per year" className="input input-bordered" name="totalvisitorperyear" required />
               
              </div>
              <div className="e.target-control">
                <label className="label">
                  <span className="label-text">UserName</span>
                </label>
                <input type="text" placeholder="inputname" value={displayName} className="input input-bordered" name="name" required />
               
              </div>
              <div className="e.target-control ">
                <label className="label">
                  <span className="label-text">UserEmail</span>
                </label>
                <input type="email" readOnly value={email} placeholder="inputemail" className="input input-bordered" name="email" required />
               
              </div>
              <div className="e.target-control lg:col-span-2 w-full md:col-span-2 col-span-1">
                <label className="label">
                  <span className="label-text">ShortDescription</span>
                </label>
                <input type="text" placeholder="shortDescription" className="input input-bordered w-full" name="shortdescription" required />
               
              </div>
              <div className="e.target-control mt-6 lg:col-span-3 md:col-span-2 col-span-1">
                <button className="btn bg-rose-500 w-full">Add Tourist Spot</button>
              </div>
            </form>
         
          </div>
        </div>
      </div>
    );
};

export default AddTouristSpot;