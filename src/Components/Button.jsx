import React from 'react'

const Button = ({text='click'}) => {
  return (
    <button className=' bg-blue-500 text-3xl p-2 rounded-md text-white w-32'>
      {text}
    </button>
  )
}

export default Button
