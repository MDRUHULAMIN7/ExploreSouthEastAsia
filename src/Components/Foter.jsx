import { Link } from "react-router-dom";

import pic from '../../public/title.png'
import { ImFacebook2 } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Foter = () => {
    return (
        <div>
  <footer className="footer p-10 pt-10 bg-base-200 text-base-content">
  <aside>
  <Link to={'/'}>
          <a href="#slidehome" className=" text-lg">
            <div className="">
            <h1 className="flex justify-center"><img className="w-6" src={pic} alt="" /> <span>ExploreThe</span></h1> <h1 className="text-rose-500">SouthEastAsia</h1></div></a>
          </Link>
    <p>ExploreTheSouthEastAsia<br/>Providing reliable TouristSpots since 2012</p>
  </aside> 


 
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Tourist Spot</a>
    <a className="link link-hover">Tours</a>
    <a className="link link-hover">Exploring</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <Link to={''}></Link>
    <a href="#slideabout" className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Tours</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Social</h6> 
    <div className="space-y-3">
    <Link className="flex items-center gap-3">Facebook<ImFacebook2></ImFacebook2></Link>
      <div className="my-4">
      <Link className="flex items-center gap-3"><span>Twiter</span><FaTwitter></FaTwitter></Link>
      </div>
   
   
   <Link className="flex items-center gap-3">Youtube<FaYoutube></FaYoutube></Link>
    </div>
  </nav>
 
  
</footer>
<footer className="footer footer-center p-4 bg-base-200 text-base-content">
  <aside>
    <p>Copyright © 2024 - All right reserved by Providing reliable TouristSpots since 2012</p>
  </aside>
</footer>
        </div>
      

    );
};

export default Foter;