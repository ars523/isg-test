import React from "react";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import Image from "next/image";
import { getImageUrl } from "@/lib/imageUrl";
import leadData from "@/assets/data/lead";
import Link from "next/link";

import sq1 from "@/assets/images/adds/sq1.gif";
import { BsYoutube } from "react-icons/bs";
import StoryWithImageTitleExcerpt from "../common/StoryWithImageTitleExcerpt";
import StoryList from "../common/StoryList";
import VideoCard from "../common/VideoCard";
import {
  ICategory,
  IStory,
  IStoryDetails,
} from "@/config/interfaces/interfaces";
import { getStoryHref } from "@/lib/href";
import SectionBottomAdd from "../common/SectionBottomAdd";
import MoreButton from "../common/MoreButton";
import { get150Characters, getStoryDate } from "@/utils";
import StoryCard from "../common/StoryCard";
import cn from "@/lib/cn";
import Ad300x250 from "../AddComponents/Ad300x250";
import Script from "next/script";
import R3GoogleAdsense300x250 from "../AddComponents/R3GoogleAdsense300x250";
import Ad from "../adManager/Ad";
import AdR from "../adManager/AdR";

interface INineStoriesWithOneVideo {
  stories: IStory[];
  title: string;
  category: ICategory;
  video: IStoryDetails;
}

function NineStoriesWithOneVideo({
  stories,
  title,
  category,
  video,
}: INineStoriesWithOneVideo) {
  return (
    <Section>
      <div className="container">
        <SectionHeading href={category.slug}>{title}</SectionHeading>
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_300px] gap-9">
          <div className="border-right">
            <div className="grid grid-cols-1 gap-9">
              <div className="border-bottom before:h-0 lg:before:h-[1px]">
                {stories?.length > 0 && (
                  <StoryWithImageTitleExcerpt
                    title={stories[0].title}
                    imageUrl={getImageUrl(stories[0])}
                    slug={""}
                    excerpt={stories[0].excerpt}
                    href={getStoryHref(stories[0])}
                    display_tags={stories[0]?.display_tags}
                    isLiveActive={stories[0]?.is_live_news}
                    highlight={stories[0].highlight}
                    publishedTime={getStoryDate(
                      new Date(stories[0].first_published_at),
                      false
                    )}
                  />
                )}
              </div>
              <div className="grid grid-cols-2 gap-9">
                {stories.slice(1, 3).map((data, index) => (
                  <div
                    key={index}
                    className={cn(
                      "relative after:absolute after:h-[1px] lg:after:h-0 after:w-full after:left-0 after:-bottom-[19px] after:block after:bg-[#BEBDBD]  before:block lg:before:w-[1px] last:before:w-[0px] lg:before:h-full before:absolute lg:before:top-0 lg:before:-right-[18px] before:bg-[#BEBDBD]"
                    )}
                  >
                    <StoryList
                      classContainer="hidden lg:block"
                      title={data.title}
                      imageUrl={getImageUrl(data)}
                      slug={""}
                      href={getStoryHref(data)}
                      isLiveActive={data.is_live_news}
                      display_tags={data.display_tags}
                      publishedTime={getStoryDate(
                        new Date(data.first_published_at),
                        false
                      )}
                    />
                    <StoryCard
                      className={cn(
                        "lg:hidden block last:before:h-[1px] lg:last:before:h-0"
                      )}
                      title={data.title}
                      imageUrl={getImageUrl(data)}
                      slug={""}
                      href={getStoryHref(data)}
                      display_tags={data.display_tags}
                      isLiveActive={data.is_live_news}
                      publishedTime={getStoryDate(
                        new Date(data.first_published_at),
                        false
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-right">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-9">
              {stories.slice(3, 7).map((data, index) => (
                <div
                  className="[&:nth-last-child(2)]:before:h-0 lg:[&:nth-last-child(2)]:before:h-[1px]  border-bottom"
                  key={index}
                >
                  <StoryList
                    classContainer="hidden lg:block"
                    title={data.title}
                    imageUrl={getImageUrl(data)}
                    slug={""}
                    href={getStoryHref(data)}
                    isLiveActive={data.is_live_news}
                    display_tags={data.display_tags}
                    publishedTime={getStoryDate(
                      new Date(data.first_published_at),
                      false
                    )}
                  />
                  <StoryCard
                    className="lg:hidden block"
                    title={data.title}
                    imageUrl={getImageUrl(data)}
                    slug={""}
                    href={getStoryHref(data)}
                    display_tags={data.display_tags}
                    isLiveActive={data.is_live_news}
                    publishedTime={getStoryDate(
                      new Date(data.first_published_at),
                      false
                    )}
                  />
                </div>
              ))}
            </div>
            <MoreButton href={category.slug} />
          </div>
          <div className="flex flex-col gap-7">
            {/* <div>
                            <Image
                                className='w-full h-auto'
                                src={sq1}
                                alt="Lead image"
                            />
                        </div> */}

            {/* <R3GoogleAdsense300x250/> */}
            <div className="flex justify-center" >
              <AdR addId={"Home_R3"} />
            </div>

            {/* <Ad300x250>
              <div id="div-gpt-ad-8687054-4">
                <Script
                  id="div-gpt-ad-8687054-4"
                  dangerouslySetInnerHTML={{
                    __html: `googletag.cmd.push(function() { googletag.display('div-gpt-ad-8687054-4'); });`,
                  }}
                ></Script>
              </div>
            </Ad300x250> */}
            <div>
              <div className="mb-2">
                <Link href="/">
                  <h2 className="text-[#006563] text-2xl font-semibold">
                    ভিডিও
                  </h2>
                </Link>
              </div>
              {video && (
                <VideoCard
                  title={video?.title}
                  imageUrl={video.video_thumbnail?.url || ""}
                  caption={get150Characters(video?.excerpt) + "..."}
                  slug={video.news_slug}
                  publishedTime={getStoryDate(
                    new Date(video?.meta?.first_published_at),
                    false
                  )}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <SectionBottomAdd /> */}
    </Section>
  );
}

export default NineStoriesWithOneVideo;
