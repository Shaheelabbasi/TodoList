import { Children, createContext,useState,useContext } from "react";




//the create context  can be kept empty as it is 
// we can use the value propertyy of the provider to pass the values
// it bascialy contains the state and methods to update the state
//

//above is same as 

  const ThemeContext=createContext()
 const ThemeProvider=({children})=>{
   const [DarkTheme, setDarkTheme] = useState(false)
return(

    <ThemeContext.Provider value={{DarkTheme,setDarkTheme}}>

    {children}
    </ThemeContext.Provider>
)

}

function useTheme(){

    return useContext(ThemeContext)
}

export  {useTheme,ThemeProvider}