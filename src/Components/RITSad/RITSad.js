"use client";
import React, { useEffect, useLayoutEffect } from "react";
import Script from "next/script";
import cn from "@/lib/cn";
const RITSad = ({ adId, className }) => {
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     // const { wapTag, wAPITag } = window;
  //     const wapTag = window?.wapTag;
  //     const wAPITag = window?.wAPITag;

  //     if (wapTag && wAPITag) {
  //       (wapTag.Init = window?.wapTag?.Init || [])?.push(function () {
  //         wAPITag?.display(adId);
  //       });
  //     }
  //   }
  // }, [adId]);
  useEffect(() => {
    const wapTag = window?.wapTag;
    const wAPITag = window?.wAPITag;

    if (wapTag && wAPITag) {
      (wapTag.Init = window?.wapTag?.Init || [])?.push(function () {
        wAPITag?.display(adId);
      });
    }
  }, [adId]);
  return (
    <>
      <div className={cn(``, className)}>
        <div
          className="futureads"
          data-ad-slot={adId}
          // data-id={adId}
          // lazyload="true"
        ></div>

        <Script
          id="RITS-script-body"
          strategy="afterInteractive"
          onReady={() => {
            console.log("Ad scripts loaded before if", wapTag);
            // const { wapTag, wAPITag } = window;
            const wapTag = window?.wapTag;
            const wAPITag = window?.wAPITag;
            if (wapTag && wAPITag) {
              (wapTag.Init = window?.wapTag?.Init || [])?.push(function () {
                wAPITag?.display(adId);
              });
            }
          }}
          // dangerouslySetInnerHTML={{
          //   __html:`wapTag.Init = window.wapTag.Init || []).push(function () { wAPITag.display("pw_43462") }`
          // }}
        />
      </div>
    </>
  );
};

export default RITSad;
