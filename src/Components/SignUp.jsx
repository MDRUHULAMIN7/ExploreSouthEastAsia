import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { IoIosEye } from "react-icons/io";
import { IoEyeOffSharp } from "react-icons/io5";
import { AuthContext } from "../AuthProvider.jsx/AuthProvider";

const SignUp = () => {

    const{createUser,setUser,updateprofile}=useContext(AuthContext);
    const [showpassword,setShoepassword]=useState(false)
    const[registererror,setRegistereror]=useState('')
    const navigate = useNavigate()
    const Handleregiter =e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        setRegistereror('')
        const photourl= form.photourl.value;
        const user ={name,email,password,photourl}
      
        if(password.length < 6){
            setRegistereror('Password Should be at leats 6 character !');
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setRegistereror('password should be a uppercase character')
            return;
        }
        else if(!/[a-z]/.test(password)){
            setRegistereror('password should be a lowercase character')
            return;
        }
        createUser(email,password)
        .then(result=>{
            console.log(result.user);

            updateprofile(name,photourl)
            .then(()=>{

              e.target.reset()
              navigate('/')
            })
         
            setUser(result.user)
            toast('Register Succesfully')
            return;
        })
        .catch(error=>{
            console.error(error)
            toast(error)
        })
    
        console.log(user);

    }
    return (
        <div className="hero min-h-screen pt-20 bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-5xl text-secondary font-bold">Please Register </h1>
            
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={Handleregiter} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" className="input input-bordered" name="name" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={showpassword ? "text" :"password"  } name="password"
                 placeholder="password" className="input input-bordered" required />
                 <span className="absolute top-12 right-6" onClick={()=>setShoepassword(!showpassword)}>
                  {showpassword ?  <IoIosEye></IoIosEye> :   <IoEyeOffSharp></IoEyeOffSharp>}
                 </span>
             
            
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoUrl</span>
                </label>
                <input type="text"  name="photourl" placeholder="PhotoUrl" className="input input-bordered" required />
              </div>
              <p className="text-red-600 font-semibold">{registererror}</p>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-rose-200 text-black border-none">Regiter</button>
              </div>
              <h1 className="text-center">Do you have any account <Link to={'/signin'} className="text-purple-500">Login</Link></h1>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;