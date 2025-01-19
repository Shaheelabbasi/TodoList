import React,{useState} from 'react'
import { FaChevronDown } from "react-icons/fa";
import faqs from '../Data/faqs';
const MyAcordian = () => {

    const [OpenIndex, setOpenIndex] = useState(null)
    const ToggleAcordian=(index)=>{
        console.log("state index is ",OpenIndex)
        console.log("passed value is  ",index)
        if (OpenIndex === index) {
            // Close the currently open answer
            setOpenIndex(null); // No answer is open
        } else {
            // Open the clicked answer
            console.log("I am here")
            setOpenIndex(index); // Open the answer for the clicked question
        }
    }

  return (
    <div className='p-6'>
      <h2>Frequently Asked Questions</h2>

{
    faqs.map((faq,index)=>(
        <div className='border-2 border-red-500 rounded-md mb-4'
        // key={index}
        
        >
       <div className='flex justify-between'
       onClick={()=>ToggleAcordian(index)}
       
       >
            <span>{faq.Question}</span>
            <FaChevronDown/>
        </div>

{
// the answer div
   OpenIndex === index &&(
        <div>
        <span>
            {faq.Answer}
        </span>
    </div>
    )
}
      

      </div>
    ))
}
       
    </div>
  )
}

export default MyAcordian
