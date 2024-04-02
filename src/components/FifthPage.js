import React from 'react';

const FifthPage = ({handleContinue}) => {
  return (
    <>
   
   <div className="max-w-3xl w-full mx-autorounded-lg shadow-lg p-6 flex justify-center items-center flex-col  bg-white img-path1 fifth-parent ">
     <div className='flex 
      img-path1  justify-center'>
     <div className='w-[50%] '>
     <img src="/images/f1.png" alt="" />
     </div>
     <div 
     className='w-[50%] bg-white ml-7  flex justify-center items-center flex-col fifth-page'>
       <h1  className="text-3xl font-semibold mb-4 ">You're on your way!</h1>
       <p className='text-[20px] mr-20'>⭐ ⭐ ⭐ ⭐ ⭐ </p>
      <p>
      "Through its engaging and well-structured courses, Brilliant has taught me
       mathematical concepts that I previously struggled to understand. I now feel
      confident approaching both technical job interviews and real world problem
          solving situations."
          <br />
          <strong>-jacob.S</strong>
      </p>
   
     </div>
    
     </div>
     <div className='w-full flex justify-center'>
      <button
      className="mt-6 w-[30%] py-3 rounded-md bg-black  text-white hover:bg-gray-800 transition duration-300 "
      onClick={handleContinue}
    >
      Continue
    </button></div>
      </div>
      </>
    // <div>
    //   <h1>You're on your way!</h1>
    //   <div>
    //     <img src="path/to/monster-image.png" alt="Monster" />
    //     <div>
    //       <span>&#9733;</span>
    //       <span>&#9733;</span>
    //       <span>&#9733;</span>
    //       <span>&#9733;</span>
    //       <span>&#9733;</span>
    //     </div>
    //     <p>
    //       "Through its engaging and well-structured courses, Brilliant has taught me
    //       mathematical concepts that I previously struggled to understand. I now feel
    //       confident approaching both technical job interviews and real world problem
    //       solving situations."
    //     </p>
    //     <p>— Jacob S.</p>
    //   </div>
    //   <button       onClick={handleContinue}>Continue</button>
    // </div>
  );
};

export default FifthPage;