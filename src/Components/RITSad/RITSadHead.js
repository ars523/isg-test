"use client"
import Script from "next/script"

const RITSadHead = () => {
    return (
        <>
        <Script
       
            id="bilsyndication-script-ritsad-1"
            src="https://cdn.bilsyndication.com/w/6481958a-fee4-4f4b-ab29-50774d9ca985.js"
            strategy="afterInteractive"
        />
        <Script

            id="bilsyndication-script-ritsad-2"
            src="https://cdn.bilsyndication.com/ata/adv/6481958a-fee4-4f4b-ab29-50774d9ca985.js"
            strategy="afterInteractive"
        />
        <Script
   
            id="bilsyndication-script-ritsad-3"
            strategy="afterInteractive"
            onReady={() => {
                var wapTag = wapTag || {};wapTag.gdprShowConsentToolButton = false;
            }}
        />
        </>
    );
}

export default RITSadHead;