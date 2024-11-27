import React from 'react'
import StoryCard from '../common/StoryCard'
import { IStoryDetails } from '@/config/interfaces/interfaces'
import { getStoryDetailsTypeHref } from '@/lib/href'
import { getStoryDetailsImageUrl } from '@/lib/imageUrl'
import { getStoryDate } from '@/utils'
import Section from '../common/Section'
import Image from 'next/image'
import Link from 'next/link'
import StoryList from '../common/StoryList'

function Election({ stories }: { stories: IStoryDetails[] }) {
    return (
        <Section className='lg:mb-7 mb-4'>
            <div className='container px-0'>
                <div>
                    <div>
                        <Link href={'/topic/যুক্তরাষ্ট্র নির্বাচন ২০২৪'}>
                            <Image
                                src='https://images.ajkerpatrika.com/others/us-election-2.png'
                                className='w-full h-auto hidden md:block'
                                alt='Election Banner'
                                width={1280}
                                height={60}
                            />
                            <Image
                                src='https://images.ajkerpatrika.com/others/us-election-Mobile-version.png'
                                className='w-full h-auto md:hidden block'
                                alt='Election Banner'
                                width={380}
                                height={60}
                            />
                        </Link>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-4 gap-9 p-4 bg-[#F5F5FF]'>
                        {
                            stories.slice(0, 4).map((data, index) => (
                                <div key={index} className='relative after:absolute after:h-[1px] lg:after:h-0 after:w-full after:left-0 after:-bottom-[19px] after:block after:bg-[#BEBDBD]  before:block lg:before:w-[1px] last:before:w-[0px] last:after:h-[0px] lg:before:h-full before:absolute lg:before:top-0 lg:before:-right-[18px] before:bg-[#BEBDBD]'>
                                    <StoryCard
                                        className='hidden lg:block'
                                        title={data.title}
                                        imageUrl={getStoryDetailsImageUrl(data)}
                                        slug={''}
                                        href={getStoryDetailsTypeHref(data)}
                                        display_tags={data.display_tags}
                                        isLiveActive={data.is_live_news}
                                        publishedTime={getStoryDate(new Date(data?.meta?.first_published_at), false)}
                                        imageAlt={data.title}
                                    />
                                    <StoryList
                                        classContainer="lg:hidden block"
                                        title={data.title}
                                        className="grid-cols-3"
                                        classTextContainer="col-span-2"
                                        imageUrl={getStoryDetailsImageUrl(data)}
                                        slug={""}
                                        href={getStoryDetailsTypeHref(data)}
                                        isLiveActive={data.is_live_news}
                                        display_tags={data.display_tags}
                                        publishedTime={getStoryDate(new Date(data?.meta?.first_published_at), false)}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </Section>
    )
}

export default Election