import { Link, NavLink } from "react-router-dom";
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

import pic from '../../public/title.png'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider.jsx/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const {user,logOut,loading}=useContext(AuthContext)
  const [theme,setTheme]=useState('light')
  useEffect(()=>{
    localStorage.setItem("theme",theme)
    const localtheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute("data-theme",localtheme)
  },[theme])
  const handlethemeChange =(e)=>{
    if(e.target.checked){
      setTheme("synthwave")
    }
    else{
      setTheme("light")
    }

  }
  console.log(user);

  if(loading){
    return <div className="flex justify-center items-center mx-auto  mt-24"><span className="loading loading-spinner text-primary"></span>
      <span className="loading loading-spinner text-secondary"></span>
      <span className="loading loading-spinner text-accent"></span>
      <span className="loading loading-spinner text-neutral"></span>
      <span className="loading loading-spinner text-info"></span>
      <span className="loading loading-spinner text-success"></span>
      <span className="loading loading-spinner text-warning"></span>
      <span className="loading loading-spinner text-error"></span></div>
  }

  const handleLogout=()=>{
    logOut()
    .then(()=>{
     toast.success('LogOut Succesfully')
    })
    .catch(error=>{
      toast.warning(error.message)
    })
  }
    return (
        <div className="navbar bg-rose-200 fixed z-10 px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

            <NavLink className={({isActive,isPending})=>
        isPending ? 'text-black' : isActive ?'text-rose-500' : ''} to={'/'}>Home</NavLink>
             <NavLink className={({isActive,isPending})=>
        isPending ? 'text-black' : isActive ?'text-rose-500' : ''} to={'/alltouristspots'}>AllTouristsSpot</NavLink>
           <NavLink className={({isActive,isPending})=>
        isPending ? 'text-black' : isActive ?'text-rose-500' : ''} to={'/addtouristspot'}>AddTouristsSpot</NavLink>
           <NavLink className={({isActive,isPending})=>
        isPending ? 'text-black' : isActive ?'text-rose-500' : ''} to={'/signup'}>Register</NavLink>

        {
          user ?   <NavLink className={({isActive,isPending})=>
          isPending ? 'text-black' : isActive ?'text-rose-500' : ''} to={'/mylist'}>MyList</NavLink> :''
        }
  

            </ul>
          </div >
          <Link to={'/'}>
          <a className=" text-lg">
            <div className="">
            <h1 className="flex justify-center"><img className="w-6" src={pic} alt="" /> <span>ExploreThe</span></h1> <h1 className="text-rose-500">SouthEastAsia</h1></div></a>
          </Link>
      
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4 text-base font-medium">

           <NavLink className={({isActive,isPending})=>
        isPending ? 'text-black' : isActive ?'text-rose-500' : ''} to={'/'}>Home</NavLink>
           <NavLink className={({isActive,isPending})=>
        isPending ? 'text-black' : isActive ?'text-rose-500' : ''} to={'/alltouristspots'}>AllTouristsSpot</NavLink>
           <NavLink className={({isActive,isPending})=>
        isPending ? 'text-black' : isActive ?'text-rose-500' : ''} to={'/addtouristspot'}>AddTouristsSpot</NavLink>
           <NavLink className={({isActive,isPending})=>
        isPending ? 'text-black hover:text-rose-500' : isActive ?'text-rose-500' : '' } to={'/signup'}>Register</NavLink>
            {
          user ?   <NavLink className={({isActive,isPending})=>
          isPending ? 'text-black' : isActive ?'text-rose-500' : ''} to={'/mylist'}>MyList</NavLink> :''
        }
           
       

          </ul>
        </div>
        <div className="navbar-end">
          {user ? <div className="flex text-lg font-semibold">
            <Tippy content={user.displayName}>
            <img className="h-12 w-12 mx-2 rounded-full border-2 border-rose-500" src={user.photoURL} alt="" /> 
            </Tippy>
      
           <button onClick={handleLogout} className="hover:text-rose-500">LogOut</button> </div> : <Link className="text-lg font-semibold hover:text-rose-500"  to={'/signin'}>Login</Link>}
           <div className="mx-2">
           <label className="cursor-pointer grid place-items-center">
  <input
  onChange={handlethemeChange}
   type="checkbox"
 
    className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
           </div>
       
        </div>
      </div>
    );
};

export default Navbar;