import React from 'react'
import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'
import leadData from '@/assets/data/lead'
import StoryList from '../common/StoryList'
import { getImageUrl } from '@/lib/imageUrl'
import StoryCard from '../common/StoryCard'
import Link from 'next/link'
import { ICategory, IStory } from '@/config/interfaces/interfaces'
import { getStoryHref } from '@/lib/href'
import SectionBottomAdd from '../common/SectionBottomAdd'
import MoreButton from '../common/MoreButton'
import Title from '../common/Title'
import { getStoryDate } from '@/utils'
import Time from '../common/Time'

interface ISixStoriesWithRightListProps {
    title: string;
    stories: IStory[];
    category: ICategory
}

function SixStoriesWithRightList({ title, stories, category }: ISixStoriesWithRightListProps) {
    return (
        <Section>
            <div className="container">
                <SectionHeading href={category.slug}>{title}</SectionHeading>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-9'>
                    {
                        stories.slice(0, 3).map((data, index) => (
                            <div key={index} className='relative after:absolute after:h-[1px] lg:after:h-0 after:w-full after:left-0 after:-bottom-[19px] after:block after:bg-[#BEBDBD]  before:block lg:before:w-[1px] lg:before:h-full before:absolute lg:before:top-0 lg:before:-right-[18px] before:bg-[#BEBDBD] before:last:w-[1px]'>
                                <StoryCard
                                    title={data.title}
                                    imageUrl={getImageUrl(data)}
                                    slug=''
                                    href={getStoryHref(data)}
                                    display_tags={data?.display_tags}
                                    isLiveActive={data?.is_live_news}
                                    publishedTime={getStoryDate(new Date(data?.first_published_at), false)}
                                />
                            </div>
                        ))
                    }
                    {
                        stories.slice(3, 6).map((data, index) => (
                            <div key={index} className='lg:hidden border-bottom [&:nth-child(5)]:before:h-0 [&:nth-child(6)]:before:h-0'>
                                <StoryCard
                                    title={data.title}
                                    imageUrl={getImageUrl(data)}
                                    slug=''
                                    href={getStoryHref(data)}
                                    display_tags={data?.display_tags}
                                    isLiveActive={data?.is_live_news}
                                    publishedTime={getStoryDate(new Date(data?.first_published_at), false)}
                                />
                            </div>
                        ))
                    }
                    <div className='relative'>
                        <div className='hidden lg:flex flex-col gap-6' >
                            {
                                stories.slice(3, 6).map((data, index) => (
                                    <div key={index} className='border-bottom before:-bottom-3'>
                                        {/* <Link href={getStoryHref(data)} className='group'>
                                            <h3 className='font-bold text-[17px] line-clamp-2 group-hover:text-golden1'>{data.title}</h3>
                                        </Link> */}
                                        <Title
                                            size='medium'
                                            className='font-bold'
                                            href={getStoryHref(data)}
                                            isLiveActive={data?.is_live_news}
                                            display_tags={data?.display_tags}
                                        >
                                            {data.title}
                                        </Title>
                                        <Time className='mt-1'>{getStoryDate(new Date(data?.first_published_at), false)}</Time>
                                    </div>
                                ))
                            }
                        </div>
                        <MoreButton href={category.slug} />
                    </div>

                </div>
            </div>
            {/* <SectionBottomAdd /> */}
        </Section>
    )
}

export default SixStoriesWithRightList