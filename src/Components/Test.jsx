import React,{useEffect, useState} from 'react'

const Test = () => {



    useEffect(() => {
        // let i=0
        // const interval = setInterval(() => {
        //   console.log('Timer running...',+i);
        //   i++
        // }, 1000);

        console.log('i am called')
        return ()=>{
        // clearInterval(interval)

        console.log('return vala')
        }
    },[])
  return (
    <div>
    Timer Component
    </div>
  )
}

export default Test
