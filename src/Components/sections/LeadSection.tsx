import React from "react";
import Section from "../common/Section";
import Image from "next/image";
import Link from "next/link";
import {
  IFeatured,
  IStory,
  IStoryDetails,
} from "@/config/interfaces/interfaces";
import SectionHeading from "../common/SectionHeading";
import StoryCard from "../common/StoryCard";
import {
  getFeaturedStoryHref,
  getStoryDetailsTypeHref,
  getStoryHref,
} from "@/lib/href";
import PlayIcon from "../common/PlayIcon";
import SectionBottomAdd from "../common/SectionBottomAdd";
import Title from "../common/Title";
import { getStoryDate } from "@/utils";
import Time from "../common/Time";
import Caption from "../common/Caption";
import AdR from "../adManager/AdR";
import AdT from "../adManager/AdT";
import DynamicImage from "../common/DynamicImage";

function LeadSection({
  stories,
  readerInterestedStories,
}: {
  stories: IFeatured[];
  readerInterestedStories: IStoryDetails[];
}) {
  return (
    <Section>
      <div className="container">
        {/* First Lead Section Start*/}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr_300px] gap-9 pb-[18px] mb-[18px] border-[#BEBDBD] border-b">
          <div className="flex flex-col gap-9 lg:border-right order-3 lg:order-1">
            {stories?.length > 1 && stories.slice(1, 4).map((story, i) => (
              <div key={i} className="border-bottom">
                <div className="block">
                  {/* {story?.highlight && (
                    <div className="text-base text-red2 mb-1">
                      <div
                        dangerouslySetInnerHTML={{ __html: story?.highlight }}
                      />
                    </div>
                  )} */}
                  <Title
                    className="mb-2"
                    size="large"
                    href={getFeaturedStoryHref(story)}
                    featuredDisplayTag={story?.display_tags}
                    isLiveActive={story.is_live_news}
                  >
                    {story.title}
                  </Title>
                  <div className="grid grid-cols-10 gap-3">
                    <Link
                      href={getFeaturedStoryHref(story)}
                      scroll={false}
                      className="col-span-4 w-full relative"
                    >
                      <Image
                        className="w-full aspect-video object-cover mb-3"
                        src={story.img_url}
                        alt="Lead image"
                        width={104}
                        height={58}
                        sizes="(max-width: 1024px) 40vw, 104px"
                      />
                      {story.story_type === "Video Story" && <PlayIcon />}
                    </Link>
                    <div className="col-span-6">
                      <Caption
                        href={getFeaturedStoryHref(story)}
                        className="lg:line-clamp-2"
                      >
                        {story.excerpt}
                      </Caption>
                      <Time className="mt-2">
                        {getStoryDate(
                          new Date(story.first_published_at),
                          false
                        )}
                      </Time>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {stories?.length > 0 && (
            <div className="lg:col-span-2 order-1 lg:order-2 relative before:block lg:before:w-[1px] before:h-full before:absolute before:top-0 before:-right-[18px] before:bg-[#BEBDBD]">
              <div>
                <Link className="block w-full" href={getFeaturedStoryHref(stories[0])}>
                  <div className="mb-3 w-full aspect-video relative">
                    <DynamicImage
                      className="w-full h-full object-cover"
                      src={stories[0]?.img_url}
                      alt={stories[0]?.title}
                      height={335}
                      width={596}
                      priority
                      sizes="(max-width: 668px) 100vw, (max-width: 1920px) 596px, 596px"
                    />
                    {stories[0]?.story_type === "Video Story" && (
                      <PlayIcon size={32} />
                    )}
                  </div>
                </Link>
                {stories[0]?.highlight && (
                  <div className="text-lg text-red2 my-1">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: stories[0]?.highlight,
                      }}
                    />
                  </div>
                )}
                <Title
                  href={getFeaturedStoryHref(stories[0])}
                  featuredDisplayTag={stories[0]?.display_tags}
                  isLiveActive={stories[0]?.is_live_news}
                  className="mb-2"
                  size="extra-extra-large"
                >
                  {stories[0]?.title}
                </Title>

                <Caption
                  href={getFeaturedStoryHref(stories[0])}
                  className="line-clamp-2"
                >
                  {stories[0]?.excerpt}
                </Caption>

                <Time className="mt-2">
                  {getStoryDate(
                    new Date(stories[0]?.first_published_at),
                    false
                  )}
                </Time>
              </div>
            </div>
          )}
          <div className="lg:flex flex-col lg:gap-7 order-2 lg:order-3">
            <div className="flex justify-center">
              <AdR addId={"Home_R1"} />
            </div>
            <div className="hidden lg:block">
              <h2 className="text-[#006563] text-2xl font-semibold mb-2">
                <Link className="hover:text-golden1" href="/topic/পাঠকের আগ্রহ">
                  পাঠকের আগ্রহ
                </Link>
              </h2>
              {readerInterestedStories?.slice(0, 4).map((story, i) => (
                <div
                  key={i}
                  className="border-b border-border_gray pb-1 mb-2 last:mb-0 last:border-0 last:pb-0"
                >
                  <Title
                    display_tags={story?.display_tags}
                    size="small"
                    className=""
                    href={getStoryDetailsTypeHref(story)}
                  >
                    {story?.alternative_title || story?.title}
                  </Title>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* First Lead Section End*/}

        {/* Second Lead Section Start*/}

        <div>
          {/* Featured 5 to 8 */}
          <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-9">
            {stories?.slice(4, 8).map((story, i) => (
              <div
                key={i}
                className="border-right after:block after:w-full after:h-[1px] after:absolute after:bottom-[18px] after:bg-[#BEBDBD] pb-9"
              >
                <div className="hidden lg:block">
                  <Link href={getFeaturedStoryHref(story)}>
                    <div className="w-full mb-2 relative">
                      <Image
                        src={story?.img_url}
                        alt="Story"
                        className="w-full aspect-video object-cover"
                        width={285}
                        height={160}
                        sizes="(max-width: 1280px) 285px, (max-width: 1024px) 285px, (max-width: 768px) 285px, 285px"
                      />
                      {story?.story_type === "Video Story" && (
                        <PlayIcon size={18} />
                      )}
                    </div>
                  </Link>
                  {/* {story.highlight && (
                    <div className="text-lg text-red2 mt-1 mb-1">
                      <div
                        dangerouslySetInnerHTML={{ __html: story.highlight }}
                      />
                    </div>
                  )} */}
                  <Title
                    href={getFeaturedStoryHref(story)}
                    className=""
                    featuredDisplayTag={story?.display_tags}
                    isLiveActive={story?.is_live_news}
                    size="large"
                  >
                    {story?.title}
                  </Title>
                  <Time className="mt-2">
                    {getStoryDate(new Date(story?.first_published_at), false)}
                  </Time>
                </div>
                <div className="block lg:hidden">
                  {/* {story.highlight && (
                    <div className="text-lg text-red2 mb-1">
                      <div
                        dangerouslySetInnerHTML={{ __html: story.highlight }}
                      />
                    </div>
                  )} */}
                  <Title
                    href={getFeaturedStoryHref(story)}
                    className="mb-2"
                    featuredDisplayTag={story?.display_tags}
                    isLiveActive={story?.is_live_news}
                    size="large"
                  >
                    {story?.title}
                  </Title>
                  <div className="grid grid-cols-10 gap-3">
                    <Link
                      className="col-span-4"
                      href={getFeaturedStoryHref(story)}
                    >
                      <div className="w-full">
                        <Image
                          className="w-full aspect-video object-cover mb-3"
                          src={story?.img_url}
                          alt={story?.title}
                          width={150}
                          height={84}
                          sizes="(max-width: 1024px) 40vw, 104px"
                        />
                      </div>
                    </Link>
                    <div className="col-span-6">
                      <Link href={getFeaturedStoryHref(story)}>
                        <p className="line-clamp-3 text-base">
                          {story?.excerpt}
                        </p>
                      </Link>
                      <Time className="mt-2">
                        {getStoryDate(
                          new Date(story?.first_published_at),
                          false
                        )}
                      </Time>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured 9 to 12 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-9">
            {stories?.slice(8, 12).map((story, i) => (
              <div
                key={i}
                className={
                  "group border-right after:block after:w-full after:h-[1px] after:absolute after:bottom-[18px] after:bg-[#BEBDBD] pb-9"
                }
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 group-odd:pr-2 group-even:pl-2 lg:group-odd:pr-0 lg:group-even:pl-0">
                  <div className="order-2 lg:order-1">
                    {/* {story.highlight && (
                      <div className="text-lg text-red2 mb-1 lg:mt-0 mt-1">
                        <div
                          dangerouslySetInnerHTML={{ __html: story.highlight }}
                        />
                      </div>
                    )} */}
                    <Title
                      href={getFeaturedStoryHref(story)}
                      className=""
                      size="large"
                      featuredDisplayTag={story?.display_tags}
                      isLiveActive={story?.is_live_news}
                    >
                      {story?.title}
                    </Title>
                    <Time className="mt-2">
                      {getStoryDate(new Date(story.first_published_at), false)}
                    </Time>
                  </div>
                  <Link
                    className="order-1 lg:order-2"
                    href={getFeaturedStoryHref(story)}
                  >
                    <div className="w-full aspect-video relative">
                      <Image
                        src={story.img_url}
                        alt="Story"
                        className="w-full aspect-video object-cover"
                        width={139}
                        height={78}
                        sizes="(max-width: 1024px) 40vw, (max-width: 1280px) 139px, 139px"
                      />
                      {story.story_type === "Video Story" && (
                        <PlayIcon size={16} />
                      )}
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Featured 13 to 16 */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-9">
            {stories?.slice(12, 16).map((story, i) => (
              <div
                key={i}
                className={
                  "border-right after:block after:w-full lg:after:h-[0px] last:after:h-[0px] after:h-[1px] after:absolute after:-bottom-[18px] after:bg-[#BEBDBD]"
                }
              >
                <div className="hidden lg:grid grid-cols-2 gap-2">
                  <div>
                    {/* {story.highlight && (
                      <div className="text-lg text-red2 mb-1">
                        <div
                          dangerouslySetInnerHTML={{ __html: story.highlight }}
                        />
                      </div>
                    )} */}
                    <Title
                      href={getFeaturedStoryHref(story)}
                      className=""
                      size="large"
                      featuredDisplayTag={story?.display_tags}
                      isLiveActive={story?.is_live_news}
                    >
                      {story?.title}
                    </Title>
                    <Time className="mt-2">
                      {getStoryDate(new Date(story.first_published_at), false)}
                    </Time>
                  </div>
                  <Link href={getFeaturedStoryHref(story)}>
                    <div className="w-full aspect-video relative">
                      <Image
                        src={story.img_url}
                        alt="Story"
                        className="w-full h-full object-cover"
                        fill={true}
                      />
                      {story.story_type === "Video Story" && (
                        <PlayIcon size={16} />
                      )}
                    </div>
                  </Link>
                </div>
                <div className="block lg:hidden">
                  {/* {story.highlight && (
                    <div className="text-lg text-red2 mb-1">
                      <div
                        dangerouslySetInnerHTML={{ __html: story.highlight }}
                      />
                    </div>
                  )} */}
                  <Title
                    href={getFeaturedStoryHref(story)}
                    className="mb-2"
                    featuredDisplayTag={story?.display_tags}
                    isLiveActive={story?.is_live_news}
                    size="large"
                  >
                    {story?.title}
                  </Title>
                  <div className="grid grid-cols-10 gap-3">
                    <Link
                      className="col-span-4"
                      href={getFeaturedStoryHref(story)}
                    >
                      <div className="relative w-full aspect-video">
                        <Image
                          className="w-full h-full object-cover mb-3"
                          src={story?.img_url}
                          alt="Lead image"
                          fill={true}
                        />
                      </div>
                    </Link>
                    <div className="col-span-6">
                      <Link href={getFeaturedStoryHref(story)}>
                        <p className="line-clamp-3 text-base">
                          {story?.excerpt}
                        </p>
                      </Link>
                      <Time className="mt-2">
                        {getStoryDate(
                          new Date(story?.first_published_at),
                          false
                        )}
                      </Time>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Second Lead Section End*/}

        {/* Reader interest in mobile view start*/}
        <div className="mt-10 md:mt-14 lg:hidden">
          <SectionHeading href="/topic/পাঠকের আগ্রহ">
            পাঠকের আগ্রহ
          </SectionHeading>
          <div className="grid grid-cols-1 gap-y-9">
            <div className="grid grid-cols-2 gap-5 border-bottom">
              {readerInterestedStories?.slice(0, 2).map((story, i) => (
                <StoryCard
                  key={i}
                  title={story?.alternative_title || story?.title}
                  imageUrl={story.blog_image?.download_url || ""}
                  slug=""
                  href={getStoryDetailsTypeHref(story)}
                  publishedTime={getStoryDate(
                    new Date(story?.meta?.first_published_at),
                    false
                  )}
                />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-5 border-bottom">
              {readerInterestedStories?.slice(2, 4).map((story, i) => (
                <StoryCard
                  key={i}
                  title={story?.alternative_title || story?.title}
                  imageUrl={story.blog_image?.download_url || ""}
                  slug=""
                  href={getStoryDetailsTypeHref(story)}
                  publishedTime={getStoryDate(
                    new Date(story?.meta?.first_published_at),
                    false
                  )}
                />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-5">
              {readerInterestedStories?.slice(4, 6).map((story, i) => (
                <StoryCard
                  key={i}
                  title={story?.alternative_title || story?.title}
                  imageUrl={story.blog_image?.download_url || ""}
                  slug=""
                  storyType={story.story_type}
                  href={getStoryDetailsTypeHref(story)}
                  publishedTime={getStoryDate(
                    new Date(story?.meta?.first_published_at),
                    false
                  )}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Reader interest in mobile view end*/}
      </div>

      <div className="container flex justify-center mt-14">
        <AdT addId={"Home_T2"} />
      </div>
    </Section>
  );
}

export default LeadSection;
