"use client";
import { ImageLoaderProps } from "next/image";
const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  if (src.startsWith("/_next/static/media/")) {
    return src;
  } else {
    const base = "https://images.ajkerpatrika.com";
    const filePath = src.split(".com/")[1];
    const finalSrc = `${base}/cdn-cgi/image/format=webp,quality=75,width=${width}/${filePath}`;
    return finalSrc;
  }
};

export default imageLoader;
