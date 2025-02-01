import React from 'react'
import { useTheme } from '../Context/Theme'

const Theme = () => {
    const{DarkTheme,setDarkTheme}=useTheme()
  return (
    <div>
      <button onClick={()=>setDarkTheme((prev)=>!prev)}>

        Toggle theme
      </button>

      <div className={DarkTheme ? "text-white bg-black":"text-black bg-white"}>


<h1 className=''>I am the sdjkdh sdhsjkdhsjkdhk</h1>
      </div>
    </div>
  )
}

export default Theme
