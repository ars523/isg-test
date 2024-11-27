import Section from '@/Components/common/Section'
import { baseURL } from '@/config/api/api'
import { IStory } from '@/config/interfaces/interfaces'
import Image from 'next/image'
import React from 'react'
import sq1 from '@/assets/images/adds/sq1.gif'
import AddSquare from '@/Components/common/AddSquare'
import Add970X90 from '@/Components/common/Add970X90'
import Link from 'next/link'
import { getStoryHref } from '@/lib/href'
import { notFound } from 'next/navigation'
import TopAdd from '@/Components/common/TopAdd'
import { FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6'
import Title from '@/Components/common/Title'
import { getImageUrl } from '@/lib/imageUrl'

const fetchMostReadStories = async (currentPageNo: number) => {
    const res = await fetch(`${baseURL}/api/v2/most-read-stories?page=${currentPageNo}&page_size=17`);
    const data = await res.json();
    return data
};

const MostViewedPage = async ({ searchParams }: { searchParams: { page: string } }) => {
    const currentPageNo = searchParams?.page ? parseInt(searchParams.page) : 1;
    const data = await fetchMostReadStories(currentPageNo);
    const mostReadStories: IStory[] = data.results;

    if (!mostReadStories || mostReadStories.length === 0) {
        notFound();
    }

    return (
        <div>
            <Section>
                <TopAdd />
                <div className="container">
                    {
                        currentPageNo === 1 ? (
                            <>
                                {/* Top Big Story */}
                                <div className='grid lg:grid-cols-[auto_300px] gap-6 mb-6'>
                                    <div
                                        className='grid grid-cols-1 lg:grid-cols-3 gap-5'
                                    >
                                        <div className='order-2 lg:order-1'>
                                            <Title
                                                display_tags={mostReadStories[0]?.display_tags}
                                                href={getStoryHref(mostReadStories[0])}
                                                className='text-[28px] leading-[38px]'
                                                isLiveActive={mostReadStories[0]?.is_live_news}
                                            >
                                                {mostReadStories[0]?.title}
                                            </Title>
                                            <p className='text-[17px] text-[#444] lg:line-clamp-6 line-clamp-3'>{mostReadStories[0]?.excerpt}</p>
                                        </div>
                                        <div className='lg:col-span-2 order-1 lg:order-2'>
                                            <Link href={getStoryHref(mostReadStories[0])}>
                                                <div className='w-full aspect-video relative'>
                                                    <Image
                                                        className='object-cover'
                                                        src={getImageUrl(mostReadStories[0])}
                                                        alt={mostReadStories[0]?.title}
                                                        fill
                                                    />
                                                    {/* {
                                                        slug === 'video' && (
                                                            <PlayIcon size={24} />
                                                        )
                                                    } */}
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div>
                                        <AddSquare
                                            add={
                                                {
                                                    image: sq1,
                                                    link: '',
                                                    alt: 'Add'
                                                }
                                            }
                                        />
                                    </div>
                                </div>

                                {/* Middle Four Stories */}
                                <div className='grid lg:grid-cols-4 grid-cols-1 gap-6'>
                                    {
                                        mostReadStories.slice(1, 5).map((story, index: number) => (
                                            <div
                                                key={index}
                                                className='grid grid-cols-10 lg:grid-cols-3 gap-5 lg:block'
                                            >
                                                <Link className='col-span-4 lg:col-span-1' href={getStoryHref(story)}>
                                                    <div className='w-full aspect-video relative mb-2'>
                                                        <Image
                                                            className='object-cover'
                                                            src={getImageUrl(story)}
                                                            alt={story?.title}
                                                            fill
                                                        />
                                                        {/* {
                                                            slug === 'video' && (
                                                                <PlayIcon />
                                                            )
                                                        } */}
                                                    </div>
                                                </Link>
                                                <div className='col-span-6 lg:col-span-2'>
                                                    <Title
                                                        href={getStoryHref(story)}
                                                        display_tags={story?.display_tags}
                                                        className='text-xl'
                                                        isLiveActive={story?.is_live_news}
                                                    >
                                                        {story?.title}
                                                    </Title>
                                                    <div className='hidden lg:block'>
                                                        <p className='text-base text-[#444] line-clamp-2'>{story?.excerpt}</p>
                                                    </div>
                                                </div>
                                            </div>

                                        ))
                                    }
                                </div>
                                <div className='my-12'>
                                    <Add970X90 />
                                </div>

                                {/* Bottom Stories */}
                                <div className='max-w-[970px] mx-auto grid lg:grid-cols-[auto_300px] gap-6'>
                                    <div>
                                        {
                                            mostReadStories.slice(5).map((story, index: number) => (
                                                <div

                                                    key={index}
                                                    className='block mb-6 group-last:mb-0'
                                                >
                                                    <div className='grid grid-cols-3 gap-5'>
                                                        <Link className='block w-full' href={getStoryHref(story)}>
                                                            <div className='w-full aspect-video relative'>
                                                                <Image
                                                                    className='object-cover'
                                                                    src={getImageUrl(story)}
                                                                    alt={story?.title}
                                                                    fill
                                                                />
                                                                {/* {
                                                                    slug === 'video' && (
                                                                        <PlayIcon />
                                                                    )
                                                                } */}
                                                            </div>
                                                        </Link>
                                                        <div className='col-span-2'>
                                                            <Title
                                                                className='text-xl'
                                                                href={getStoryHref(story)}
                                                                display_tags={story?.display_tags}
                                                                isLiveActive={story?.is_live_news}
                                                            >
                                                                {story?.title}
                                                            </Title>
                                                            <div className='hidden lg:block'>
                                                                <p className='text-base text-[#444] line-clamp-2'>{story?.excerpt}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {
                                                        (index + 1) === 6 && (
                                                            <div className='flex lg:justify-end mt-6 lg:mr-10'>
                                                                <AddSquare
                                                                    add={{
                                                                        image: sq1,
                                                                        link: '',
                                                                        alt: '',
                                                                    }}
                                                                />
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                            ))
                                        }

                                        <div className='w-full flex justify-end gap-8'>

                                            {
                                                data?.previous && (
                                                    <Link href={`/most-viewed?page=${currentPageNo - 1}`} className=''>
                                                        <FaAnglesLeft color='#006563' size={24} />
                                                    </Link>
                                                )
                                            }

                                            {
                                                data?.next && (
                                                    <Link href={`/most-viewed?page=${currentPageNo + 1}`} className=''>
                                                        <FaAnglesRight color='#006563' size={24} />
                                                    </Link>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div>
                                        <AddSquare
                                            add={
                                                {
                                                    image: sq1,
                                                    link: '',
                                                    alt: 'Add'
                                                }
                                            }
                                        />
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className='max-w-[970px] mx-auto grid lg:grid-cols-[auto_300px] gap-6'>
                                <div>
                                    {
                                        mostReadStories.map((story, index: number) => (
                                            <div

                                                key={index}
                                                className='block mb-6 group-last:mb-0'
                                            >
                                                <div className='grid grid-cols-3 gap-5'>
                                                    <Link className='block w-full' href={getStoryHref(story)}>
                                                        <div className='w-full aspect-video relative'>
                                                            <Image
                                                                className='object-cover'
                                                                src={getImageUrl(story)}
                                                                alt={story?.title}
                                                                fill
                                                            />
                                                            {/* {
                                                                slug === 'video' && (
                                                                    <PlayIcon />
                                                                )
                                                            } */}
                                                        </div>
                                                    </Link>
                                                    <div className='col-span-2'>
                                                        <Title
                                                            className='text-xl mb-1'
                                                            href={getStoryHref(story)}
                                                            display_tags={story?.display_tags}
                                                            isLiveActive={story?.is_live_news}
                                                        >
                                                            {story?.title}
                                                        </Title>
                                                        <p className='text-base text-[#444] line-clamp-2'>{story?.excerpt}</p>
                                                    </div>
                                                </div>
                                                {
                                                    (index + 1) === 6 && (
                                                        <div className='flex lg:justify-end mt-6 lg:mr-10'>
                                                            <AddSquare
                                                                add={{
                                                                    image: sq1,
                                                                    link: '',
                                                                    alt: '',
                                                                }}
                                                            />
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        ))
                                    }

                                    <div className='w-full flex justify-end gap-8'>

                                        {
                                            data?.previous && (
                                                <Link href={`/most-viewed?page=${currentPageNo - 1}`} className=''>
                                                    <FaAnglesLeft color='#006563' size={24} />
                                                </Link>
                                            )
                                        }

                                        {
                                            data?.next && (
                                                <Link href={`/most-viewed?page=${currentPageNo + 1}`} className=''>
                                                    <FaAnglesRight color='#006563' size={24} />
                                                </Link>
                                            )
                                        }
                                    </div>
                                </div>
                                <div>
                                    <AddSquare
                                        add={
                                            {
                                                image: sq1,
                                                link: '',
                                                alt: 'Add'
                                            }
                                        }
                                    />
                                </div>
                            </div>
                        )
                    }
                    <div className='mt-6'>
                        <Add970X90 />
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default MostViewedPage