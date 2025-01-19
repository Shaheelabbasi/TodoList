
import React from 'react'

import Input from '../Components/Input'
import Button from '../Components/Button'
const Login = () => {
  return (
    <div className='m-auto size-[300px] border-2 border-black flex flex-col space-y-4 items-center p-10'>

        <Input type="email" placeholder='Enter your email'/>
        <Input type="password" placeholder='Enter your passsword'/>
      
    </div>
  )
}

export default Login
