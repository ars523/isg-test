import React from 'react'
import Section from '../common/Section'
import StoryWithImageTitleExcerpt from '../common/StoryWithImageTitleExcerpt'
import leadData from '@/assets/data/lead'
import { getImageUrl } from '@/lib/imageUrl'
import SectionHeading from '../common/SectionHeading'
import StoryCard from '../common/StoryCard'
import AddSquare from '../common/AddSquare'

import sq1 from '@/assets/images/adds/sq1.gif'
import { ICategory, IStory } from '@/config/interfaces/interfaces'
import { get } from 'http'
import { getStoryHref } from '@/lib/href'
import SectionBottomAdd from '../common/SectionBottomAdd'
import MoreButton from '../common/MoreButton'
import { getStoryDate } from '@/utils'

interface IFiveStoriesOneBigOneAddProps {
    title: string;
    stories: IStory[];
    category: ICategory
}

function FiveStoriesOneBigOneAdd({ title, stories, category }: IFiveStoriesOneBigOneAddProps) {
    return (
        <Section>
            <div className='container'>
                <SectionHeading href={category.slug}>{title}</SectionHeading>
                <div className='grid grid-cols-1 lg:grid-cols-[auto_300px_300px] gap-9'>
                    <div className='border-right'>
                        <StoryWithImageTitleExcerpt
                            title={stories[0]?.title}
                            excerpt={stories[0]?.excerpt}
                            imageUrl={getImageUrl(stories[0])}
                            slug=''
                            href={getStoryHref(stories[0])}
                            display_tags={stories[0]?.display_tags}
                            isLiveActive={stories[0]?.is_live_news}
                            publishedTime={getStoryDate(new Date(stories[0]?.first_published_at), false)}
                            highlight={stories[0]?.highlight}
                        />
                    </div>
                    <div className='border-right relative'>
                        <div className='flex flex-row lg:flex-col gap-9'>
                            {
                                stories.slice(1, 3).map((story, index) => (
                                    <div
                                        key={index}
                                        className='border-bottom last:before:h-[1px] lg:last:before:h-[0px] before:h-[1px] basis-1/2'
                                    >
                                        <StoryCard
                                            title={story?.title}
                                            classTitleContainer='min-h-[5.25rem]'
                                            imageUrl={getImageUrl(story)}
                                            slug=''
                                            href={getStoryHref(story)}
                                            display_tags={story?.display_tags}
                                            isLiveActive={story?.is_live_news}
                                            publishedTime={getStoryDate(new Date(story?.first_published_at), false)}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className='relative'>
                        <div className='flex flex-row lg:flex-col gap-9'>
                            {
                                stories.slice(3, 5).map((story, index) => (
                                    <div
                                        key={index}
                                        className='border-bottom before:h-0 lg:before:h-[1px] basis-1/2'
                                    >
                                        <StoryCard
                                            classTitleContainer='h-[5.25rem]'
                                            title={story?.title}
                                            imageUrl={getImageUrl(story)}
                                            slug=''
                                            href={getStoryHref(story)}
                                            display_tags={story?.display_tags}
                                            isLiveActive={story?.is_live_news}
                                            publishedTime={getStoryDate(new Date(story?.first_published_at), false)}
                                        />
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

export default FiveStoriesOneBigOneAdd