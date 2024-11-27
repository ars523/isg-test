'use client'
import NotFound from '@/Components/common/NotFound'
import PulseLoader from '@/Components/common/PulseLoader'
import SearchBox from '@/Components/common/SearchBox'
import Time from '@/Components/common/Time'
import Title from '@/Components/common/Title'
import { baseURL } from '@/config/api/api'
import { getStoryDate } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6'
import { IoClose, IoMenuSharp, IoSearch } from "react-icons/io5";


interface IAuthorStory {
    title: string;
    news_slug: string;
    category_slug: string;
    excerpt: string | null;
    blog_image_url: string;
    first_published_at: string;
    category_name: string;
}

interface IResponse {
    results: IAuthorStory[];
    count: number;
    next: string | null;
    previous: string | null;
}

export default function Page({ searchParams }: { searchParams: { q: string, page: string } }) {
    const [data, setData] = React.useState<IResponse | null>(null)
    const [stories, setStories] = React.useState<IAuthorStory[] | null>(null)
    const [loading, setLoading] = React.useState<boolean>(true)
    const currentPageNo = searchParams?.page ? parseInt(searchParams.page) : 1;

    useEffect(() => {
        (
            async () => {
                setLoading(true)
                try {
                    const res = await fetch(`${baseURL}/api/v2/authors?search=${searchParams.q}&page=${currentPageNo}&page_size=10`)
                    const data = await res.json()
                    setData(data)
                    setStories(data.results)
                } catch (error) {
                    console.log(error)
                }
                finally {
                    setLoading(false)
                }

            }
        )()
    }, [searchParams.q, currentPageNo])

    return (
        <div className='container'>
            <div className='grid grid-cols-3 my-9'>
                <div className="lg:col-span-2 col-span-full">
                    <h1 className='font-bold text-[#00878A] text-3xl mb-6'>
                        অনুসন্ধান
                    </h1>
                    <div className='mb-6'>
                        <SearchBox />
                    </div>
                    {
                        loading ? (
                            <div className=''>
                                <PulseLoader className='h-[calc(100vh-316px)]' />
                            </div>) :
                            stories?.length && stories?.length > 0 ? (
                                <div>
                                    <div className='flex flex-col gap-9'>
                                        {
                                            stories?.map((story: IAuthorStory) => (
                                                <div key={story.news_slug} className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                                                    <Link href={`/${story.category_slug}/${story.news_slug}`}>
                                                        <div className='w-full aspect-video relative'>
                                                            <Image
                                                                className='object-cover'
                                                                src={story.blog_image_url}
                                                                alt={story?.title}
                                                                fill
                                                            />

                                                        </div>
                                                    </Link>
                                                    <div className='lg:col-span-2 col-span-1'>
                                                        <Title
                                                            // display_tags={story?.display_tags}
                                                            href={`/${story.category_slug}/${story.news_slug}`}
                                                            // isLiveActive={story?.is_live_news}
                                                            className='text-xl line-clamp-none font-bold text-[#3c3c3c] mb-1 group-hover:text-golden1'
                                                        >
                                                            {story?.title}
                                                        </Title>
                                                        <p className='text-base text-[#444] line-clamp-2'>{story?.excerpt}</p>
                                                        <div className='flex items-center mt-3 gap-4'>
                                                            <p className='leading-normal text-sm relative after:absolute after:h-full after:w-[1px] after:bg-red-500 after:-right-2'>{story?.category_name}</p>
                                                            <Time className=''>
                                                                {getStoryDate(new Date(story.first_published_at), true)}
                                                            </Time>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className='w-full flex justify-end gap-8 mt-8'>

                                        {
                                            data?.previous && (
                                                <Link href={`/search?q=${searchParams.q || ''}&page=${currentPageNo - 1}`} className=''>
                                                    <FaAnglesLeft color='#006563' size={24} />
                                                </Link>
                                            )
                                        }

                                        {
                                            data?.next && (
                                                <Link href={`/search?q=${searchParams.q || ''}&page=${currentPageNo + 1}`} className=''>
                                                    <FaAnglesRight color='#006563' size={24} />
                                                </Link>
                                            )
                                        }
                                    </div>
                                </div>
                            ) : (
                                <NotFound />
                            )
                    }
                </div>
                <div></div>
            </div>
        </div>
    )
}
