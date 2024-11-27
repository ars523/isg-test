/* eslint-disable @next/next/no-img-element */
"use client";
import "swiper/css";
import "swiper/css/free-mode";

import { MdAmpStories } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Title from "./Title";
import { useEffect, useState } from "react";
import { IStory } from "@/config/interfaces/interfaces";
import WebstoryLoader from "./WebstoryLoader";

function StorySlider({ items }: { items: IStory[] }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [loading]);
  return loading ? (
    <WebstoryLoader />
  ) : (
    <Swiper
      slidesPerView={3.1}
      spaceBetween={10}
      freeMode={true}
      pagination={false}
      navigation={true}
      slidesPerGroup={3}
      modules={[FreeMode, Navigation]}
      breakpoints={{
        640: {
          slidesPerView: 6.15,
          spaceBetween: 16,
        },
      }}
      className="mySwiper"
    >
      {items.map((story) => (
        <SwiperSlide key={story.id}>
          <a
            key={story.id}
            href={`/web-stories/${story?.subcategory_slug}/${story?.webstory_slug}`}
            target="_blank"
          >
            <div className="overflow-clip rounded-lg relative">
              <Image
                width={400}
                height={400}
                alt="story-thumbnail"
                src={story?.story_thumbnail?.url || ""}
                className="w-full h-48 md:h-72 object-cover hover:scale-110 transition-all duration-500 ease-in-out"
              />
              <div className="absolute top-2 right-2 bg-black bg-opacity-50 p-1 h-fit w-fit rounded-full">
                <MdAmpStories size={22} color="white" />
              </div>

              <div
                className={`w-full flex flex-col justify-end absolute bottom-0 bg-gradient-to-t from-gray-950 border-custom md:p-3 px-2 py-1 pointer-events-none h-1/2`}
              >
                <h3 className="text-white font-semibold text-[13px] md:text-base line-clamp-2">
                  {story?.title}
                </h3>
              </div>
            </div>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default StorySlider;
