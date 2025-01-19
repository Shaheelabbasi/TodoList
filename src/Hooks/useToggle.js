import React, { useState } from 'react'

const useToggle = (InitialState=false) => {
 const [IsToggled, setIsToggled] = useState(InitialState)

 const Toggle=()=>setIsToggled((prev)=>!prev)

 return [
    IsToggled,
    Toggle
 ]
}

export default useToggle
