import React, { useContext, useState } from 'react';
import { useAuth } from '../Context/Auth';
const Login = () => {
const {LoggedIn,Userdata,SetLoggedIn,SetUserdata}=useAuth()

function handleLogin(){
console.log("I am called")
    SetLoggedIn((prev)=>!prev)
    SetUserdata({name:"shaheel"})
}
    return (

        
       <div>


                    <button 
                        type="submit" 
                        className="w-full p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none"
                        onClick={handleLogin}
                    >
                       Toggle Login
                    </button>
<h1> status is  {LoggedIn ? "ok":"not ok"}</h1>     
<h1>User data:{Userdata ? Userdata.name:"no user data"}</h1>       
       </div>
             
    );
};

export default Login;
