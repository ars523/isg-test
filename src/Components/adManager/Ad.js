// Ad.js
"use client"
import React from "react";
import { UseAdSlot } from "./UseAdSlot";
import { ads } from "./Ads";
import cn from "@/lib/cn";
import useTransitionState from "./useTransitionState";

function Ad({ adId }) {
  const {isTransitioning} = useTransitionState();
  const ad = ads[adId];
  

  UseAdSlot({
    mapping: ad.mapping,
    sizes: ad.sizes,
    id: adId,
    divId: ad.divId,
    isTransitioning,
  });

  return (
    
      <div id={`div-gpt-ad-${ad.divId}`} />
    
  );
}

export default Ad;
