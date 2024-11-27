import CategoryPage from '@/Components/common/Category'
import StoryDetails from '@/Components/common/StoryDetails'
import React, { Suspense } from 'react'
import { notFound, redirect } from 'next/navigation'
import { baseURL } from '@/config/api/api';
import { ICategory, IStoryDetails } from '@/config/interfaces/interfaces';
import { Metadata, ResolvingMetadata } from 'next';
import PulseLoader from '@/Components/common/PulseLoader';

type TProps = {
    params: {
        slug1: string;
        category: string;
    };
};

const getUrlPartAccordingToCategory = (category: string) => {
    if (category === "video") {
        return "videos";
    }
    if (category === "picture") {
        return "photos";
    }
    return "home";
}

export async function generateMetadata(
    { params }: TProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const slug = params.slug1;
    const category = params.category;

    let url = `${baseURL}/api/v2/subcategories?slug=${slug}`;
    if (slug.includes('ajp')) {
        url = `${baseURL}/api/v2/${getUrlPartAccordingToCategory(category)}/?news_slug=${slug}`;
    }
    // fetch data
    const res = await fetch(
        url
    ).then((res) => res.json());

    const story: IStoryDetails = slug.includes('ajp') && res.results[0];
    const categoryData: ICategory = res[0];

    const imageUrl = story?.blog_image?.download_url || story?.photo_thumbnail?.download_url || ""
    const imageWidth = 600;
    const imageHeight = 315;
    const applyOverlay = true
    const watermark = story?.watermark || (story?.categories?.length > 0 && story?.categories[0]?.watermark) || "https://ajpbucket.ideahubbd.com/others/ajp-og-image.png";
    const overlayBottom = 0;
    const overlayRight = 0;
    const overlayFit = "cover";
    const overlayWidth = 600;
    const overlayHeight = 50;
    const overlayOpacity = 1;

    const ogImageWithWatermark = `https://worker.ideahubbd.com/?image=${encodeURIComponent(imageUrl)}&width=${imageWidth}&height=${imageHeight}&drawOverlay=${applyOverlay}&watermarkUrl=${encodeURIComponent(watermark)}&bottom=${overlayBottom}&right=${overlayRight}&fit=${overlayFit}&overlayWidth=${overlayWidth}&overlayHeight=${overlayHeight}&opacity=${overlayOpacity}`
    // console.log(ogImageWithWatermark)
    if (slug.includes('ajp')) {
        return {
            title: story?.meta?.seo_title || story?.title,
            description: story?.meta?.search_description || story?.excerpt,
            keywords: story?.tags?.length > 0 ? story?.tags?.map((tag) => tag?.name) : [],
            openGraph: {
                images: [
                    {
                        url: `${ogImageWithWatermark}`,
                        width: 600,
                        height: 315,
                        alt: story?.title,
                    },
                ],
            },
        };
    }
    else {
        return {
            title: categoryData?.meta_title || categoryData?.name,
            description: categoryData?.meta_discriptions,
        }
    }
}

async function Page({ params: { slug1, category }, searchParams }: { params: { slug1: string, category: string }, searchParams: { page: string } }) {
    const currentPageNo = searchParams?.page ? parseInt(searchParams.page) : 1;
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

    if (!containsAlphabet(category)) {
        const story: { newUrl: string | null } = await fetchStory(category);
        redirect(`/${story?.newUrl || ''}`);
    }

    else if (slug1.includes('ajp')) {
        return (
            <StoryDetails slug={slug1} category={category} />
        )
    }
    else {
        return (
            <Suspense fallback={<PulseLoader />}>
                <CategoryPage
                    category={category}
                    slug={slug1}
                    param='subcategory_slug'
                    currentPageNo={currentPageNo}
                />
            </Suspense>
        )
    }
}

export default Page