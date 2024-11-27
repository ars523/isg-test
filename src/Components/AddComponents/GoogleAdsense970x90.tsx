"use client"
import Script from 'next/script';
import React, { useEffect } from 'react'

const GoogleAdsense970x90 = () => {
    // useEffect(() => {
    //     // Initialize the ad after the script loads
    //     try {
    //       (window.adsbygoogle = window.adsbygoogle || []).push({});
    //     } catch (e) {
    //       console.error(e);
    //     }
    //   }, []);
    
      return (
        <div className='container flex justify-center'>
          {/* Load AdSense script with Next.js Script component */}
          {/* <Script
            strategy="afterInteractive"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5261331564832462"
            crossOrigin="anonymous"
          /> */}
    
          {/* Ad slot */}
          <ins
            className="adsbygoogle"
            style={{ display: 'inline-block', width: '970px', height: '90px' }}
            data-ad-client="ca-pub-5261331564832462"
            data-ad-slot="2477838656"
          ></ins>
        </div>
      );
}

export default GoogleAdsense970x90