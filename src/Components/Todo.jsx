import React, { useCallback, useEffect, useState } from 'react'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import useToggle from '../Hooks/useToggle';
import { FaSave } from "react-icons/fa";

const Todo = () => {
    const [Todos, setTodos] = useState([])

    const [CurrentTodo, setCurrentTodo] = useState("")
    const [TodoIndex, setTodoIndex] = useState(null)
    const [UpdatedTodo, setUpdatedTodo] = useState("")
 const addTodo=(e)=>{
     e.preventDefault()
     setTodos((prev)=>[...prev,CurrentTodo])
     setCurrentTodo("")
    }
   
    
     function removeTodo(index){

        setTodos(()=>Todos.filter((todo,curr)=>curr!=index))
     }
   
   function updateTodo(){
 
    setTodos(()=>Todos.map((todo,index)=>index==TodoIndex ? UpdatedTodo:todo))
     setTodoIndex(null)
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
   
    { TodoIndex !=index ?
            <input type='text' className="text-4xl p-2"
            id="edit"
            value={todo}
            ></input> 
              :
           <input type="text" id="mera"
           className="text-4xl p-2 border-2 border-black"
           onChange={(e)=>setUpdatedTodo(e.target.value)}
           />
          }


           <div className='flex w-20 h-10  items-center justify-between'>
         {
          TodoIndex !=index ?
         <MdEdit   className="text-4xl cursor-pointer" onClick={()=>setTodoIndex(index)} /> :
         <FaSave className='text-4xl cursor-pointer' onClick={()=>updateTodo()} />
         
        }
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
