import React, { useEffect, useState } from 'react'
import sliderdata from '../Data/SliderData';
const Slider = () => {
  const [ImageIndex, setImageIndex] = useState(0)
  console.log("image index is ",ImageIndex)
  useEffect(() => {

    console.log("second")
     const SlideInterval=  setInterval(()=>{
         handleNext()
       },4000)

  return ()=>{
    console.log("first")
    clearInterval(SlideInterval)
    
  }
  }, [])
  
  const handleNext = () => {
    // Update to the next image, and reset to 0 if it's the last image
    // setImageIndex((prev) => prev+1 ==sliderdata.length ? 0:prev+1);

    setImageIndex((prev) => (prev+1) % sliderdata.length)
  }
  const handlePrev = () => {
    setImageIndex((prev) => prev == 0 ? sliderdata.length-1:prev-1);
  }

  return (
   <div className='relative size-[500px] m-auto border-2 border-black flex items-center'>
    
   
 <div className='w-full h-full'>
 <img src={sliderdata[ImageIndex].path} alt="" className='w-full h-full object-cover' 
 />
 </div>
 <div className="absolute bottom-4 left-1/2 flex gap-2">
    {sliderdata.map((_, index) => (
      
      <div
        key={index}
        className={`w-3 h-3 rounded-full ${
          index === ImageIndex ? "bg-black" : "bg-gray-400"
        }`}
      ></div>
    ))}
  </div>


  </div>
  
  
  )
}

export default Slider
