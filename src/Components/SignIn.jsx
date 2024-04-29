import { Link, useLocation, useNavigate } from "react-router-dom";

import google from '../../public/google.png'
import github from '../../public/github.png'
import { IoIosEye } from "react-icons/io";
import { IoEyeOffSharp } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../AuthProvider.jsx/AuthProvider";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthProvider.jsx/AuthProvider";
const SignIn = () => {
  const {signin,setUser,user,LoginWithGithub,LoginWithGoogle}=useContext(AuthContext)
  const [showpassword,setShoepassword]=useState(false);
  const navigate = useNavigate()
  const location= useLocation
//  email login
    const Handlelogin =e =>{
        e.preventDefault();
        const form = e.target;
       
        const email = form.email.value;
        const password = form.password.value;
        
        const user ={email,password}
        signin(email,password)
        .then(result =>{
          console.log(result.user);
          navigate('/')
          e.target.reset()
         
          setUser(result.user)
  toast('Login Successfully')
        })
        .catch(error=>{
          console.error(error)
          toast(error.message)
        })
        console.log(user);
    }

    // google login

    const HandleGoogle=()=>{
      LoginWithGoogle()
      .then(result=>{
        navigate('/')
       console.log(result.user);
     
     
        toast.success('Login Successfully')
      })
      .catch(error=>{
        console.error(error)
        toast.warning(error.message)
  
      })
    }

    // Github Login
    const HandleGithub=()=>{
      LoginWithGithub()
      .then(result=>{
        console.log(result.user);

        navigate('/')
        toast.success('Login Successfully')
      })
      .catch(error=>{
        console.error(error)
        toast.warning(error.message)
      })
    }
    // 


    useEffect(()=>{
      if(user){
        navigate(location.state)
      }
    },[user,location.state,navigate])
    return (
        <div className="hero pt-16 min-h-screen ">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-4xl  font-bold">Please Login </h1>
            
          </div>
          <div className="card shrink-0 w-full max-w-sm  bg-base-300">
            <form onSubmit={Handlelogin} className="card-body">
             
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

            


             
         
            
              <div className="form-control mt-3">
                <button className="btn btn-primary bg-rose-200 text-black border-none">login</button>
              </div>
             
            </form>


            {/* 
             */}

                
    
           
          
             
             
<button onClick={HandleGoogle} className="rounded-xl p-2 mb-3 mx-auto border-2 bg-rose-200 border-gray-300"> <h1 className="
                flex justify-center items-center ">  <button ><img className="h-6 mr-2" src={google} alt="" /></button>Continue With Google</h1></button>

<button onClick={HandleGithub} className="rounded-xl p-2 mx-auto border-2 bg-rose-200 border-gray-300"> <h1 className="
                flex justify-center items-center ">  <button ><img className="h-6 mr-2" src={ github} alt="" /></button>Continue With Github</h1></button>
                  <h1 className="text-center my-2">Do not  have any account <Link to={'/signup'} className="text-purple-500">Register</Link></h1>
          </div>
        
        </div>
      </div>
    );
};

export default SignIn;