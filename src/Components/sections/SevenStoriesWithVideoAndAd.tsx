import React from 'react'
import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'
import AddSquare from '../common/AddSquare'

import sq from '@/assets/images/adds/sq1.gif'
import Link from 'next/link'
import VideoCard from '../common/VideoCard'
import leadData from '@/assets/data/lead'
import { get } from 'http'
import { getImageUrl } from '@/lib/imageUrl'
import StoryWithImageTitleExcerpt from '../common/StoryWithImageTitleExcerpt'
import StoryCard from '../common/StoryCard'
import StoryList from '../common/StoryList'
import { ICategory, IStory, IStoryDetails } from '@/config/interfaces/interfaces'
import { getStoryHref } from '@/lib/href'
import SectionBottomAdd from '../common/SectionBottomAdd'
import MoreButton from '../common/MoreButton'
import { get150Characters, getStoryDate } from '@/utils'

interface ISevenStoriesWithVideoAndAdProps {
    title: string;
    stories: IStory[];
    category: ICategory;
    video: IStoryDetails;
}

function SevenStoriesWithVideoAndAd({ title, stories, category, video }: ISevenStoriesWithVideoAndAdProps) {
    return (
        <Section>
            <div className='container'>
                <SectionHeading href={category.slug}>
                    {title}
                </SectionHeading>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-9'>
                    {/* Left Column */}
                    <div className='grid grid-cols-1 gap-9 lg:col-span-3 border-right relative'>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-9 border-bottom'>

                            {/* Left Side of the left column */}
                            <div className='lg:col-span-2 lg:row-span-2 border-right'>
                                {
                                    stories?.length > 0 && (
                                        <StoryWithImageTitleExcerpt
                                            title={stories[0]?.title}
                                            imageUrl={getImageUrl(stories[0])}
                                            slug=''
                                            excerpt={stories[0]?.excerpt}
                                            href={getStoryHref(stories[0])}
                                            display_tags={stories[0]?.display_tags}
                                            isLiveActive={stories[0]?.is_live_news}
                                            publishedTime={getStoryDate(new Date(stories[0].first_published_at), false)}
                                            highlight={stories[0]?.highlight}
                                        />
                                    )
                                }
                            </div >

                            {/* Right Side of the left column */}
                            <div className='flex flex-col gap-9'>
                                {
                                    stories.slice(1, 3).map((story, index) => (
                                        <div key={index} className='col-span-1 border-bottom'>
                                            <StoryCard
                                                className='lg:block hidden'
                                                classTitleContainer='min-h-[5.25rem]'
                                                title={story.title}
                                                imageUrl={getImageUrl(story)}
                                                slug=''
                                                href={getStoryHref(story)}
                                                display_tags={story?.display_tags}
                                                isLiveActive={story?.is_live_news}
                                                publishedTime={getStoryDate(new Date(story?.first_published_at), false)}
                                            />
                                            <StoryList
                                                classContainer='lg:hidden block'
                                                title={story.title}
                                                imageUrl={getImageUrl(story)}
                                                slug=''
                                                href={getStoryHref(story)}
                                                display_tags={story?.display_tags}
                                                isLiveActive={story?.is_live_news}
                                                publishedTime={getStoryDate(new Date(story.first_published_at), false)}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        {/* Bottom of the left column */}
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-9'>
                            {
                                stories.slice(3, 6).map((data, index) => (
                                    <div key={index} className='col-span-1 row-span-1 border-bottom lg:before:h-0 last:before:h-[1px] lg:last:before:h-[0px]'>
                                        <StoryList
                                            title={data.title}
                                            imageUrl={getImageUrl(data)}
                                            slug=''
                                            href={getStoryHref(data)}
                                            display_tags={data?.display_tags}
                                            isLiveActive={data?.is_live_news}
                                            publishedTime={getStoryDate(new Date(data.first_published_at), false)}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                        <MoreButton href={category.slug} />
                    </div>

                    {/* Right Column */}
                    <div className='col-span-full lg:col-span-1 flex flex-col gap-9'>
                        {
                            stories?.length > 6 && (
                                <div className='col-span-1 row-span-1 border-bottom lg:before:h-[1px] before:h-[0px]'>
                                    <StoryCard
                                        className='lg:block hidden'
                                        classTitleContainer='min-h-[5.25rem]'
                                        title={stories[6]?.title}
                                        imageUrl={getImageUrl(stories[6])}
                                        slug=''
                                        href={getStoryHref(stories[6])}
                                        display_tags={stories[6]?.display_tags}
                                        isLiveActive={stories[6]?.is_live_news}
                                        publishedTime={getStoryDate(new Date(stories[6]?.first_published_at), false)}
                                    />
                                    <StoryList
                                        classContainer='lg:hidden block'
                                        title={stories[6].title}
                                        imageUrl={getImageUrl(stories[6])}
                                        slug=''
                                        href={getStoryHref(stories[6])}
                                        display_tags={stories[6]?.display_tags}
                                        isLiveActive={stories[6]?.is_live_news}
                                        publishedTime={getStoryDate(new Date(stories[6]?.first_published_at), false)}
                                    />
                                </div>
                            )
                        }

                        <div>
                            <div className='mb-2'>
                                <Link
                                    href='/'
                                >
                                    <h2 className='text-[#006563] text-2xl font-semibold'>ভিডিও</h2>
                                </Link>
                            </div>
                            {
                                video && (
                                    <VideoCard
                                        title={video?.title}
                                        imageUrl={video.video_thumbnail?.url || ''}
                                        slug={video?.news_slug || ''}
                                        publishedTime={getStoryDate(new Date(video?.meta?.first_published_at), false)}
                                        caption={get150Characters(video?.excerpt) + '...'}
                                    />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* <SectionBottomAdd /> */}
        </Section>
    )
}

export default SevenStoriesWithVideoAndAd