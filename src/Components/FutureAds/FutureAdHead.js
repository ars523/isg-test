"use client";
import Script from "next/script";
const FutureAdHead = () => {
  return (
    <>
      <Script
        async
        id="bilsyndication-script-futureAds"
        src="cdn.bilsyndication.com/w/6481958a-fee4-4f4b-ab29-50774d9ca985.js"
        strategy="afterInteractive"
      />
      <Script
        async
        id="bilsyndication-script-futureAds"
        src="cdn.bilsyndication.com/ata/adv/6481958a-fee4-4f4b-ab29-50774d9ca985.js"
        strategy="afterInteractive"
      />
      <Script
        async
        id="bilsyndication-script-futureAds"
        strategy="afterInteractive"
        onLoad={() => {
          window.wapTag = window.wapTag || {};
          window.wapTag.gdprShowConsentToolButton = false;
        }}
      />
    </>
  );
};
export default FutureAdHead;
