import React from "react";
import {UseAnchorSlot} from "./UseAnchorSlot"
import { ads } from "@/Components/adManager/Ads";
// import useAnchorTransitionState from './useAnchorTransitionState';

const AdWithAnchor = ({ adId }) => {
  // const {isTransitioningAnchor} = useAnchorTransitionState();

  const ad = ads[adId];

UseAnchorSlot({
    mapping: ad.mapping,
    sizes: ad.sizes,
    id: adId,
    divId: ad.divId,
    // isTransitioningAnchor,
  });

  return <div id={`div-gpt-ad-${ad.divId}`} />;
};

export default AdWithAnchor;
