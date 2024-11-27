import Section from '@/Components/common/Section'
import TopAdd from '@/Components/common/TopAdd';
import { baseURL } from '@/config/api/api'
import { IAuthorStory } from '@/config/interfaces/interfaces';
import { getAuthorStoryHref } from '@/lib/href';
import { getStoryDate } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const fetchAuthorStories = async (name: string) => {
    const res = await fetch(`${baseURL}/api/v2/authors?name=${name}`)
    const data = await res.json()
    return data.results
}



async function AuthorPage({ params: { name } }: { params: { name: string } }) {
    const stories: IAuthorStory[] = await fetchAuthorStories(name)
    return (
        <Section>
            <TopAdd />
            <div className="container">
                {
                    stories.length > 0 && (
                        <div className='flex lg:flex-row flex-col items-center lg:items-start gap-4 lg:gap-8 mb-6 lg:mb-10'>
                            <div>
                                <div className='w-[100px] h-[100px] relative'>
                                    <Image
                                        src={stories[0].author_img_url}
                                        fill={true}
                                        alt={stories[0].name}
                                        className='object-cover rounded-full'
                                    />
                                </div>
                            </div>
                            <div>
                                <h1 className='font-bold text-2xl mb-2 text-center lg:text-left hover:text-golden1 w-fit'>
                                    <Link href={`/author/${name}`}>
                                        {stories[0].name}
                                    </Link>
                                </h1>
                                <p className='text-[#444] mb-2'>
                                    {stories[0].description}
                                </p>
                            </div>
                        </div>
                    )
                }
                <div className='grid lg:grid-cols-[auto_300px] gap-y-6 lg:gap-x-6'>
                    <div className='border-t pt-6 lg:pt-10 lg:px-14'>
                        <h6 className='text-3xl mb-5'>সকল লেখা</h6>
                        {
                            stories.map((story, index) => (
                                <Link
                                    href={getAuthorStoryHref(story)}
                                    key={index}
                                    className='block mb-6 last:mb-0 group'
                                >
                                    <div className='grid grid-cols-3 gap-5'>
                                        <div className='w-full aspect-video relative'>
                                            <Image
                                                className='object-cover'
                                                src={story.blog_image_url}
                                                alt={story?.title}
                                                fill
                                            />
                                        </div>
                                        <div className='col-span-2'>
                                            <h3 className='text-xl line-clamp-2 lg:line-clamp-1 font-bold text-[#3c3c3c] mb-1 group-hover:text-golden1'>{story?.title}</h3>
                                            <div>
                                                <p className='text-base text-[#444] line-clamp-2 lg:line-clamp-3 mb-2'>{story?.excerpt}</p>
                                            </div>
                                            <span className='text-sm lg:font-semibold text-[#444S]'>{getStoryDate(new Date(story?.first_published_at), false)}</span>
                                        </div>
                                    </div>

                                </Link>
                            ))
                        }
                    </div>
                    <div className='w-full flex justify-center'>
                        <div className='w-[300px] h-[250px] bg-gray-100'>

                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default AuthorPage