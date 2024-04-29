

import { FaDollarSign } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const MyListCard = ({spot,myLists,SetMyLists}) => {
    const {_id,image,
        touristspotname,location,
        averagecost
        
        }=spot

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
                    fetch(`https://y-xi-rose.vercel.app/mylist/${_id}`,{
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
        
       <div>
         


<div className="overflow-x-auto mx-8">
<img src={image} className="h-64 w-full rounded-t-xl" alt="" />
  <table className="table">
   
    {/* head */}
    <thead>
      <tr>
        
        <th>SpotName </th>
        <th>Location</th>
        <th>AverageCost</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        
        <td>{touristspotname}</td>
        <td>{location}</td>
        <td className="flex gap1 items-center">{averagecost}<FaDollarSign></FaDollarSign></td>
      </tr>
      {/* row 2 */}
      <tr>
      
        <td>
        <Link  to={`/updatemylist/${_id}`}>  <button className="btn btn-secondary w-full">Update</button></Link></td>
        <td><Link  >  <button onClick={()=>handleDelete(_id)} className="btn btn-accent w-full">Delete</button></Link></td>
        
      </tr>
    
    </tbody>
  </table>
</div>
       </div>
    );
};
export default MyListCard;