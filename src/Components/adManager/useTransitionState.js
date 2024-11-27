import { useState, useEffect } from 'react';
import Router from "next/router";
import { usePathname, useSearchParams } from "next/navigation";


const useTransitionState = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
    const pathname = usePathname();
    const searchParams = useSearchParams();

  const setDestroyAd = () => {
    setIsTransitioning(true);

    // destroy all ad slots
    const { googletag } = window;
    googletag?.cmd?.push(function () {
      googletag.destroySlots();
    });
  };

  console.log(
    "isTransitioning",
    isTransitioning
  )

  useEffect(() => {
setIsTransitioning(false)
    return () => {
      setDestroyAd()
    };
  }, [pathname, searchParams]);

  return isTransitioning;
};

export default useTransitionState;