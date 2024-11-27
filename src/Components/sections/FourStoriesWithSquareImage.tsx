"use client";
import React from "react";
import Section from "../common/Section";
import leadData from "@/assets/data/lead";
import StoryCard from "../common/StoryCard";
import { getImageUrl } from "@/lib/imageUrl";
import SectionHeading from "../common/SectionHeading";
import { ICategory, IStory } from "@/config/interfaces/interfaces";
import { getStoryHref } from "@/lib/href";
import SectionBottomAdd from "../common/SectionBottomAdd";
import MoreButton from "../common/MoreButton";
import { getStoryDate } from "@/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";

interface IFourStoriesWithSquareImageProps {
  stories: IStory[];
  title: string;
  category: ICategory;
}

function FourStoriesWithSquareImage({
  stories,
  title,
  category,
}: IFourStoriesWithSquareImageProps) {
  return (
    <Section>
      <div className="container">
        <SectionHeading href={category.slug}>{title}</SectionHeading>
        <div className="relative">
          <div className="hidden lg:grid grid-cols-2 lg:grid-cols-4 gap-9">
            {stories.slice(0, 4).map((story, index) => (
              <div key={index} className="border-right">
                <StoryCard
                  title={story.title}
                  imageUrl={getImageUrl(story)}
                  slug=""
                  imageContainerClass="aspect-square"
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
          <div className="lg:hidden">
            <Swiper
              slidesPerView={2.4}
              spaceBetween={20}
              freeMode={true}
              pagination={false}
              navigation={false}
              slidesPerGroup={2}
              modules={[FreeMode, Navigation]}
              //   breakpoints={{
              //     640: {
              //       slidesPerView: 6.5,
              //       spaceBetween: 16,
              //     },
              //   }}
              className="mySwiper"
            >
              {stories.slice(0, 4).map((story, index) => (
                <SwiperSlide key={index}>
                  <div className="border-right">
                    <StoryCard
                      title={story.title}
                      imageUrl={getImageUrl(story)}
                      slug=""
                      imageContainerClass="aspect-square"
                      href={getStoryHref(story)}
                      display_tags={story?.display_tags}
                      isLiveActive={story?.is_live_news}
                      publishedTime={getStoryDate(
                        new Date(story?.first_published_at),
                        false
                      )}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <MoreButton href={category.slug} />
        </div>
      </div>
      {/* <SectionBottomAdd /> */}
    </Section>
  );
}

export default FourStoriesWithSquareImage;
