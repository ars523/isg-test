import React from "react";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import StoryWithImageTitleExcerpt from "../common/StoryWithImageTitleExcerpt";
import AddSquare from "../common/AddSquare";

import leadData from "../../assets/data/lead";
import { getImageUrl } from "../../lib/imageUrl";

import sq1 from "../../assets/images/adds/sq1.gif";
import Image from "next/image";
import Link from "next/link";
import { ICategory, IStory } from "@/config/interfaces/interfaces";
import { getStoryHref } from "@/lib/href";
import SectionBottomAdd from "../common/SectionBottomAdd";
import MoreButton from "../common/MoreButton";
import { getStoryDate } from "@/utils";
import Title from "../common/Title";
import Time from "../common/Time";
import cn from "@/lib/cn";
import photoStoryIcon from "../../assets/images/icon/photo.png";

interface IFourPhotoStoriesWithOneBigProps {
  stories: IStory[];
  title: string;
  category: ICategory;
}

function FourPhotoStoriesWithOneBig({
  stories,
  title,
  category,
}: IFourPhotoStoriesWithOneBigProps) {
  return (
    <Section>
      <div className="container">
        <SectionHeading href={category.slug}>{title}</SectionHeading>
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-[auto_300px] gap-5 lg:gap-9">
            <div className="border-right flex flex-col gap-5 lg:gap-12">
              {
                stories?.length > 0 && (
                  <div
                    className={cn(
                      "border-bottom before:h-0 lg:before:h-[1px] before:-bottom-6"
                    )}
                  >
                    <StoryWithImageTitleExcerpt
                      title={stories[0]?.title}
                      excerpt={stories[0]?.excerpt}
                      imageUrl={getImageUrl(stories[0])}
                      slug=""
                      href={getStoryHref(stories[0])}
                      display_tags={stories[0]?.display_tags}
                      isLiveActive={stories[0]?.is_live_news}
                      publishedTime={getStoryDate(
                        new Date(stories[0]?.first_published_at),
                        false
                      )}
                      photoStoriesWatermark={true}
                    />
                  </div>
                )
              }
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-9">
                {
                  stories?.length > 5 && (
                    <div className="block lg:hidden group">
                      <Link href={getStoryHref(stories[5])} className="block">
                        <div className="relative w-full aspect-video">
                          <Image
                            className="object-cover h-full w-full"
                            src={getImageUrl(stories[5])}
                            alt=""
                            fill={true}
                          />

                          <div className="absolute top-0 left-0 p-2">
                            <Image
                              src={photoStoryIcon}
                              alt="photo-icon-Watermark"
                              className=" w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]"
                            />
                          </div>
                        </div>
                      </Link>
                      <div className="mt-2">
                        <Title
                          size="large"
                          href={getStoryHref(stories[5])}
                          display_tags={stories[5]?.display_tags}
                          isLiveActive={stories[5]?.is_live_news}
                        >
                          {stories[5]?.title}
                        </Title>
                      </div>
                      <Time className="mt-2">
                        {getStoryDate(
                          new Date(stories[5]?.first_published_at),
                          false
                        )}
                      </Time>
                    </div>
                  )
                }
                {stories.slice(1, 4).map((story, index) => (
                  <div key={index} className="border-right block group">
                    <Link href={getStoryHref(story)} className="block">
                      <div className="relative w-full aspect-video">
                        <Image
                          className="object-cover h-full w-full"
                          src={getImageUrl(story)}
                          alt=""
                          fill={true}
                        />
                        <div className="absolute top-0 left-0 p-2">
                          <Image
                            src={photoStoryIcon}
                            alt="photo-icon-Watermark"
                            className=" w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]"
                          />
                        </div>
                      </div>
                    </Link>
                    <div className="mt-2">
                      <Title
                        size="medium"
                        href={getStoryHref(story)}
                        display_tags={story?.display_tags}
                        isLiveActive={story?.is_live_news}
                      >
                        {story?.title}
                      </Title>
                    </div>
                    <Time className="mt-2">
                      {getStoryDate(new Date(story?.first_published_at), false)}
                    </Time>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-9 h-full">
              {/* <AddSquare
                add={{
                  image: sq1,
                  link: "https://www.google.com",
                  alt: "Advertisement",
                }}
              /> */}

              {
                stories?.length > 4 && (
                  <div className="border-bottom before:h-[0px] lg:before:h-[1px]  block group">
                    <Link href={getStoryHref(stories[4])} className="block">
                      <div className="relative w-full aspect-video">
                        <Image
                          className="object-cover h-full w-full"
                          src={getImageUrl(stories[4])}
                          alt=""
                          fill={true}
                        />
                        <div className="absolute top-0 left-0 p-2">
                          <Image
                            src={photoStoryIcon}
                            alt="photo-icon-Watermark"
                            className=" w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]"
                          />
                        </div>
                      </div>
                    </Link>
                    <div className="mt-2">
                      <Title
                        size="medium"
                        href={getStoryHref(stories[4])}
                        display_tags={stories[4]?.display_tags}
                        isLiveActive={stories[4]?.is_live_news}
                      >
                        {stories[4]?.title}
                      </Title>
                    </div>
                    <Time className="mt-2">
                      {getStoryDate(new Date(stories[4]?.first_published_at), false)}
                    </Time>
                  </div>
                )
              }

              {
                stories?.length > 5 && (
                  <div className="flex-1 hidden lg:block group">
                    <div className="h-full flex flex-col">
                      <Link
                        className="block h-full w-full"
                        href={getStoryHref(stories[5])}
                      >
                        <div className="h-full w-full relative">
                          <Image
                            src={getImageUrl(stories[5])}
                            alt={stories[1]?.title}
                            fill={true}
                            objectFit="cover"
                          />
                          <div className="absolute top-0 left-0 p-2">
                            <Image
                              src={photoStoryIcon}
                              alt="photo-icon-Watermark"
                              className=" w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]"
                            />
                          </div>
                        </div>
                      </Link>
                      <div className="mt-2">
                        <Title
                          size="large"
                          href={getStoryHref(stories[5])}
                          display_tags={stories[5]?.display_tags}
                          isLiveActive={stories[5]?.is_live_news}
                        >
                          {stories[5]?.title}
                        </Title>
                      </div>
                      <Time className="mt-1">
                        {getStoryDate(
                          new Date(stories[5]?.first_published_at),
                          false
                        )}
                      </Time>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
          <MoreButton href={category.slug} />
        </div>
      </div>
      {/* <SectionBottomAdd /> */}
    </Section>
  );
}

export default FourPhotoStoriesWithOneBig;
