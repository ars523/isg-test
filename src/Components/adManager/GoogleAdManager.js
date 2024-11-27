// GoogleAdManager.js
"use client"; // Ensure this is a client component

import Script from "next/script";

const GoogleAdManager = () => {
  return (
    <>
      <Script
      async
        id="google-ad-manager"
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        strategy="afterInteractive" // Load after the page becomes interactive
        onLoad={() => {
          window.googletag = window.googletag || { cmd: [] }; // Initialize googletag
        }}
      />
    </>
  );
};

export default GoogleAdManager;
