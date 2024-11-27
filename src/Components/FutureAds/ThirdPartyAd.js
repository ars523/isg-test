"use client"
import React from 'react';
import { UseThirdPartyAdSlot } from './UseThirdPartyAdSlot';

const ThirdPartyAd = ({ adSlot }) => {
  UseThirdPartyAdSlot({
    width: 728,
    height: 90,
    adSlot: adSlot,
  });

  return <div className="third-party-ad" />;
};

export default ThirdPartyAd;