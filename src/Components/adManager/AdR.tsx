'use client';
import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
// import Ad from './Ad'
const Ad = dynamic(() => import('./Ad'))


const AdR = ({ addId }: { addId: string }) => {
  const [rendered, setRendered] = React.useState(false);

  useEffect(() => {
    setRendered(true);
  }, []);

  return (

    <div className=" w-[300px] h-[250px] overflow-hidden bg-gray-50 ">
      {
        rendered && (
          <Ad adId={addId} />
        )
      }
    </div>

  );
};

export default AdR