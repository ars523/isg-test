'use client';
import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
// import Ad from './Ad';
const Ad = dynamic(() => import('./Ad'))

const AdT = ({ addId }: { addId: string }) => {
  const [rendered, setRendered] = React.useState(false);

  useEffect(() => {
    setRendered(true);
  }, []);

  return (
    <div className=" w-[320px] h-[100px] md:w-[970px] md:h-[90px] bg-gray-50">
      {
        rendered && (
          <Ad
            adId={addId}
          />
        )
      }
    </div>
  );
}

export default AdT;
