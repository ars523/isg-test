"use client";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Router from "next/router";

export function UseAdSlot({ mapping, sizes, id, divId, isTransitioning }) {
  useEffect(() => {
    if (!isTransitioning && typeof window !== "undefined") {
      const { googletag } = window;

        googletag?.cmd?.push(function () {
          if (id === "Popup_HP") {
            // Define an out-of-page slot
            googletag
              .defineOutOfPageSlot(`/22653932740/${id}`, `div-gpt-ad-${divId}`)
              .addService(googletag.pubads());
          } else {
            // Define a regular slot with size mapping
            const adMapping = googletag.sizeMapping();
            Object.keys(mapping).forEach((breakpoint) => {
              adMapping.addSize([Number(breakpoint), 0], mapping[breakpoint]);
            });
            const builtMapping = adMapping.build();

            googletag
              .defineSlot(`/22653932740/${id}`, sizes, `div-gpt-ad-${divId}`)
              .defineSizeMapping(builtMapping)
              .addService(googletag.pubads());
          }
          googletag.enableServices();
        });

        googletag?.cmd?.push(function () {
          googletag.display(`div-gpt-ad-${divId}`);
        });
   

    }
  }, [mapping, sizes, id, divId, isTransitioning]);
}
