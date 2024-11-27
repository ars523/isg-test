import Image from 'next/image'
import React from 'react'
import Time from './Time'
import { getStoryDate } from '@/utils'
import Link from 'next/link'
import cn from '@/lib/cn'
import { getHref } from '@/app/web-stories/page'
import { IWebStory } from '@/config/interfaces/interfaces'
import { MdAmpStories } from 'react-icons/md'

function WebStories({ webStories }: { webStories: IWebStory[] }) {

    const storyCardSize = (i: number): ('small' | 'large') => {
        if (i === 0 || i === 1 || i === 2 || i === 3 || i === 7 || i === 8 || i === 9 || i === 10) {
            return 'small'
        }
        else if (i === 4 || i === 5 || i === 6) {
            return 'large'
        }
        else return 'small'
    }

    const getPaddingTop = (i: number): ('big' | 'small' | '') => {
        if (i === 1 || i === 3 || i === 8 || i === 10) {
            return 'big'
        }
        else if (i === 5) {
            return 'small'
        }
        else return ''
    }

    return (
        <div className='grid grid-cols-12 gap-x-4 lg:gap-y-4 gap-y-8'>
            {
                webStories?.map((story, i) => (
                    <div key={story.id} className={
                        cn('col-span-6',
                            {
                                'lg:col-span-3': storyCardSize(i) === 'small',
                                'lg:col-span-4': storyCardSize(i) === 'large'
                            },
                            {
                                'translate-y-16 lg:translate-y-0': (i + 1) % 2 === 0 || i === 5
                            }
                        )
                    }>

                        <Link href={getHref(story)} target="_blank" className={cn('relative block',
                            {
                                'lg:mt-20': getPaddingTop(i) === 'big',
                                'lg:mt-8': getPaddingTop(i) === 'small'
                            },
                        )}>
                            {
                                (getPaddingTop(i) === 'small' || getPaddingTop(i) === 'big') && (
                                    <Time className="mb-2 hidden lg:flex">
                                        {getStoryDate(
                                            new Date(story?.meta?.first_published_at),
                                            false
                                        )}
                                    </Time>
                                )
                            }
                            {
                                ((i + 1) % 2 === 0 || i === 5) && (
                                    <Time className="mb-2 lg:hidden flex">
                                        {getStoryDate(
                                            new Date(story?.meta?.first_published_at),
                                            false
                                        )}
                                    </Time>
                                )
                            }
                            <div
                                className={`w-full flex flex-col justify-end absolute bottom-0 z-20 lg:px-3 pb-5 px-2 py-1 pointer-events-none`}
                            >
                                {
                                    story?.subcategories && story?.subcategories?.length > 0 && (
                                        <div className={
                                            cn('bg-golden1 relative z-20 w-fit mb-3 leading-[18px] pt-1 pb-[1px] font-bold px-4',
                                                {
                                                    'lg:text-[15px] lg:leading-[14px] lg:pt-1 lg:pb-[1px] lg:font-bold lg:px-4 lg:mb-[6px]': storyCardSize(i) === 'small',
                                                    'lg:text-lg lg:leading-[18px] lg:pt-1 lg:pb-[1px] lg:font-bold lg:px-4 lg:mb-3': storyCardSize(i) === 'large',
                                                }
                                            )
                                        }>

                                            {story.subcategories[0].name}
                                        </div>
                                    )}
                                <h2 className={
                                    cn("text-white font-semibold text-lg",
                                        {
                                            'lg:text-lg': storyCardSize(i) === 'small',
                                            'lg:text-2xl': storyCardSize(i) === 'large'
                                        }
                                    )
                                }>
                                    {story?.title}
                                </h2>
                            </div>

                            <div className='relative'>
                                <Image
                                    className='w-full h-full aspect-[640/1138] object-cover'
                                    src={story?.story_thumbnail?.meta?.download_url} alt={story?.title}
                                    width={640}
                                    height={1138}
                                />
                                <div className="hidden lg:block absolute top-2 right-2 bg-black bg-opacity-50 p-1 h-fit w-fit rounded-full">
                                    <MdAmpStories size={storyCardSize(i) === 'large' ? 26 : 22} color="white" />
                                </div>
                                <div className="lg:hidden block absolute top-2 right-2 bg-black bg-opacity-50 p-1 h-fit w-fit rounded-full">
                                    <MdAmpStories size={22} color="white" />
                                </div>
                                <div className='bg-gradient-to-t from-gray-950 via-transparent absolute bottom-0 top-0 left-0 right-0' />
                            </div>
                        </Link>
                        {
                            (getPaddingTop(i) === '') && (
                                <Time className="mt-2 hidden lg:flex">
                                    {getStoryDate(
                                        new Date(story?.meta?.first_published_at),
                                        false
                                    )}
                                </Time>
                            )

                        }
                        {
                            ((i + 1) % 2 != 0) && (
                                <Time className="mt-2 lg:hidden flex">
                                    {getStoryDate(
                                        new Date(story?.meta?.first_published_at),
                                        false
                                    )}
                                </Time>
                            )
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default WebStories