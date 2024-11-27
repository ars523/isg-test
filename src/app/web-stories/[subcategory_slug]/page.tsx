import AdT from '@/Components/adManager/AdT'
import Section from '@/Components/common/Section'
import SubCategoriesMobile from '@/Components/common/SubCategoriesMobile'
import Time from '@/Components/common/Time'
import WebStories from '@/Components/common/WebStories'
import WebStoryBlock from '@/Components/common/WebStoryBlock'
import { baseURL } from '@/config/api/api'
import { ICategory, IWebStory } from '@/config/interfaces/interfaces'
import cn from '@/lib/cn'
import { getStoryDate } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const fetchWebStories = async (subcategory_slug: string) => {
    const response = await fetch(`${baseURL}/api/v2/webstories?subcategory_slug=${subcategory_slug}`)
    return response.json()

}

async function fetchSubCategories() {
    const res = await fetch(
        `${baseURL}/api/v2/subcategories?parent_slug=story`
    );
    return res.json();
}



async function currentCategoryOrSubcategory(subcategory_slug: string) {
    let url = `${baseURL}/api/v2/subcategories?slug=${subcategory_slug}&page=1&page_size=33`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

async function SubCategoryWebStoryPage({ params: { subcategory_slug }, searchParams }: { params: { subcategory_slug: string }, searchParams: { page?: string } }) {
    const webStoriesRes = await fetchWebStories(subcategory_slug)
    const webStories: IWebStory[] = webStoriesRes?.results
    const subcategories = await fetchSubCategories()
    const currentCategory = await currentCategoryOrSubcategory(subcategory_slug)

    return (
        <Section>
            <div className="pt-6">
                <div className="container mb-1 bg-[#F3F7F8] lg:bg-white pt-1 lg:py-0 flex items-center justify-between">
                    <Link href={`/web-stories/${currentCategory[0]?.slug}`} className="font-bold text-teal1 text-3xl">
                        {currentCategory[0]?.name}
                    </Link>
                    <SubCategoriesMobile
                        subcategories={subcategories}
                        category={'web-stories'}
                    />
                </div>
                <div className="bg-[#F3F7F8] hidden lg:block">
                    {subcategories?.length > 0 && (
                        <div className="container">
                            <div className="flex items-center flex-wrap py-1 gap-6">
                                {subcategories.map((subcategory: ICategory, index: number) => (
                                    <div key={index} className="flex items-center gap-[7px]">
                                        <div>
                                            <div className="h-[6px] w-[6px] rounded-full bg-golden1" />
                                        </div>
                                        <Link
                                            className="hover:text-golden1 text-xl"
                                            href={`/web-stories/${subcategory.slug}`}
                                        >
                                            {subcategory.name}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {/* <TopAdd /> */}
            <div className="container flex justify-center my-6 ">
                <div className='w-[970px] h-[90px] bg-gray-100'></div>
            </div>
            <WebStoryBlock webStories={webStories} />
        </Section>
    )
}

export default SubCategoryWebStoryPage