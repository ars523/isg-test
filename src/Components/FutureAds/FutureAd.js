"use client"
import React, { useEffect } from 'react';

export function FutureAd ({ adSlot }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const { wapTag, wAPITag } = window;

      if (wapTag && wAPITag) {
        (wapTag.Init = window.wapTag.Init || []).push(function () {
          wAPITag.display(adSlot);
        });
      }
    }
  }, [adSlot]);
};

