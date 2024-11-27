import React from 'react'
import Section from '../common/Section'
import StoryWithImageTitleExcerpt from '../common/StoryWithImageTitleExcerpt'
import leadData from '@/assets/data/lead'
import { getImageUrl } from '@/lib/imageUrl'
import SectionHeading from '../common/SectionHeading'
import StoryCard from '../common/StoryCard'
import StoryList from '../common/StoryList'
import { ICategory, IStory } from '@/config/interfaces/interfaces'
import { getStoryHref } from '@/lib/href'
import SectionBottomAdd from '../common/SectionBottomAdd'
import MoreButton from '../common/MoreButton'
import { getStoryDate } from '@/utils'
import cn from '@/lib/cn'

interface ISevenStoriesOneBigProps {
    title: string;
    stories: IStory[];
    category: ICategory;
}

function SevenStoriesOneBig({ title, stories, category }: ISevenStoriesOneBigProps) {
    return (
        <Section>
            <div className="container">
                <SectionHeading href={category.slug}>
                    {title}
                </SectionHeading>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-9'>
                    <div className='lg:col-span-2 border-right'>
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
                    </div>
                    <div className='border-right'>
                        <div className='flex flex-col gap-9'>
                            {
                                stories.slice(1, 3).map((story, index) => {
                                    if (index === 0) {
                                        return (
                                            <div key={index} className={cn('border-bottom last:before:h-[1px] lg:last:before:h-0')}>
                                                <StoryCard
                                                    className='lg:block hidden'
                                                    classTitleContainer='min-h-[5.25rem]'
                                                    key={index}
                                                    title={story.title}
                                                    imageUrl={getImageUrl(story)}
                                                    slug=''
                                                    href={getStoryHref(story)}
                                                    isLiveActive={story?.is_live_news}
                                                    publishedTime={getStoryDate(new Date(story?.first_published_at), false)}
                                                />
                                                <StoryList
                                                    classContainer='lg:hidden block'
                                                    key={index}
                                                    title={story.title}
                                                    imageUrl={getImageUrl(story)}
                                                    slug=''
                                                    href={getStoryHref(story)}
                                                    isLiveActive={story?.is_live_news}
                                                    reverseOrder={true}
                                                    publishedTime={getStoryDate(new Date(story?.first_published_at), false)}
                                                />
                                            </div>

                                        )

                                    }

                                    else {
                                        return (
                                            <div key={index} className='border-bottom last:before:h-[1px] lg:last:before:h-0'>
                                                <StoryList
                                                    key={index}
                                                    title={story.title}
                                                    imageUrl={getImageUrl(story)}
                                                    slug=''
                                                    href={getStoryHref(story)}
                                                    display_tags={story?.display_tags}
                                                    isLiveActive={story?.is_live_news}
                                                    reverseOrder={true}
                                                    publishedTime={getStoryDate(new Date(story?.first_published_at), false)}
                                                />
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                    <div className='relative'>
                        <div className='flex flex-col gap-9' >
                            {
                                stories.slice(3, 5).map((story, index) => {
                                    if (index === 0) {
                                        return (
                                            <div key={index} className='border-bottom'>
                                                <StoryCard
                                                    className='lg:block hidden'
                                                    classTitleContainer='min-h-[5.25rem]'
                                                    key={index}
                                                    title={story.title}
                                                    imageUrl={getImageUrl(story)}
                                                    slug=''
                                                    href={getStoryHref(story)}
                                                    isLiveActive={story?.is_live_news}
                                                    publishedTime={getStoryDate(new Date(story?.first_published_at), false)}
                                                />
                                                <StoryList
                                                    classContainer='lg:hidden block'
                                                    key={index}
                                                    title={story.title}
                                                    imageUrl={getImageUrl(story)}
                                                    slug=''
                                                    href={getStoryHref(story)}
                                                    isLiveActive={story?.is_live_news}
                                                    reverseOrder={true}
                                                    publishedTime={getStoryDate(new Date(story?.first_published_at), false)}
                                                />
                                            </div>

                                        )

                                    }

                                    else {
                                        return (
                                            <div key={index} className='border-bottom'>
                                                <StoryList
                                                    key={index}
                                                    title={story.title}
                                                    imageUrl={getImageUrl(story)}
                                                    slug=''
                                                    href={getStoryHref(story)}
                                                    isLiveActive={story?.is_live_news}
                                                    reverseOrder={true}
                                                    publishedTime={getStoryDate(new Date(story?.first_published_at), false)}
                                                />
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                        <MoreButton href={category.slug} className='-bottom-12' />
                    </div>
                </div>
            </div>
            {/* <SectionBottomAdd /> */}
        </Section>
    )
}

export default SevenStoriesOneBig