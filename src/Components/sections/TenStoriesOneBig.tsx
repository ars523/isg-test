import React from "react";
import Section from "../common/Section";
import leadData from "@/assets/data/lead";
import Link from "next/link";
import { getImageUrl } from "@/lib/imageUrl";
import Image from "next/image";
import cn from "@/lib/cn";
import SectionHeading from "../common/SectionHeading";
import { ICategory, IFeatured, IStory } from "@/config/interfaces/interfaces";
import { getFeaturedStoryHref, getStoryHref } from "@/lib/href";
import SectionBottomAdd from "../common/SectionBottomAdd";
import MoreButton from "../common/MoreButton";
import { getStoryDate, toBanglaNum } from "@/utils";
import Title from "../common/Title";
import Time from "../common/Time";
import Caption from "../common/Caption";
import StoryCard from "../common/StoryCard";
import Ad970x100 from "../AddComponents/Ad970x100";
import Script from "next/script";

interface TenStoriesOneBigProps {
  stories: IStory[];
  mostReads: IFeatured[];
  title?: string;
  category: ICategory;
}

function TenStoriesOneBig({
  stories,
  title,
  category,
  mostReads,
}: TenStoriesOneBigProps) {
  return (
    <Section>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-x-9 items-start">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-9">
            <SectionHeading className="col-span-full" href="/">
              সর্বাধিক পঠিত
            </SectionHeading>
            <div className="col-span-full grid grid-cols-1 lg:grid-cols-2 gap-9">
              <div className="border-right flex flex-col gap-9">
                {mostReads.slice(0, 3).map((story, index) => (
                  <div
                    key={index}
                    className={cn(
                      "border-bottom last:before:h-[1px] lg:last:before:h-[0px]"
                    )}
                  >
                    <div className="flex gap-4 items-start">
                      <span className="font-bold text-[#cccccc] text-[72px] leading-[56px]">
                        {toBanglaNum(index + 1)}
                      </span>
                      <div className="">
                        <div className="lg:min-h-[7rem]">
                          <Title
                            href={getFeaturedStoryHref(story)}
                            className=""
                            size="large"
                            featuredDisplayTag={story.display_tags}
                            isLiveActive={story.is_live_news}
                          >
                            {story.title}
                          </Title>
                        </div>
                        <Time className="mt-2">
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
              <div className="border-right lg:last:before:w-[1px] relative">
                <div className="flex flex-col gap-9">
                  {mostReads.slice(3, 6).map((story, index) => (
                    <div key={index} className="border-bottom">
                      <div className="flex gap-4 items-start">
                        <div className="font-bold text-[#cccccc] text-[72px] leading-[56px]">
                          {toBanglaNum(index + 4)}
                        </div>
                        <div className="">
                          <div className="lg:min-h-[7rem]">
                            <Title
                              href={getFeaturedStoryHref(story)}
                              featuredDisplayTag={story.display_tags}
                              isLiveActive={story.is_live_news}
                              className=""
                              size="large"
                            >
                              {story.title}
                            </Title>
                          </div>
                          <Time className="mt-2">
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
                {/* <MoreButton href={"/most-viewed"} /> */}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-9">
            <SectionHeading className="col-span-full" href="/fact-check">
              ফ্যাক্টচেক
            </SectionHeading>
            <div className="hidden col-span-full lg:grid grid-cols-1 lg:grid-cols-2 gap-9">
              {stories.length > 0 && (
                <div className={cn("border-right")}>
                  <div className="block">
                    <Link href={getStoryHref(stories[0])} className="block">
                      <div className="aspect-video mb-2 relative">
                        <Image
                          src={getImageUrl(stories[0])}
                          alt={stories[0]?.title}
                          className="object-cover"
                          fill={true}
                        />
                      </div>
                    </Link>
                    <div className="col-span-2 mb-4">
                      <Title
                        className=""
                        size="large"
                        href={getStoryHref(stories[0])}
                        display_tags={stories[0].display_tags}
                        isLiveActive={stories[0].is_live_news}
                      >
                        {stories[0].title}
                      </Title>
                      <Caption href={getStoryHref(stories[0])} className="mt-2">
                        {stories[0].excerpt}
                      </Caption>
                    </div>
                    <Time>
                      {getStoryDate(
                        new Date(stories[0].first_published_at),
                        false
                      )}
                    </Time>
                  </div>
                </div>
              )}
              <div className="border-right relative">
                <div className="flex flex-col gap-9">
                  {stories.slice(1, 4).map((story, index) => (
                    <div key={index} className="border-bottom">
                      <div className="grid grid-cols-3 gap-3">
                        <Link href={getStoryHref(story)}>
                          <div className="relative w-full aspect-video">
                            <Image
                              className="w-full h-full object-cover"
                              src={getImageUrl(story)}
                              alt={story.title}
                              fill={true}
                            />
                          </div>
                        </Link>
                        <div className="col-span-2">
                          <Title
                            className=""
                            href={getStoryHref(story)}
                            size="large"
                            display_tags={story.display_tags}
                            isLiveActive={story.is_live_news}
                          >
                            {story.title}
                          </Title>
                          <Time className="mt-2">
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
            </div>
            <div className="flex flex-col gap-9 lg:hidden ">
              <div className="grid grid-cols-2 border-bottom gap-5">
                {stories.slice(0, 2).map((story, index) => (
                  <div key={index}>
                    <StoryCard
                      title={story.title}
                      imageUrl={getImageUrl(story)}
                      slug=""
                      href={getStoryHref(story)}
                      display_tags={story?.display_tags}
                      isLiveActive={story?.is_live_news}
                      publishedTime={getStoryDate(
                        new Date(story?.first_published_at),
                        false
                      )}
                    />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-5">
                {stories.slice(2, 4).map((story, index) => (
                  <div key={index}>
                    <StoryCard
                      title={story.title}
                      imageUrl={getImageUrl(story)}
                      slug=""
                      href={getStoryHref(story)}
                      display_tags={story?.display_tags}
                      isLiveActive={story?.is_live_news}
                      publishedTime={getStoryDate(
                        new Date(story?.first_published_at),
                        false
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default TenStoriesOneBig;
