import React from 'react'
import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'
import StoryWithImageTitleExcerpt from '../common/StoryWithImageTitleExcerpt'
import leadData from '@/assets/data/lead'
import { getImageUrl } from '@/lib/imageUrl'
import AddSquare from '../common/AddSquare'

import sq1 from '@/assets/images/adds/sq1.gif'
import StoryCard from '../common/StoryCard'
import { ICategory, IStory } from '@/config/interfaces/interfaces'
import AreaFilter from '../common/AreaFilter'
import { getStoryHref } from '@/lib/href'
import SectionBottomAdd from '../common/SectionBottomAdd'
import MoreButton from '../common/MoreButton'
import { getStoryDate } from '@/utils'
import StoryList from '../common/StoryList'
import Ad300x250 from '../AddComponents/Ad300x250'
import Script from 'next/script'

interface IThreeStoriesWithFilteringProps {
    title: string;
    stories: IStory[];
    category: ICategory;
}

function ThreeStoriesWithFiltering({ title, stories, category }: IThreeStoriesWithFilteringProps) {
    return (
        <Section>
            <div className="container">
                <SectionHeading href={category.slug}>
                    {title}
                </SectionHeading>
                <div className='grid grid-cols-1 lg:grid-cols-[2fr_1fr_300px] gap-9'>
                    <div className='border-right'>
                        <StoryWithImageTitleExcerpt
                            title={stories[0]?.title}
                            excerpt={stories[0]?.excerpt}
                            imageUrl={getImageUrl(stories[0])}
                            slug={''}
                            excerptClass=''
                            href={getStoryHref(stories[0])}
                            display_tags={stories[0]?.display_tags}
                            isLiveActive={stories[0]?.is_live_news}
                            publishedTime={getStoryDate(new Date(stories[0]?.first_published_at), false)}
                            highlight={stories[0]?.highlight}
                        />
                    </div>
                    <div className='border-right relative'>
                        <div className='flex flex-col gap-9'>
                            {
                                stories.slice(1, 3).map((story, index) => (
                                    <div
                                        key={index}
                                        className='border-bottom last:before:h-[1px] lg:last:before:h-[0px]'
                                    >
                                        <StoryCard
                                            className='lg:block hidden'
                                            title={story.title}
                                            imageUrl={getImageUrl(story)}
                                            slug={''}
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
                        <MoreButton href={category.slug} />
                    </div>
                    <div className='flex flex-col gap-9'>
                        {
                            stories?.length > 3 && (
                                <div
                                    className='border-bottom'
                                >
                                    <StoryCard
                                        className='lg:block hidden'
                                        title={stories[3].title}
                                        imageUrl={getImageUrl(stories[3])}
                                        slug={''}
                                        href={getStoryHref(stories[3])}
                                        display_tags={stories[3]?.display_tags}
                                        isLiveActive={stories[3]?.is_live_news}
                                        publishedTime={getStoryDate(new Date(stories[3]?.first_published_at), false)}
                                    />
                                    <StoryList
                                        classContainer='lg:hidden block'
                                        title={stories[3].title}
                                        imageUrl={getImageUrl(stories[3])}
                                        slug=''
                                        href={getStoryHref(stories[3])}
                                        display_tags={stories[3]?.display_tags}
                                        isLiveActive={stories[3]?.is_live_news}
                                        publishedTime={getStoryDate(new Date(stories[3].first_published_at), false)}
                                    />
                                </div>
                            )
                        }
                        {/* <AddSquare
                            add={{
                                image: sq1,
                                link: '/',
                                alt: 'Add'
                            }}
                        /> */}
                        {/* <Ad300x250>
                  <div id="div-gpt-ad-8687054-2">
                    <Script
                      id="div-gpt-ad-8687054-2"
                      dangerouslySetInnerHTML={{
                        __html: `googletag.cmd.push(function() { googletag.display('div-gpt-ad-8687054-2'); });`,
                      }}
                    ></Script>
                  </div>
                </Ad300x250> */}
                        <div className='w-full'>
                            <AreaFilter />
                        </div>
                    </div>


                </div>
            </div>
            {/* <SectionBottomAdd /> */}
        </Section>
    )
}

export default ThreeStoriesWithFiltering