"use client"
import React, { useEffect } from 'react';
export function UseThirdPartyAdSlot({ width, height, adSlot }) {
    useEffect(() => {
      if (typeof window !== "undefined") {
        const adDiv = document.createElement('div');
        adDiv.className = 'futureads';
        adDiv.style.width = `${width}px`;
        adDiv.style.height = `${height}px`;
        adDiv.style.display = 'inline-block';
        adDiv.setAttribute('data-ad-slot', adSlot);
  
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.innerHTML = `(wapTag.Init = window.wapTag.Init || []).push(function () { wAPITag.display("${adSlot}") })`;
  
        document.body.appendChild(adDiv);
        document.body.appendChild(script);
  
        return () => {
          document.body.removeChild(adDiv);
          document.body.removeChild(script);
        };
      }
    }, [width, height, adSlot]);
  }