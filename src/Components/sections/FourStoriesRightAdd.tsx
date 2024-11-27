import React from "react";
import Section from "../common/Section";
import Link from "next/link";
import add_rq from "@/assets/images/adds/rq1.gif";
import add_sq from "@/assets/images/adds/sq1.gif";
import Image from "next/image";
import SectionHeading from "../common/SectionHeading";
import { getImageUrl } from "@/lib/imageUrl";
import { ICategory, IStory } from "@/config/interfaces/interfaces";
import PlayIcon from "../common/PlayIcon";
import { getStoryHref } from "@/lib/href";
import Add970X90 from "../common/Add970X90";
import SectionBottomAdd from "../common/SectionBottomAdd";
import { FaAnglesRight } from "react-icons/fa6";
import MoreButton from "../common/MoreButton";
import { getStoryDate } from "@/utils";
import Title from "../common/Title";
import Time from "../common/Time";
import Caption from "../common/Caption";
import Ad300x250 from "../AddComponents/Ad300x250";
import Script from "next/script";
import R2GoogleAdsense300x250 from "../AddComponents/R2GoogleAdsense300x250";
import Ad from "../adManager/Ad";
import AdR from "../adManager/AdR";

interface IFourStoriesRightAdd {
  stories: IStory[];
  title: string;
  category: ICategory;
}

function FourStoriesRightAdd({
  stories,
  title,
  category,
}: IFourStoriesRightAdd) {
  return (
    <Section>
      <div className="container">
        <SectionHeading href={category.slug}>{title}</SectionHeading>
        <div className="grid grid-cols-1 lg:grid-cols-[4fr_3fr_300px] gap-9">
          {/* Left column */}
          <div className="border-right">
            <div className="flex flex-col gap-4 lg:gap-6">
              <Link
                href={getStoryHref(stories[0])}
                className="relative w-full aspect-video"
              >
                <Image
                  className="w-full h-auto object-cover"
                  src={getImageUrl(stories[0])}
                  alt="story"
                  fill={true}
                />
                {stories[0]?.type === "video_story" && <PlayIcon size={22} />}
              </Link>
              <div className="grid grid-cols-2 gap-2 lg:gap-8">
                <div className="col-span-full lg:col-span-1 flex flex-col gap-4">
                  <Title
                    href={getStoryHref(stories[0])}
                    display_tags={stories[0]?.display_tags}
                    size="extra-large"
                    isLiveActive={stories[0]?.is_live_news}
                  >
                    {" "}
                    {stories[0]?.title}{" "}
                  </Title>
                  <div className="hidden lg:block">
                    <Time>
                      {getStoryDate(
                        new Date(stories[0]?.first_published_at),
                        false
                      )}
                    </Time>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-1">
                  <Caption
                    href={getStoryHref(stories[0])}
                    className="lg:line-clamp-6"
                  >
                    {stories[0]?.excerpt}
                  </Caption>
                  <div className="lg:hidden block mt-3">
                    <Time>
                      {getStoryDate(
                        new Date(stories[0]?.first_published_at),
                        false
                      )}
                    </Time>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div className="border-right relative">
            <div className="flex flex-col gap-9">
              {stories.slice(1, 5).map((story, index) => (
                <div key={index} className="border-bottom">
                  <div className="grid grid-cols-2 gap-3">
                    <Link href={getStoryHref(story)}>
                      <div className="relative aspect-video">
                        <Image
                          className="w-full h-auto object-cover"
                          src={getImageUrl(story)}
                          alt={story.title}
                          fill={true}
                        />
                        {story.type === "video_story" && <PlayIcon />}
                      </div>
                    </Link>

                    <div className="flex flex-col justify-between">
                      <Title
                        size="large"
                        display_tags={story?.display_tags}
                        isLiveActive={story?.is_live_news}
                        href={getStoryHref(story)}
                      >
                        {" "}
                        {story?.title}{" "}
                      </Title>
                      <Time>
                        {getStoryDate(
                          new Date(story.first_published_at),
                          false
                        )}
                      </Time>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <MoreButton href={category.slug} />
          </div>

          {/* Right Column (Add) */}
          <div className="flex flex-col gap-3">
            {/* <Link href="/">
              <Image
                className="w-full h-auto object-cover"
                src={add_sq}
                alt="add"
                width={300}
                height={250}
              />
            </Link> */}
            {/* <R2GoogleAdsense300x250 /> */}

            <div className="flex justify-center">
              <AdR addId={"Home_R2"} />
            </div>

            {/* <Ad300x250>
                  <div id="div-gpt-ad-8687054-3">
                    <Script
                      id="div-gpt-ad-8687054-3"
                      dangerouslySetInnerHTML={{
                        __html: `googletag.cmd.push(function() { googletag.display('div-gpt-ad-8687054-3'); });`,
                      }}
                    ></Script>
                  </div>
                </Ad300x250> */}

            <Link target="_blank" href="https://epaper.ajkerpatrika.com/">
              <Image
                className="w-full h-auto object-cover"
                src={add_rq}
                alt="add"
                width={300}
                height={80}
              />
            </Link>
            {/* <Link href='/'>
                            <Image
                                className='w-full h-auto object-cover'
                                src={add_sq}
                                alt='add'
                                width={300}
                                height={250}
                            />
            </Link> */}
          </div>
        </div>
      </div>
      {/* <SectionBottomAdd /> */}
    </Section>
  );
}

export default FourStoriesRightAdd;
