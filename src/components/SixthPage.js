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
      <img src="data:image/jpeg;base64,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" alt="Robot" />
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