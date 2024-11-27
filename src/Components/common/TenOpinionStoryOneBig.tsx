import React from 'react'
import SectionHeading from './SectionHeading'
import Section from './Section'
import Image from 'next/image'
import { getImageUrl } from '@/lib/imageUrl'
import leadData from '@/assets/data/lead'
import { FaUser } from 'react-icons/fa'
import Link from 'next/link'
import OpinionList from './OpinionList'
import { ICategory, IStory, ITemplate } from '@/config/interfaces/interfaces'
import { getStoryHref } from '@/lib/href'
import SectionBottomAdd from './SectionBottomAdd'
import MoreButton from './MoreButton'
import Title from './Title'
import Caption from './Caption'

interface ITenOpinionStoryOneBigProps {
    title: string;
    templates: ITemplate[];
}

function TenOpinionStoryOneBig({ templates, title }: ITenOpinionStoryOneBigProps) {
    const opinions = templates.find((template) => template.category.slug === 'op-ed')
    const adda = templates.find((template) => template.category.slug === 'adda')
    return (
        <Section>
            <div className="container">
                <div className='grid grid-cols-1 lg:grid-cols-11 gap-9 items-start'>
                    <div className='lg:col-span-8 col-span-11 lg:gap-x-9 grid grid-cols-8'>
                        <SectionHeading
                            href='/op-ed'
                            className='col-span-full'
                        >
                            মতামত
                        </SectionHeading>
                        <div className='lg:col-span-2 col-span-full border-right flex flex-col gap-2 mb-9 lg:mb-0'>
                            {
                                opinions?.stories && (
                                    <div className='group'>
                                        <Link href={getStoryHref(opinions.stories[0])} className='flex justify-center mb-3'>
                                            {/* <Image
                                                height={128}
                                                width={128}
                                                className='rounded-full w-32 h-32 object-cover'
                                                src={getImageUrl(opinions?.stories[0])}
                                                alt={leadData[0].title}
                                            /> */}
                                            <div className='w-[75%] lg:w-[90%] aspect-square relative'>
                                                <Image
                                                    fill={true}
                                                    className='rounded-full object-cover border-[5px] border-[#9b9b9b]'
                                                    src={getImageUrl(opinions?.stories[0])}
                                                    alt={leadData[0].title}
                                                />
                                            </div>
                                        </Link>
                                        {opinions?.stories[0]?.highlight && (
                                            <div className="text-lg text-red2 my-1 ">
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: opinions?.stories[0]?.highlight,
                                                    }}
                                                />
                                            </div>
                                        )}
                                        <Title
                                            size='large'
                                            className=''
                                            href={getStoryHref(opinions.stories[0])}
                                            display_tags={opinions.stories[0]?.display_tags}
                                            isLiveActive={opinions.stories[0]?.is_live_news}
                                        >
                                            {opinions.stories[0]?.title}
                                        </Title>
                                        <p className='line-clamp-3 mt-2'>{opinions.stories[0]?.excerpt}</p>
                                    </div>
                                )
                            }
                            {
                                opinions && (
                                    <Link href={getStoryHref(opinions.stories[0])}>
                                        <div className='flex items-center gap-[6px]'>
                                            <FaUser size={12} />
                                            <h6 className='text-sm font-semibold'>{opinions.stories[0]?.blog_authors[0]?.author_name}</h6>
                                        </div>
                                    </Link>
                                )
                            }
                        </div>
                        <div className=' col-span-full lg:col-span-6 grid grid-cols-6 gap-9 relative border-right lg:last:before:w-[1px]'>

                            <div className='lg:col-span-6 col-span-full grid grid-cols-1 lg:grid-cols-2 gap-9'>
                                {
                                    opinions?.stories.slice(1, 7).map((story, index) => (
                                        <div key={index} className='border-bottom lg:[&:nth-child(5)]:before:h-0'>
                                            <OpinionList
                                                title={story.title}
                                                imageUrl={getImageUrl(story)}
                                                author={story.blog_authors[0]}
                                                slug={''}
                                                href={getStoryHref(story)}
                                                display_tags={story.display_tags}
                                            />
                                        </div>
                                    ))

                                }
                            </div>
                            <MoreButton href={'/op-ed'} />
                        </div>
                    </div>

                    <div className='lg:col-span-3 col-span-11 grid grid-cols-3 gap-x-9'>
                        <SectionHeading
                            className='col-span-full'
                            href={'/adda'}
                        >
                            আড্ডা
                        </SectionHeading>
                        <div className='lg:col-span-3 col-span-full border-right relative'>
                            <div className='flex flex-col gap-9 mb-3' >
                                {
                                    adda?.stories.slice(0, 3).map((story, index) => (
                                        <div key={index} className='border-bottom'>
                                            <div
                                                className='group'
                                            >
                                                <div
                                                    className='flex gap-3'
                                                >
                                                    <Link href={getStoryHref(story)}>
                                                        <div className='w-20 h-20 object-cover relative'>
                                                            <Image
                                                                className='object-cover'
                                                                fill={true}
                                                                src={getImageUrl(story)}
                                                                alt={story.title}
                                                            />
                                                        </div>
                                                    </Link>
                                                    <div className='flex-1'>
                                                        <Title
                                                            href={getStoryHref(story)}
                                                            className=''
                                                            size='large'
                                                            display_tags={story?.display_tags}
                                                            isLiveActive={story?.is_live_news}
                                                        >
                                                            {story.title}
                                                        </Title>
                                                        <Caption className="line-clamp-2 mt-1 lg:line-clamp-2 text-[16px]" >
                                                            {story.excerpt}
                                                        </Caption>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                            <MoreButton href={'/adda'} />
                        </div>
                    </div>
                </div>
            </div>
            {/* <SectionBottomAdd /> */}
        </Section>
    )
}

export default TenOpinionStoryOneBig