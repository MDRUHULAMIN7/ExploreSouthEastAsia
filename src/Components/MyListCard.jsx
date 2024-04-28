

import { FaDollarSign } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const MyListCard = ({spot,myLists,SetMyLists}) => {
    const {_id,image,
        touristspotname,countryname,
        averagecost,
        seosanlity,
        traveltime,
        totalvisitor}=spot

        const handleDelete=_id=>{
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            })
            .then((result)=>{
                if(result.isConfirmed){
                    fetch(`http://localhost:5000/mylist/${_id}`,{
                        method:'DELETE'
                    })
                    .then(res =>res.json())
                    .then(data=>{
                        console.log(data);
                        if(data.deletedCount > 0){
                            Swal.fire(
                                'Deleted!',
                                'Your Tourist Spot has been deleted.',
                                'success'
                            )

                            const remainList =
                            myLists.filter(list => list._id !== _id);
                            SetMyLists(remainList)
                        }
                    })
                }
            })
        }
    return (
        <div className="card  bg-base-100 h-4/5 shadow-xl hover:scale-105 hover:shadow-2xl">
  <figure className="hover:-translate-y-px transition-shadow" ><img src={image} alt="Shoes" /></figure>
  <div className="card-body">

    <div className="flex gap-5">
        <div className="w-1/2 space-y-2 md:text-sm">
        <p className="text-2xl md:text-xl">{touristspotname} </p>
            <p className="flex items-center"><span>AverageCost </span>  : {averagecost} <FaDollarSign></FaDollarSign></p>
            <p><span>VisitTime</span> : {traveltime}</p>
        </div>
        <div className="space-y-2 md:text-sm">
            <p className="text-2xl md:text-xl">{countryname}</p>
            <p ><span>Season</span> : {seosanlity}</p>
            <p><span>PeopleVisited</span> : { totalvisitor} per year</p>
        </div>
    </div>
   
    <div className=" flex gap-2 justify-center items-center mt-3">

        <Link  to={`/spotdetails/${_id}`}>  <button className="btn btn-primary w-full"> Details</button></Link>
        <Link  to={`/updatemylist/${_id}`}>  <button className="btn btn-secondary w-full">Update</button></Link>
        <Link  >  <button onClick={()=>handleDelete(_id)} className="btn btn-accent w-full">Delete</button></Link>
    
    </div>
  </div>
</div>
    );
};
export default MyListCard;