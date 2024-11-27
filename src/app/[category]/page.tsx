import CategoryStories from '@/Components/common/CategoryStories';
import SubCategoriesMobile from '@/Components/common/SubCategoriesMobile';
import { baseURL } from '@/config/api/api';
import { ICategory } from '@/config/interfaces/interfaces';
import { Metadata, ResolvingMetadata } from 'next';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import React from 'react'



export const revalidate = 60
export const dynamicParams = true

type TProps = {
    params: {
        category: string;
    };
};

const makeApiUrl = (
    slug: string,
    currentPageNo: number
): string => {
    if (slug === "video") {
        return `${baseURL}/api/v2/videos?category_slug=video&page=${currentPageNo}&page_size=17`;
    } else if (slug === "picture") {
        return `${baseURL}/api/v2/photos?category_slug=picture&page=${currentPageNo}&page_size=17`;
    } else {
        return `${baseURL}/api/v2/home/?category_slug=${slug}&page=${currentPageNo}&page_size=17`;
    }
};

async function fetchCategoryStories(
    slug: string,
    currentPageNo: number
) {
    const res = await fetch(`${makeApiUrl(slug, currentPageNo)}`);
    return res.json();
}

async function fetchSubCategories(categorySlug: string) {
    const res = await fetch(
        `${baseURL}/api/v2/subcategories?parent_slug=${categorySlug}`
    );
    return res.json();
}

async function currentCategory(categorySlug: string) {
    const url = `${baseURL}/api/v2/categories?slug=${categorySlug}`;
    const res = await fetch(url);
    return res.json();
}

export async function generateStaticParams() {
    const categories: ICategory[] = await fetch(`${baseURL}/api/v2/categories`).then((res) =>
        res.json()
    )
    return categories.map((category) => ({
        category: String(category.slug),
    }))
}

export async function generateMetadata(
    { params }: TProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const category = params.category;

    // fetch data
    const res = await fetch(
        `${baseURL}/api/v2/categories?slug=${category}`
    ).then((res) => res.json());

    const categoryData: ICategory = res[0];
    return {
        title: categoryData?.meta_title || categoryData?.name,
        description: categoryData?.meta_discriptions,
    }
}

function containsAlphabet(str: string) {
    return /[a-zA-Z]/.test(str);
}


async function fetchStory(contentId: string) {
    const res = await fetch(
        `https://ajpdata.ideahubbd.com/api/AjpData/GetOldData?contentId=${contentId}`,
        {
            method: 'GET',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36'
            },
            cache: 'no-store'
        }
    );
    if (res.ok) {
        return res.json();
    }
    else {
        notFound();
    }
}

async function Page({ params: { category }, searchParams }: { params: { category: string }, searchParams: { page: string } }) {
    const currentPageNo = searchParams?.page ? parseInt(searchParams.page) : 1;

    const res = await fetchCategoryStories(category, currentPageNo);
    const categoryData = await currentCategory(category);
    const subcategories = await fetchSubCategories(category);

    const factCheckStaticLinks = [
        { name: "আমাদের সম্পর্কে", link: "/what-we-are" },
        { name: "ফ্যাক্টচেক টিম", link: "fact-check-team" },
        { name: "রেটিং", link: "/rating" },
        { name: "অনুরোধ", link: "fact-check-request" },
    ];

    if (!containsAlphabet(category)) {
        const story: { newUrl: string | null } = await fetchStory(category);
        redirect(`/${story?.newUrl || ''}`);
    }
    else {
        return (

            <div>
                <div className="pt-6">
                    <div className="container mb-1 bg-[#F3F7F8] lg:bg-white pt-1 lg:py-0 flex items-center justify-between">
                        <Link href={`/${category}`} className="font-bold text-teal1 text-3xl">
                            {categoryData[0]?.name}
                        </Link>
                        <SubCategoriesMobile
                            subcategories={subcategories}
                            category={category}
                            staticLinks={factCheckStaticLinks}
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
                                                href={`/${category}/${subcategory.slug}`}
                                            >
                                                {subcategory.name}
                                            </Link>
                                        </div>
                                    ))}

                                    {category === "fact-check" &&
                                        factCheckStaticLinks.map((item, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-[7px] py-1"
                                            >
                                                <div>
                                                    <div className="h-[6px] w-[6px] rounded-full bg-golden1" />
                                                </div>
                                                <Link
                                                    className="hover:text-golden1 text-xl"
                                                    href={item?.link}
                                                >
                                                    {item?.name}
                                                </Link>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <CategoryStories slug={category} categoryStories={res.results} currentPageNo={currentPageNo} next={res?.next} previous={res?.previous} />
            </div>
        )
    }
}

export default Page