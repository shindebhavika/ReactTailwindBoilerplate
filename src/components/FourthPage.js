import React, { useState } from 'react';

const FourthPage = ({handleContinue}) => {

  const [isActive,setActive] = useState(false)
 

  return (
    <div className=' w-[80%] shadow-lg  flex flex-col justify-center items-center mt-24  mb-7 fourth-page  '>
      <div className='flex justify-center items-center flex-col mb-4'><h1 className="text-3xl font-semibold mb-4 ">What is your math comfort level?</h1>
      <p>Choose the highest level you feel confident in — you can always adjust later.</p></div>
      <div className='flex justify-center items-center p-7 flex-wrap btn4' onClick={()=>setActive(true)} >
        <button className=' border-2 border-white-300 p-7 hover:border-orange-300 shadow-md mr-3 bg-white ml-2 w-64 h-40 mb-3 '>
          <div className='mb-4'>5 × 1/2 = ?</div>
          <div className='font-bold'>Arithmetic</div>
          <div>Introductory</div>
        </button>
        <button  className=' border-2 border-white-300 p-7 hover:border-orange-300 shadow-md mr-3 bg-white w-64 h-40 mb-3'>
          <div  className='mb-4'>3x + 5 = 4</div>
          <div className='font-bold'>Basic Algebra</div>
          <div>Foundational</div>
        </button>
        <button className=' border-2 border-white-300 p-7 hover:border-orange-300 shadow-md mr-3 bg-white w-64 h-40 mb-3'>
          <div  className='mb-3'>x = (-b ± √(b^2 - 4ac)) / 2a</div>
          <div className='font-bold'>Intermediate Algebra</div>
          <div>Intermediate</div>
        </button>
        <button className=' border-2 border-white-300 p-7 hover:border-orange-300 shadow-md mr-3 bg-white w-64 h-40'>
          <div  className='mb-4'>∫ x^2 dx = ?</div>
          <div className='font-bold'>Calculus</div>
          <div>Advanced</div>
        </button>
      </div>
    
      <div className='w-full flex justify-center'>
      <button
  className={`mt-6 w-[30%] py-3 rounded-md mb-3 ${isActive ? 'bg-black' : 'bg-slate-400 pointer-events-none'} text-white `}
  onClick={handleContinue}
  disabled={!isActive}
>
  Continue
</button></div>
    </div>
  );
};

export default FourthPage;