import React, { useState } from 'react'

function FirtsPage({handleContinue}) {
  const [isActive,setActive] = useState(false)
  const data = [
    {
      id: "1",
      imageUrl: "/images/1.png",
      title: "Student or soon to be enrolled"
    },
    {
      id: "2",
      imageUrl: "/images/2.png",
      title: "Professional pursuing a career"
    },
    {
      id: "3",
      imageUrl: "/images/3.png",
      title: "Parent of a school-age child"
    },
    {
      id: "4",
      imageUrl: "/images/4.png",
      title: "Lifelong learner"
    },
    {
      id: "5",
      imageUrl: "/images/6.png",
      title: "Teacher"
    },
    {
      id: "6",
      imageUrl: "/images/5.png",
      title: "Other"
    }
  ];


  
  return (
    <div className="max-w-2xl w-full mx-autorounded-lg shadow-lg p-6 flex flex-col justify-center items-center  first-page">
    <h2 className="text-3xl font-semibold mb-4">Which describes you best?</h2>
    <p className="mb-6">This will help us personalize your experience.</p>
    <div className="space-y-4 w-full">
          {data.map((item, index) => (
           <button className="flex items-center justify-between w-full px-4 py-3 rounded-md 0 border-2 border-white-300 hover:bg-gray-300 transition duration-300  "
          
           
           onClick={()=>setActive(true)}>
           <span className="flex items-center">
             <span className="mr-4 w-10 h-6"><img src={item.imageUrl} alt="" /></span>
             <span>{item.title}</span>
           </span>
         </button>
          ))}
      
   
     
     </div>
     <button
  className={`mt-6 w-[50%] py-3 rounded-md ${isActive ? 'bg-black' : 'bg-slate-400 pointer-events-none'} text-white `}
  onClick={handleContinue}
  disabled={!isActive}
>
  Continue
</button>


  </div>
  )
}

export default FirtsPage
