"use client";
import React, { useEffect } from "react";
import Script from "next/script";

const BDAxisAd = ({ adId }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.unibots = window.unibots || { cmd: [] };
      window.unibots.cmd.push(function () {
        unibotsPlayer(adId);
      });
    }
  }, [adId]);

  return (
    <div id={`div-ub-${adId}`} className="w-[320px] h-auto lg:w-auto">
      <Script
        id="unibots-script"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== "undefined") {
            window.unibots = window.unibots || { cmd: [] };
            window.unibots.cmd.push(function () {
              unibotsPlayer(adId);
            });
          }
        }}
      />
    </div>
  );
};

export default BDAxisAd;
