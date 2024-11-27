'use client';
import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'

const BDAxisAd = dynamic(() => import('./BDAxisAd'))

function BDAxisAdWrapper({ adId }: { adId: string }) {
    const [rendered, setRendered] = React.useState(false);

    useEffect(() => {
        setRendered(true);
    }, []);

    return (
        <>
            {rendered && (
                <BDAxisAd adId={adId} />
            )}
        </>
    )
}

export default BDAxisAdWrapper