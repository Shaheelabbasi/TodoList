import React from 'react'

const Input = ({type,placeholder}) => {
  return (
 <div className='border-2 border-black w-52 rounded-md'>
    <input type={type} placeholder={placeholder}
    
    className='w-full h-10 p-2  focus:outline-none'
    
    />
 </div>
  )
}

export default Input
