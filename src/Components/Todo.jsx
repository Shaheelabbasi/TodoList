import React, { useCallback, useEffect, useState } from 'react'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
const Todo = () => {
    const [Todos, setTodos] = useState([])

    const [CurrentTodo, setCurrentTodo] = useState("")
 const addTodo=(e)=>{
     e.preventDefault()
     setTodos((prev)=>[...prev,CurrentTodo])
     setCurrentTodo("")
    }
   
    
     function removeTodo(index){

        setTodos(()=>Todos.filter((todo,curr)=>curr!=index))
     }


   
    

  return (
    <div className=' border-2 border-black w-full h-[500px] m-auto'>
      
      <div className='w-full h-28 border-2 border-red-500 flex justify-center space-x-4 items-center'> 
        <form onSubmit={addTodo}>

     <input type="text" name="" id="add" className='w-48 h-10 border-2 border-black outline-none p-1'
     value={CurrentTodo}
     onChange={(e)=>setCurrentTodo(e.target.value)}
     
     />
     <button className='border-2 border-black w-32 h-10 rounded-md bg-blue-400' type='submit' >add todo</button>
        </form>
    </div>
<div>
    {
        Todos.map((todo,index)=>(
         <div key={index}
         className='h-18 border-2 border-red-600  flex space-x-10 items-center p-2 text-center justify-center' 
         >
           <input type='text' className='text-4xl p-2'
           id="edit"
           value={todo}
           readOnly
           ></input> 
           <div className='flex w-20 h-10  items-center justify-between'>
         <MdEdit   className='text-4xl cursor-pointer'/>
         <MdDelete  className='text-4xl cursor-pointer' onClick={()=>removeTodo(index)}/>
           </div>
         </div>
        ))
    }
</div>


      </div>
  )
}

export default Todo
