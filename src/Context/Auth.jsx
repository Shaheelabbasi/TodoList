import { Children, createContext,useState,useContext } from "react";


const AuthContext=createContext({
    LoggedIn:false,
    Userdata:null,
    SetLoggedIn:()=>{},
    SetUserdata:()=>{}

})

//the create context  can be kept empty as it is 
// we can use the value propertyy of the provider to pass the values
// it bascialy contains the state and methods to update the state
//

//above is same as 

  //const AuthContext=createContext()
 const AuthProvider=({children})=>{
    const [LoggedIn, SetLoggedIn] = useState(false);
    const [Userdata, SetUserdata] = useState(null);
return(

    <AuthContext.Provider value={{LoggedIn,Userdata,SetLoggedIn,SetUserdata}}>

    {children}
    </AuthContext.Provider>
)

}

function useAuth(){

    return useContext(AuthContext)
}

export  {useAuth,AuthProvider}