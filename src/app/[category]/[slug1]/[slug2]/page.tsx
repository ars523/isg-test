import StoryDetails from "@/Components/common/StoryDetails";
import { baseURL } from "@/config/api/api";
import { IStoryDetails } from "@/config/interfaces/interfaces";
import React from "react";
import type { Metadata, ResolvingMetadata } from "next";

type TProps = {
  params: {
    slug2: string;
    category: string;
  };
};

const getUrlPartAccordingToCategory = (category: string) => {
  if (category === "video") {
    return "videos";
  }
  if (category === "picture") {
    return "photos";
  }
  return "home";
};

export async function generateMetadata(
  { params }: TProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug2;
  const category = params.category;

  // fetch data
  const storyRes = await fetch(
    `${baseURL}/api/v2/${getUrlPartAccordingToCategory(
      category
    )}/?news_slug=${slug}`
  ).then((res) => res.json());

  const story: IStoryDetails = storyRes.results[0];

  const imageUrl = story?.blog_image?.download_url || story?.photo_thumbnail?.download_url || ""
  const imageWidth = 600;
  const imageHeight = 315;
  const applyOverlay = true
  const watermark = story?.watermark || story?.categories[0]?.watermark || "https://ajpbucket.ideahubbd.com/others/ajp-og-image.png";
  const overlayBottom = 0;
  const overlayRight = 0;
  const overlayFit = "cover";
  const overlayWidth = 600;
  const overlayHeight = 50;
  const overlayOpacity = 1;

  const ogImageWithWatermark = `https://worker.ideahubbd.com/?image=${encodeURIComponent(imageUrl)}&width=${imageWidth}&height=${imageHeight}&drawOverlay=${applyOverlay}&watermarkUrl=${encodeURIComponent(watermark)}&bottom=${overlayBottom}&right=${overlayRight}&fit=${overlayFit}&overlayWidth=${overlayWidth}&overlayHeight=${overlayHeight}&opacity=${overlayOpacity}`

  return {
    title: story?.meta?.seo_title || story?.title,
    description: story?.meta?.search_description || story?.excerpt,
    keywords:
      story?.tags?.length > 0 ? story?.tags?.map((tag) => tag?.name) : [],
    openGraph: {
      images: [
        {
          url: `${ogImageWithWatermark}`,
          width: 600,
          height: 315,
          alt: story?.title,
        },
      ],
    },
  };
}

async function Page({
  params: { slug2, category },
}: {
  params: { slug2: string; category: string };
}) {
  return (
    <StoryDetails slug={slug2} category={category} />
  );
}

export default Page;
