import React, { useState } from 'react'

const SecondPage = ({handleContinue}) => {
  const [isActive,setActive] = useState(false)
  const data = [
    {
      id: "1",
      imageUrl: "/images/s1.png",
      title: "Learning specific skills to advance my career"
    },
    {
      id: "2",
      imageUrl: "/images/s2.png",
      title: "Learning specific skills to advance my career"
    },
    {
      id: "3",
      imageUrl: "/images/s3.png",
      title: "Parent of a school-age child"
    },
    {
      id: "4",
      imageUrl: "/images/s4.png",
      title: "Lifelong learner"
    },
    {
      id: "5",
      imageUrl: "/images/s5.png",
      title: "Teacher"
    },
    
  ];
  return (

    <div className="max-w-2xl w-full mx-autorounded-lg shadow-lg p-6 flex flex-col justify-center items-center second-page">
    <h2 className="text-3xl font-semibold mb-4">Which are you most interested in?</h2>
    <p className="mb-6">Choose just one. This will help us get you started (but won't limit your experience).</p>
    <div className="space-y-4 w-full">
          {data.map((item, index) => (
           <button className="flex items-center justify-between w-full px-4 py-3 rounded-md 0 hover:border-2 border-orange-300 transition duration-300" onClick={()=>setActive(true)}>
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
    // <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    //   <div className="max-w-md w-full mx-auto bg-white rounded-lg shadow-lg p-6">
    //     <div className="flex items-center mb-4">
    //       <span className="mr-2 text-gray-600">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //           className="h-6 w-6"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth={2}
    //             d="M10 19l-7-7m0 0l7-7m-7 7h18"
    //           />
    //         </svg>
    //       </span>
    //       <h2 className="text-lg font-semibold">Which are you most interested in?</h2>
    //     </div>
    //     <p className="text-gray-600 mb-6">
    //       Choose just one. This will help us get you started (but won't limit your experience).
    //     </p>
    //     <div className="space-y-4">
    //       <button className="flex items-center justify-between w-full px-4 py-3 rounded-md bg-gray-200 hover:bg-gray-300 transition duration-300">
    //         <span className="flex items-center">
    //           <span className="mr-2">📈</span>
    //           <span>Learning specific skills to advance my career</span>
    //         </span>
    //       </button>
    //       <button className="flex items-center justify-between w-full px-4 py-3 rounded-md bg-gray-200 hover:bg-gray-300 transition duration-300">
    //         <span className="flex items-center">
    //           <span className="mr-2">🌍</span>
    //           <span>Exploring new topics I'm interested in</span>
    //         </span>
    //       </button>
    //       <button className="flex items-center justify-between w-full px-4 py-3 rounded-md bg-gray-200 hover:bg-gray-300 transition duration-300">
    //         <span className="flex items-center">
    //           <span className="mr-2">✖️</span>
    //           <span>Refreshing my math foundations</span>
    //         </span>
    //       </button>
    //       <button className="flex items-center justify-between w-full px-4 py-3 rounded-md bg-gray-200 hover:bg-gray-300 transition duration-300">
    //         <span className="flex items-center">
    //           <span className="mr-2">🎯</span>
    //           <span>Exercising my brain to stay sharp</span>
    //         </span>
    //       </button>
    //       <button className="flex items-center justify-between w-full px-4 py-3 rounded-md bg-gray-200 hover:bg-gray-300 transition duration-300">
    //         <span className="flex items-center">
    //           <span className="mr-2">📚</span>
    //           <span>Something else</span>
    //         </span>
    //       </button>
    //     </div>
    //     <button className="mt-6 w-full py-3 rounded-md bg-black text-white hover:bg-gray-800 transition duration-300" onClick={handleContinue}>
    //       Continue
    //     </button>
    //   </div>
    // </div>
  );
};

export default SecondPage;