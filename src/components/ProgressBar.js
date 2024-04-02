import React from 'react'

function ProgressBar({progress}) {
  return (

       <> 
   
   <div className="fixed top-14 left-10 w-full z-10">
  <div className="w-[80vw] bg-gray-300 rounded-full h-2  mb-32 mt-2 progress-bar">
    <div
      className="bg-green-500 h-full rounded-full transition-all duration-500"
      style={{ width: `${progress}%` }}
    ></div>
  </div>
</div>
</>
  
  )
}

export default ProgressBar
