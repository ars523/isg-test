"use client";
import Script from "next/script";

const BDAxisAdHead = () => {
  return (
    <>
      <Script
        id="BdAxisHead-1"
        async
        src="https://cdn.unibotscdn.com/player/mvp/player.js"
        strategy="afterInteractive"
      />
      <Script
        id="BdAxisHead-2"
        async
        defer
        src="//cdn.bilsyndication.com/w/cf880ef0-823d-4ed2-a607-d40f590b56f8.js"
        strategy="afterInteractive"
      />
      <Script
        id="BdAxisHead-3"
        strategy="afterInteractive"
        onLoad={() => {
          window.wapTag = window.wapTag || {};
          window.wapTag.gdprShowConsentToolButton = false;
        }}
      />
      <Script
        id="BdAxisHead-4"
        async
        defer
        src="//cdn.bilsyndication.com/ata/adv/cf880ef0-823d-4ed2-a607-d40f590b56f8.js"
        strategy="afterInteractive"
      />
      <Script
        id="BdAxisHead-5"
        strategy="afterInteractive"
        onLoad={() => {
          window.wapTag = window.wapTag || {};
          window.wapTag.interstitialConfig = window.wapTag.interstitialConfig || {};
          window.wapTag.interstitialConfig.enableMobile = false;
          window.wapTag.interstitialConfig.enablePC = false;
        }}
      />
    </>
  );
};

export default BDAxisAdHead;