"use client"
import { useEffect } from "react";

interface AdSlotProps {
  slotId: string;
}

const AdSlot: React.FC<AdSlotProps> = ({ slotId }) => {
  useEffect(() => {
    // Ensure `googletag` is available
    if (typeof window !== "undefined" && window.googletag?.cmd) {
      window.googletag.cmd.push(() => {
        window.googletag.display(slotId);
      });
    }
  }, [slotId]);

  return <div id={slotId} />;
};

export default AdSlot;
