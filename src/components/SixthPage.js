import { useEffect, useState } from "react";
import React from 'react';
import { ColorRing } from "react-loader-spinner"
const SixthPage = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000); // 2000 milliseconds = 2 seconds

    return () => clearTimeout(timer); // Cleanup function to clear the timer if component unmounts
  }, []);
  return (
    <div className=" w-[80%]  mx-autorounded-lg shadow-lg p-6 flex flex-col justify-center items-center sixth-parent">
     {showLoader ? (
       <div className=' flex flex-col justify-center items-center text-center'>
       <ColorRing
   visible={true}
   height="80"
   width="80"
   ariaLabel="color-ring-loading"
   wrapperStyle={{}}
   wrapperClass="color-ring-wrapper"
   colors={['	#ff7400', '	#ff4d00', '	#ff7400', '	#ff4d00', '	#ff4d00']}
   /><h1 className="text-2xl font-semibold mb-4"> Finding  Learning path recommedation for you based on your responses</h1>
       </div>
     ):(
      <div className='flex flex-col justify-center items-center text-center sixth-page'>
      <h1 className="text-2xl font-semibold mb-4"> Learning paths based on your answers</h1>
      <p>Choose one to get started. You can switch anytime.</p>
      <div>

      <div style={{ position: 'relative' }} >
<button className=' relative rounded-full bg-orange-500 p-2 text-[10px] text-black absolute top-7  z-10 right-44 popular'>
  <strong>MOST POPULAR</strong>
</button>

<div className='flex p-3 course'>
  <div className='border-2 border-white-300 flex p-7 mr-3 img-path'>
    <div>
      <strong>Foundational Math Build</strong>
      <p>Your foundational skills in algebra, geometry, and probability.</p>
    </div>
    <div>
      <img src="/images/six1.png" alt="Robot" />
    </div>
  </div>
  <div className='border-2 border-white-300 flex p-7 img-path'>
    <div>
      <strong>Mathematical Thinking</strong>
      <p>Build your foundational skills in algebra, geometry, and probability.</p>
    </div>
    <div>
      <img src="/images/six1.png" alt="Robot" />
    </div>
  </div>
</div>
</div>

      </div>
    </div>
     )}

   
    </div>
  );
};

export default SixthPage;