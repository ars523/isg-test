'use client'
import { IFeatured, IStoryDetails } from '@/config/interfaces/interfaces'
import cn from '@/lib/cn'
import { getFeaturedStoryHref, getStoryDetailsTypeHref, getStoryHref } from '@/lib/href'
import { toBanglaNum } from '@/utils'
import Link from 'next/link'
import React from 'react'

function Panel({ mostRead, latest }: { mostRead: IFeatured[]; latest: IStoryDetails[] }) {
    const [selected, setSelected] = React.useState<'read' | 'latest'>('read')

    return (
        <div>
            <div className="flex border-t-2 border-t-[#006563]">
                <button
                    className={
                        cn("py-2 w-full text-center border-b-[#fff] border-b-2 font-bold text-[#333]",
                            {
                                "border-b-golden1": selected === 'read'
                            }
                        )
                    }
                    onClick={() => setSelected('read')}
                >
                    পঠিত
                </button>
                <button
                    className={
                        cn("py-2 w-full text-center border-b-[#fff] border-b-2 font-bold text-[#333]",
                            {
                                "border-b-golden1": selected === 'latest'
                            }
                        )
                    }
                    onClick={() => setSelected('latest')}
                >
                    সর্বশেষ
                </button>
            </div>
            <div className=''>
                {
                    selected === 'read' && mostRead?.slice(0, 5).map((story, index) => (
                        <Link
                            key={index}
                            href={getFeaturedStoryHref(story)}
                            className='flex items-center gap-3 border-b border-b-[#d3d3d3] last:border-0 group px-[10px] py-[6px]'
                        >
                            <div className="text-3xl text-golden1">
                                {toBanglaNum(index + 1)}
                            </div >
                            <h2
                                className='line-clamp-2 text-lg group-hover:text-golden1'>
                                {story.title
                                }
                            </h2>
                        </Link>
                    ))
                }
                {
                    selected === 'latest' && latest?.slice(0, 5).map((story, index) => (
                        <Link
                            key={index}
                            href={getStoryDetailsTypeHref(story)}
                            className='flex items-center gap-3 border-b border-b-[#d3d3d3] last:border-0 group px-[10px] py-[6px]'
                        >
                            <div className="text-3xl text-golden1">
                                {toBanglaNum(index + 1)}
                            </div >
                            <h2
                                className='line-clamp-2 text-lg group-hover:text-golden1'>
                                {story.title
                                }
                            </h2>
                        </Link>
                    ))
                }
            </div>
            {
                selected === 'latest' ? (
                    <Link
                        href={'/archive'}
                        className='w-full flex justify-center items-center bg-golden1 text-[#000] h-10 leading-[30px] text-xl'>
                        আরও
                    </Link>
                ) :
                    null
            }
        </div>
    )
}

export default Panel