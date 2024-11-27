'use client'
import { IStoryDetails } from '@/config/interfaces/interfaces'
import cn from '@/lib/cn'
import React from 'react'
import CopyUrl from './CopyUrl'
import SocialShareButtons from './SocialShareButtons'
import ClientPrintWrapper from './ClientPrintWrapper'
import { getStoryTime } from '@/utils'
import Link from 'next/link'
import Image from 'next/image'
import dayjs from 'dayjs'

function LiveDetails({ story, referer }: { story: IStoryDetails, referer: string }) {
    return (
        <div>
            <div className="bg-[#cce7e8] mb-8 py-4">
                <div className="container">
                    <div className="grid grid-cols-12">
                        <div className="col-span-3 hidden lg:block"></div>
                        <div className="lg:col-span-5 col-span-full">
                            {story.is_live_news && (
                                <div className="inline-flex items-center mb-2">
                                    <div
                                        className={cn(
                                            "inline-flex justify-center items-center w-5 h-5 rounded-full border-2 border-red-600"
                                        )}
                                    >
                                        {/* Inner Circle */}
                                        <div
                                            className={cn(
                                                "w-3 h-3 bg-red-600 rounded-full blink-animation"
                                            )}
                                        ></div>
                                    </div>
                                    <span className="ml-2 text-red-600 font-bold text-lg">
                                        সরাসরি
                                    </span>
                                </div>
                            )}
                            <h1 className="text-[2.6rem] leading-[3.5rem] text-[#3c3c3c] font-bold mb-4">
                                {story?.title}
                            </h1>
                            <div className=" flex items-center gap-x-2">
                                <CopyUrl />
                                <SocialShareButtons
                                    shareUrl={referer || ""}
                                    title={story?.title}
                                />
                                <ClientPrintWrapper story={story} />
                            </div>
                        </div>
                        <div className="col-span-4 hidden lg:block"></div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-full lg:col-span-3">
                        <div className="sticky top-20">
                            {[...(story.live_news_content_story || [])]
                                .sort((a, b) => b.id - a.id)
                                .map((item, index) => (
                                    <button
                                        onClick={() => {
                                            const element = document.getElementById(`section${item.id}`)
                                            if (element) {
                                                element.scrollIntoView({
                                                    behavior: "smooth",
                                                    block: "start",
                                                })
                                            }
                                        }}
                                        key={index}
                                        className="group block"
                                    >
                                        <div className="group-last:border-white group-last:pb-0 relative pb-5 pl-4 border-l before:absolute before:left-0 before:-translate-x-1/2 before:w-4 before:h-4 before:bg-gray-200 before:rounded-full group-hover:before:bg-[#006563] before:transition-all duration-300">
                                            <div className="font-bold leading-none -mt-1 mb-1">
                                                {getStoryTime(dayjs(item.created_at))}
                                            </div>
                                            <div>{item.title}</div>
                                        </div>
                                    </button>
                                ))}
                        </div>
                    </div>
                    <div className="lg:col-span-5 col-span-full">
                        {[...(story.live_news_content_story ?? [])]
                            .sort((a, b) => b.id - a.id)
                            .map((item, index) => (
                                <div
                                    key={index}
                                    id={`section${item.id}`}
                                    className="mb-10"
                                >
                                    <div className="border-[#006563] bg-[#cce7e8] border rounded-xl w-fit px-5 mb-4">
                                        {getStoryTime(dayjs(item.created_at))}
                                    </div>
                                    <div className=" relative ml-2 border-l border-[#cce7e8] pl-6 pt-1 before:absolute before:w-4 before:h-4 before:bg-[#006563] before:rounded-full before:left-0 before:bottom-0 before:-translate-x-2">
                                        <div className="mb-4">
                                            <h2 className="text-xl font-bold">{item.title}</h2>
                                        </div>
                                        <div className="mb-5">
                                            {item.image ? (
                                                <div className="w-full aspect-video relative">
                                                    <Image
                                                        src={item.image.url}
                                                        alt={item.title}
                                                        width={item?.image?.width || 800}
                                                        height={item?.image?.height || 450}

                                                    />
                                                </div>
                                            ) : null}
                                            {
                                                item?.image_captions && (
                                                    <div className="text-[#757575] text-lg bg-[#F0F0ED] pt-1 pb-1 px-2 border-gray-300 border-b">
                                                        {item?.image_captions}
                                                    </div>
                                                )
                                            }
                                        </div>
                                        <div
                                            className="story-details text-lg lg:text-[19px] leading-[1.7] text-[#000000] mb-8 story-details"
                                            dangerouslySetInnerHTML={{ __html: item.content }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <div className="lg:col-span-4 col-span-full"></div>
                </div>
            </div>
        </div>
    )
}

export default LiveDetails