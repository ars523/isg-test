'use client';
import React, { useEffect } from "react";
import dynamic from 'next/dynamic'

// import RITSad from "./RITSad";
const RITSad = dynamic(() => import('./RITSad'))


export default function RITSadWrapper({ adId, className }: { adId: string, className: string }) {

  const [rendered, setRendered] = React.useState(false);

  useEffect(() => {
    setRendered(true);
  }, []);

  return <>{
    rendered && (
      <RITSad adId={adId} className={className} />
    )
  }</>;
}
