import { useState, useEffect } from 'react';
import Router from "next/router";
import { usePathname, useSearchParams } from "next/navigation";


const useAnchorTransitionState = () => {
//   const [isTransitioningAnchor, setIsTransitioningAnchor] = useState(false);
//     const pathname = usePathname();
//     const searchParams = useSearchParams();

//   const setDestroyAd = () => {
//     setIsTransitioningAnchor(true);

//     // destroy all ad slots
//     const { googletag } = window;
//     googletag?.cmd?.push(function () {
//       googletag.destroySlots();
//     });
//   };

//   console.log(
//     "isTransitioning",
//     isTransitioningAnchor
//   )

//   useEffect(() => {
//     setIsTransitioningAnchor(false)
//     return () => {
//       setDestroyAd()
//     };
//   }, [pathname, searchParams]);

//   return isTransitioningAnchor;
};

export default useAnchorTransitionState;