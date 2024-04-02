import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import SecondPage from './SecondPage';
import FirtsPage from './FirtsPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import FifthPage from './FifthPage';
import SixthPage from './SixthPage';

function HomePage() {
  const [progress, setProgress] = useState(0);
  const [pageNo, setPageNo] = useState(1);

  const handleContinue = () => {
    setProgress((prevProgress) => {
      setPageNo(pageNo + 1);
      const newProgress = prevProgress + 25;
      return newProgress > 100 ? 100 : newProgress;
    });
  };

  const handleBack = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
      setProgress((prevProgress) => prevProgress - 25);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen ">
      <div className="absolute top-0 left-0 w-full">
    {pageNo !== 1 && (
      <button onClick={handleBack} className="absolute top-10 mr-2 btn">
        <img src="/images/back.png" alt="" className="h-6 mt-4 ml-4" />
      </button>
    )}
  </div>
  <ProgressBar progress={progress} />
  {pageNo === 1 && <FirtsPage handleContinue={handleContinue} />}
  {pageNo === 2 && <SecondPage handleContinue={handleContinue} />}
  {pageNo === 3 && <ThirdPage handleContinue={handleContinue} />}
  {pageNo === 4 && <FourthPage handleContinue={handleContinue} />}
  {pageNo === 5 && <FifthPage handleContinue={handleContinue} />}
  {pageNo === 6 && <SixthPage handleContinue={handleContinue} />}
    </div>
  );
}

export default HomePage;
