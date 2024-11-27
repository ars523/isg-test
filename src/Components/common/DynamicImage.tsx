import cn from '@/lib/cn';
import { ClassValue } from 'clsx';
import Image, { ImageLoaderProps } from 'next/image'
import { getPlaiceholder } from "plaiceholder";
import React from 'react'

async function DynamicImage(
    {
        width,
        height,
        priority,
        sizes,
        src,
        alt,
        className,
    }: { priority: boolean, width: number, height: number, src: string, alt: string, sizes: string, className?: ClassValue }) {
    const base = "https://images.ajkerpatrika.com";
    const filePath = src.split(".com/")[1];
    const finalSrc = `${base}/cdn-cgi/image/format=webp,width=10/${filePath}`;

    const buffer = await fetch(finalSrc).then(async (res) =>
        Buffer.from(await res.arrayBuffer())
    );

    const { base64 } = await getPlaiceholder(buffer);

    return (
        <Image
            className={cn(className)}
            src={src}
            alt={alt}
            placeholder="blur"
            blurDataURL={base64}
            width={width}
            height={height}
            priority={priority}
            sizes={sizes}
        />
    )
}

export default DynamicImage