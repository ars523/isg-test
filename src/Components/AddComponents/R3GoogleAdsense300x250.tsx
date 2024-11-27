"use client"
import Script from 'next/script';
import React, { useEffect } from 'react'

const R3GoogleAdsense300x250 = () => {
  useEffect(() => {
    // Initialize the ad after the script loads
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <div>
      {/* Load AdSense script with Next.js Script component */}
      <Script
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5261331564832462"
        crossOrigin="anonymous"
      />

      {/* Ad slot */}
      <ins
        className="adsbygoogle"
        style={{ display: 'inline-block', width: '300px', height: '250px' }}
        data-ad-client="ca-pub-5261331564832462"
        data-ad-slot="8530209900"
      ></ins>
    </div>
  );
}

export default R3GoogleAdsense300x250