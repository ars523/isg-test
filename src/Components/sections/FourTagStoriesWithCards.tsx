import React from 'react'
import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'
import { getStoryDetailsImageUrl } from '@/lib/imageUrl'
import StoryCard from '../common/StoryCard'
import { IStoryDetails } from '@/config/interfaces/interfaces'
import { getStoryDetailsTypeHref, getStoryHref } from '@/lib/href'
import MoreButton from '../common/MoreButton'
import { getStoryDate } from '@/utils'

interface IFourTagStoriesWithCardsProps {
    title: string;
    stories: IStoryDetails[];
    titleRef: string;
}

function FourTagStoriesWithCards({ titleRef, title, stories }: IFourTagStoriesWithCardsProps) {
    return (
        <Section>
            <div className="container">
                <SectionHeading href={titleRef}>
                    {title}
                </SectionHeading>
                <div className='relative'>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-9'>
                        {
                            stories?.slice(0, 4).map((data, index) => (
                                <div key={index} className='relative after:absolute after:h-[1px] [&:nth-child(3)]:after:h-0 [&:nth-child(4)]:after:h-0 lg:after:h-0 after:w-full after:left-0 after:-bottom-[19px] after:block after:bg-[#BEBDBD]  before:block lg:before:w-[1px] last:before:w-[0px] lg:before:h-full before:absolute lg:before:top-0 lg:before:-right-[18px] before:bg-[#BEBDBD]'>
                                    <StoryCard
                                        title={data.title}
                                        imageUrl={getStoryDetailsImageUrl(data)}
                                        slug={''}
                                        href={getStoryDetailsTypeHref(data)}
                                        display_tags={data.display_tags}
                                        isLiveActive={data.is_live_news}
                                        publishedTime={getStoryDate(new Date(data?.meta?.first_published_at), false)}
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <MoreButton href={titleRef} />
                </div>
            </div>
            {/* <SectionBottomAdd /> */}
        </Section>
    )
}

export default FourTagStoriesWithCards