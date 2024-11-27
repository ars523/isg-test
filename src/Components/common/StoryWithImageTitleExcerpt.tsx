import { TDisplayTag } from "@/config/interfaces/interfaces";
import cn from "@/lib/cn";
import { ClassValue } from "clsx";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import Title from "./Title";
import Time from "./Time";
import Caption from "./Caption";
import photoStoryIcon from "../../assets/images/icon/photo.png";

interface IStoryCardProps {
  title: string;
  excerpt: string;
  imageUrl: string | StaticImageData;
  slug: string;
  imageAlt?: string;
  excerptClass?: ClassValue;
  href?: string;
  display_tags?: TDisplayTag[];
  isLiveActive?: boolean;
  publishedTime?: string;
  photoStoriesWatermark?: boolean;
  highlight?: string;
}

function StoryWithImageTitleExcerpt({
  display_tags,
  title,
  imageUrl,
  slug,
  imageAlt,
  excerpt,
  excerptClass,
  href,
  isLiveActive,
  publishedTime,
  photoStoriesWatermark,
  highlight,
}: IStoryCardProps) {
  return (
    <div className="group">
      <Link href={href || ""} scroll={false}>
        <div className="relative w-full aspect-video mb-3">
          <Image
            className="object-cover"
            src={imageUrl}
            alt="Lead image"
            fill={true}
          />
          {photoStoriesWatermark && (
            <div className="absolute top-0 left-0 p-2">
              <Image
                src={photoStoryIcon}
                alt="photo-icon-Watermark"
                className=" w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]"
              />
            </div>
          )}
        </div>
      </Link>

      {highlight && (
        <div className="text-lg text-red2 my-1">
          <div
            dangerouslySetInnerHTML={{
              __html: highlight,
            }}
          />
        </div>
      )}

      <Title
        size="extra-extra-large"
        display_tags={display_tags}
        href={href}
        className="mb-3"
        isLiveActive={isLiveActive}
      >
        {title}
      </Title>

      <Caption href={href} className={cn("", excerptClass)}>
        {excerpt}
      </Caption>

      <Time className="mt-3">{publishedTime}</Time>
    </div>
  );
}

export default StoryWithImageTitleExcerpt;
