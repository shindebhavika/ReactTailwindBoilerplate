import React from 'react';

const ThirdPage = ({handleContinue}) => {
  return (
   <>
   
   <div className="max-w-3xl w-full mx-autorounded-lg shadow-lg p-6 flex justify-center items-center flex-col  bg-white  first-page">
     <div className='flex
     third-page'>
     <div className='w-[50%] '>
     <img src="/images/t1.png" alt="" />
     </div>
     <div 
     className='w-[50%] bg-white ml-7  flex justify-center items-center flex-col'>
       <h1  className="text-3xl font-semibold mb-4 ">You're in the right place</h1>
      <p>
        Brilliant gets you hands-on to help improve your professional skills and
        knowledge. You'll interact with concepts and solve fun problems in math,
        science, and computer science.
      </p>
     
     </div>
    
     </div>
     <div className='w-full flex justify-center'>
      <button
      className="mt-6 w-[50%] py-3 rounded-md bg-black  text-white "
      onClick={handleContinue}
    >
      Continue
    </button></div>
      </div>
      </>

  );
};

export default ThirdPage;