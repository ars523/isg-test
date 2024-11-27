import { IFeatured } from '@/config/interfaces/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ItemTopTitle from './ItemTopTitle'
import cn from '@/lib/cn'
import { ClassValue } from 'clsx'
import PlayIcon from './PlayIcon'
import { getFeaturedStoryHref } from '@/lib/href'
import Title from './Title'
import Time from './Time'
import { getStoryDate } from '@/utils'

function StoriesColumnWithTopCardAndLists({ stories, cardContainerClass }: { stories: IFeatured[], cardContainerClass?: ClassValue }) {
    return (
        <div className='flex flex-col gap-9 relative before:block lg:before:w-[1px] before:h-full before:absolute before:top-0 before:-right-[18px] before:bg-[#BEBDBD] before:last:w-0'>
            <div className='hidden lg:block relative before:block before:h-[1px] last:before:h-0 before:w-full before:absolute before:left-0 before:-bottom-[19px] before:bg-[#BEBDBD]'>
                {
                    stories?.length > 0 && (
                        <div>
                            <Link href={getFeaturedStoryHref(stories[0])}>
                                <div className='w-full aspect-video relative mb-2'>
                                    <Image
                                        src={stories[0]?.img_url}
                                        alt="Story"
                                        className='w-full h-full object-cover'
                                        fill={true}
                                    />
                                    {stories[0]?.story_type === 'Video Story' && <PlayIcon size={18} />}
                                </div>
                            </Link>
                            {
                                stories[0]?.highlight && (
                                    <div className="text-lg text-red2 my-1">
                                        <div dangerouslySetInnerHTML={{ __html: stories[0]?.highlight }} />
                                    </div>
                                )
                            }
                            <div className='lg:min-h-[5.25rem]'>
                                <Title
                                    href={getFeaturedStoryHref(stories[0])}
                                    className=''
                                    featuredDisplayTag={stories[0]?.display_tags}
                                    isLiveActive={stories[0]?.is_live_news}
                                    size='large'

                                >
                                    {stories[0]?.title}
                                </Title>
                            </div>
                            <Time className='mt-2'>{getStoryDate(
                                new Date(stories[0]?.first_published_at),
                                false
                            )}</Time>
                        </div>
                    )
                }
            </div>
            <div className='border-bottom lg:hidden'>
                {
                    stories?.length > 0 && (
                        <ItemTopTitle
                            image={stories[0]?.img_url}
                            title={stories[0]?.title}
                            excerpt={stories[0]?.excerpt}
                            link={getFeaturedStoryHref(stories[0])}
                            storyType={stories[0]?.story_type}
                            featuredDisplayTag={stories[0]?.display_tags}
                            publishedTime={getStoryDate(new Date(stories[0]?.first_published_at), false)}
                            highlight={stories[0]?.highlight}
                        />
                    )
                }
            </div>
            {
                stories.slice(1).map((story, i) => (
                    <div key={i}
                        className={
                            cn('relative before:block before:h-[1px] lg:last:before:h-0 before:w-full before:absolute before:left-0 before:-bottom-[19px] before:bg-[#BEBDBD]',
                                cardContainerClass
                            )
                        }
                    >
                        <div
                            className='hidden lg:grid grid-cols-2 gap-2'
                        >
                            <div>
                                {
                                    story?.highlight && (
                                        <div className="text-base text-red2 mb-1">
                                            <div dangerouslySetInnerHTML={{ __html: story?.highlight }} />
                                        </div>
                                    )
                                }
                                <div className='min-h-[8.75rem]'>
                                    <Title
                                        href={getFeaturedStoryHref(story)}
                                        className=''
                                        size='large'
                                        featuredDisplayTag={story?.display_tags}
                                        isLiveActive={story?.is_live_news}
                                    >
                                        {story?.title}
                                    </Title>
                                </div>
                                <Time className='mt-2'>{getStoryDate(
                                    new Date(story.first_published_at),
                                    false
                                )}</Time>
                            </div>
                            <Link href={getFeaturedStoryHref(story)}>
                                <div className='w-full aspect-video relative'>
                                    <Image
                                        src={story.img_url}
                                        alt="Story"
                                        className='w-full h-full object-cover'
                                        fill={true}
                                    />
                                    {story.story_type === 'Video Story' && <PlayIcon size={16} />}
                                </div>
                            </Link>
                        </div>
                        <ItemTopTitle
                            className='lg:hidden'
                            image={story.img_url}
                            title={story.title}
                            excerpt={story.excerpt}
                            link={getFeaturedStoryHref(story)}
                            storyType={story.story_type}
                            featuredDisplayTag={story?.display_tags}
                            isLiveActive={story?.is_live_news}
                            publishedTime={getStoryDate(new Date(story?.first_published_at), false)}
                            highlight={story?.highlight}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default StoriesColumnWithTopCardAndLists