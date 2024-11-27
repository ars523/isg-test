import leadData from '@/assets/data/lead'
import Link from 'next/link'
import React from 'react'
import StoryCard from './StoryCard'
import { getImageUrl } from '@/lib/imageUrl'
import { ICategory, IStory } from '@/config/interfaces/interfaces'
import { getStoryHref } from '@/lib/href'
import Title from './Title'
import { getStoryDate } from '@/utils'
import Time from './Time'
import SectionHeading from './SectionHeading'

function StoriesWithTopCard({ stories, title, category }: { stories: IStory[], title: string, category: ICategory }) {
    return (
        <div className='border-right last:before:w-[0px]'>
            <SectionHeading href={category.slug} className='lg:hidden'>{title}</SectionHeading>
            <h2 className='hidden lg:block font-bold text-[26px] text-[#006563] py-4 sticky top-[61px] z-40 bg-white border-right before:bg-white'>
                <Link href={category.slug} className='hover:text-golden1'>
                    {title}
                </Link>
            </h2>
            <div className=''>
                <div className='flex flex-col gap-5'>
                    {
                        stories.slice(0, 4).map((story, index) => {
                            return (
                                <div key={index} className='border-bottom before:-bottom-[10px]'>
                                    {
                                        index === 0 ? (
                                            <StoryCard
                                                title={story.title}
                                                imageUrl={getImageUrl(story)}
                                                slug=''
                                                href={getStoryHref(story)}
                                                display_tags={story?.display_tags}
                                                isLiveActive={story?.is_live_news}
                                                publishedTime={getStoryDate(new Date(story?.first_published_at), false)}

                                            />
                                        ) : (
                                            <div>
                                                <Title
                                                    href={getStoryHref(story)}
                                                    size='large'
                                                    className=''
                                                    display_tags={story?.display_tags}
                                                    isLiveActive={story?.is_live_news}
                                                >
                                                    {story.title}
                                                </Title>
                                                {/* <Time className='mt-1'>{getStoryDate(new Date(story?.first_published_at), false)}</Time> */}
                                            </div>
                                        )
                                    }


                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default StoriesWithTopCard