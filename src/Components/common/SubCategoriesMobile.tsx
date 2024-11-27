'use client'
import { ICategory } from '@/config/interfaces/interfaces'
import cn from '@/lib/cn'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

function SubCategoriesMobile({ subcategories, category, staticLinks }: { subcategories: ICategory[], category: string, staticLinks?: { name: string, link: string }[] }) {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow((prev => !prev))
    return (
        <button onClick={handleClick} className='lg:hidden relative'>
            {
                subcategories.length > 0 && (
                    <div className={
                        cn('',
                            { 'rotate-180': show },
                        )
                    }
                    >
                        <IoIosArrowDown size={22} className='text-teal1' />
                    </div>
                )
            }
            {
                show && (
                    <div className='absolute top-8 z-30 right-0 bg-white py-4 pl-3 pr-6 shadow-2xl rounded-xl h-52 overflow-y-scroll'>
                        <div className='flex flex-col justify-center-center gap-y-2'>
                            {
                                subcategories.map((subcategory: ICategory, index: number) => (
                                    <div key={index} className='flex items-center gap-2 py-1'>
                                        <div>
                                            <div className='h-[6px] w-[6px] rounded-full bg-golden1' />
                                        </div>
                                        <Link className='text-lg font-semibold hover:text-golden1 whitespace-nowrap' href={`/${category}/${subcategory.slug}`}>
                                            {subcategory.name}
                                        </Link>
                                    </div>
                                ))
                            }
                            {
                                category === 'fact-check' && staticLinks?.map((item, index: number) => (
                                    <div key={index} className='flex items-center gap-2 py-1'>
                                        <div>
                                            <div className='h-[6px] w-[6px] rounded-full bg-golden1' />
                                        </div>
                                        <Link className='text-lg font-semibold hover:text-golden1 whitespace-nowrap' href={item.link}>
                                            {item.name}
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </button>
    )
}

export default SubCategoriesMobile