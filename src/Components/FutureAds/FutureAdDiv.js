"use client"
import React,{useEffect} from "react";
import Script from "next/script";
const FutureAdDiv = ({ adId }) => {

  return (
    <div
      className=" w-[320px] h-[100px] md:w-[728px] md:h-[90px] "
      data-ad-slot={adId}
    >
      <Script
        id="futurehead-script"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== "undefined") {
            const { wapTag, wAPITag } = window;
              (wapTag.Init = window.wapTag.Init || []).push(function () {
                wAPITag.display(adId);
              });
          }
        }}
      />
    </div>
  );
};

export default FutureAdDiv;
