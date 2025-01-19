import React, { useEffect, useState } from 'react'

const List = ({abc}) => {
    const [items, setitems] = useState([])
    useEffect(()=>{
       setitems(abc())
       console.log("updating items")
    },[abc])
  return items.map((item)=><div>{item}</div>)
}

export default List
