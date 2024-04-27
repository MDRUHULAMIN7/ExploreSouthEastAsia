
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider;
const githubProvider = new GithubAuthProvider;
const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)
    const[loading,setLoading]=useState(true)
// register email
    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
// update user

const updateprofile=(name,photourl)=>{
    return updateProfile(auth.currentUser,{
        displayName:name,photoURL:photourl
    })
}

    // login email

    const signin=(email,password)=>{
        setLoading(false)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // logout email
const logOut =()=>{
    setLoading(true)
    return signOut(auth);

}

// google login

const LoginWithGoogle =()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider);
}
// github login

const LoginWithGithub=()=>{
    setLoading(true)
    return signInWithPopup(auth,githubProvider)
}
    // 
    useEffect(()=>{
        const Unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
            console.log('useeffect',currentUser);
        }) 
         return()=>{
            Unsubscribe()
        }    
    },[])

    const AuthInfo ={updateprofile,setUser,setLoading,user,loading,createUser,signin,logOut,LoginWithGoogle,LoginWithGithub}
   
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;