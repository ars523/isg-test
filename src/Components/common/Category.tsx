import Section from "@/Components/common/Section";
import { baseURL } from "@/config/api/api";
import {
  ICategory,
  IStoryDetails,
} from "@/config/interfaces/interfaces";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { getStoryDetailsTypeHref } from "@/lib/href";
import PlayIcon from "./PlayIcon";
import { notFound } from "next/navigation";
import Title from "./Title";
import SubCategoriesMobile from "./SubCategoriesMobile";
import { headers } from "next/headers";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { getStoryDetailsImageUrl } from "@/lib/imageUrl";
import Caption from "./Caption";
import AdT from "../adManager/AdT";
import AdR from "../adManager/AdR";
import AnchorAd from "../AddComponents/AnchorAd";

const makeApiUrl = (
  slug: string,
  param: string,
  currentPageNo: number
): string => {
  if (slug === "video") {
    return `${baseURL}/api/v2/videos?category_slug=video&page=${currentPageNo}&page_size=17`;
  } else if (slug === "picture") {
    return `${baseURL}/api/v2/photos?category_slug=picture&page=${currentPageNo}&page_size=17`;
  } else {
    return `${baseURL}/api/v2/home/?${param}=${slug}&page=${currentPageNo}&page_size=17`;
  }
};

async function fetchCategoryStories(
  slug: string,
  param: "category_slug" | "subcategory_slug",
  currentPageNo: number
) {
  const res = await fetch(`${makeApiUrl(slug, param, currentPageNo)}`);
  return res.json();
}

async function fetchSubCategories(categorySlug: string) {
  const res = await fetch(
    `${baseURL}/api/v2/subcategories?parent_slug=${categorySlug}`
  );
  return res.json();
}

async function currentCategoryOrSubcategory(category: string, slug: string) {
  let url = `${baseURL}/api/v2/subcategories?slug=${slug}`;
  if (slug === category) {
    url = `${baseURL}/api/v2/categories?slug=${category}`;
  }
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

async function CategoryPage({
  slug,
  param,
  category,
  currentPageNo,
}: {
  currentPageNo: number;
  slug: string;
  category: string;
  param: "category_slug" | "subcategory_slug";
}) {
  const headersList = headers();
  const path = headersList.get("x-current-path");

  const categoriesDataPromise = fetchCategoryStories(
    slug,
    param,
    currentPageNo
  );
  const subcategoriesPromise = fetchSubCategories(category);
  const currentCategoryPromise = currentCategoryOrSubcategory(category, slug);
  const [categoriesData, currentCategory, subcategories] = await Promise.all([
    categoriesDataPromise,
    currentCategoryPromise,
    subcategoriesPromise,
  ]);

  const categoryStories: IStoryDetails[] =
    (categoriesData.results && categoriesData.results) ||
    (categoriesData.items && categoriesData.items) ||
    (categoriesData.most_read_stories && categoriesData.most_read_stories);
  const factCheckStaticLinks = [
    { name: "আমাদের সম্পর্কে", link: "/what-we-are" },
    { name: "ফ্যাক্টচেক টিম", link: "fact-check-team" },
    { name: "রেটিং", link: "/rating" },
    { name: "অনুরোধ", link: "fact-check-request" },
  ];

  if (
    (!categoriesData?.items || categoriesData?.items?.length === 0) &&
    (!categoriesData?.results || categoriesData?.results?.length === 0)
  ) {
    notFound();
  }

  return (
    <Section className="mb-6">
      <div className="pt-6">
        <div className="container mb-1 bg-[#F3F7F8] lg:bg-white pt-1 lg:py-0 flex items-center justify-between">
          <Link href={`/${category}`} className="font-bold text-teal1 text-3xl">
            {currentCategory[0]?.name}
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
      {/* <TopAdd /> */}
      <div className="container flex justify-center my-4 ">
        <AdT addId={"Section_T1"} />
      </div>

      {/* <GoogleAdsense970x90/> */}

      <div className="container mt-4">
        {currentPageNo === 1 ? (
          <>
            {/* Top Big Story */}
            <div className="grid lg:grid-cols-[auto_300px] gap-6 mb-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="order-2 lg:order-1">
                  {categoryStories[0]?.highlight && (
                    <div className="text-lg text-red2 mb-1">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: categoryStories[0]?.highlight,
                        }}
                      />
                    </div>
                  )}
                  <Title
                    display_tags={categoryStories[0]?.display_tags}
                    href={getStoryDetailsTypeHref(categoryStories[0])}
                    className="text-[28px] leading-[38px]"
                    isLiveActive={categoryStories[0]?.is_live_news}
                  >
                    {categoryStories[0]?.title}
                  </Title>
                  <p className="text-[17px] text-[#444] lg:line-clamp-6 line-clamp-3">
                    {categoryStories[0]?.excerpt}
                  </p>
                </div>
                <div className="lg:col-span-2 order-1 lg:order-2">
                  <Link href={getStoryDetailsTypeHref(categoryStories[0])}>
                    <div className="w-full aspect-video relative">
                      <Image
                        className="object-cover"
                        src={getStoryDetailsImageUrl(categoryStories[0])}
                        alt={categoryStories[0]?.title}
                        fill
                      />
                      {slug === "video" && <PlayIcon size={24} />}
                    </div>
                  </Link>
                </div>
              </div>

              <div className="container flex justify-center">
                <AdR addId={"Section_R1"} />
              </div>

            </div>

            {/* Middle Four Stories */}
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-y-9 lg:gap-6">
              {categoryStories
                .slice(1, 5)
                .map((story: IStoryDetails, index: number) => (
                  <div
                    key={index}
                    className="grid grid-cols-10 lg:grid-cols-3 gap-5 lg:block border-bottom lg:before:h-0"
                  >
                    <Link
                      className="col-span-4 lg:col-span-1"
                      href={getStoryDetailsTypeHref(story)}
                    >
                      <div className="w-full aspect-video relative mb-2">
                        <Image
                          className="object-cover"
                          src={getStoryDetailsImageUrl(story)}
                          alt={story?.title}
                          fill
                        />
                        {slug === "video" && <PlayIcon />}
                      </div>
                    </Link>
                    <div className="col-span-6 lg:col-span-2">
                      {story?.highlight && (
                        <div className="text-lg text-red2 my-1">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: story?.highlight,
                            }}
                          />
                        </div>
                      )}
                      <Title
                        href={getStoryDetailsTypeHref(story)}
                        display_tags={story?.display_tags}
                        className="text-xl"
                        isLiveActive={story?.is_live_news}
                      >
                        {story?.title}
                      </Title>
                      <div className="hidden lg:block">
                        <p className="text-base text-[#444] line-clamp-2">
                          {story?.excerpt}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="my-12 flex justify-center">
              <AdT addId={"Section_T2"} />
            </div>

            {/* Bottom Stories */}
            <div className="max-w-[970px] mx-auto grid lg:grid-cols-[auto_300px] gap-6">
              <div className="flex flex-col gap-y-9">
                {categoryStories
                  .slice(5)
                  .map((story: IStoryDetails, index: number) => (
                    <div
                      key={index}
                      className="block border-bottom [&:nth-last-child(2)]:before:h-0 lg:before:h-0"
                    >
                      <div className="grid grid-cols-3 gap-5">
                        <Link
                          className="block w-full"
                          href={getStoryDetailsTypeHref(story)}
                        >
                          <div className="w-full aspect-video relative">
                            <Image
                              className="object-cover"
                              src={getStoryDetailsImageUrl(story)}
                              alt={story?.title}
                              fill
                            />
                            {slug === "video" && <PlayIcon />}
                          </div>
                        </Link>
                        <div className="col-span-2">
                          {story?.highlight && (
                            <div className="text-lg text-red2 mb-1">
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: story?.highlight,
                                }}
                              />
                            </div>
                          )}
                          <Title
                            className="text-xl"
                            href={getStoryDetailsTypeHref(story)}
                            display_tags={story?.display_tags}
                            isLiveActive={story?.is_live_news}
                          >
                            {story?.title}
                          </Title>
                          <div className="hidden lg:block">
                            <p className="text-base text-[#444] line-clamp-2">
                              {story?.excerpt}
                            </p>
                          </div>
                        </div>
                      </div>
                      {index + 1 === 6 && (
                        <div className="flex lg:justify-end justify-center mt-6 lg:mr-10">
                          <AdR addId={"Section_R2"} />
                        </div>
                      )}
                    </div>
                  ))}

                <div className="w-full flex justify-end gap-8">
                  {categoriesData?.previous && (
                    <Link
                      href={`${path}?page=${currentPageNo - 1}`}
                      className=""
                    >
                      <FaAnglesLeft color="#006563" size={24} />
                    </Link>
                  )}

                  {categoriesData?.next && (
                    <Link
                      href={`${path}?page=${currentPageNo + 1}`}
                      className=""
                    >
                      <FaAnglesRight color="#006563" size={24} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="max-w-[970px] mx-auto grid lg:grid-cols-[auto_300px] gap-6">
            <div className="flex flex-col gap-y-9">
              {categoryStories.map((story: IStoryDetails, index: number) => (
                <div
                  key={index}
                  className="block border-bottom [&:nth-last-child(2)]:before:h-0 lg:before:h-0"
                >
                  <div className="grid grid-cols-3 gap-5">
                    <Link
                      className="block w-full"
                      href={getStoryDetailsTypeHref(story)}
                    >
                      <div className="w-full aspect-video relative">
                        <Image
                          className="object-cover"
                          src={getStoryDetailsImageUrl(story)}
                          alt={story?.title}
                          fill
                        />
                        {slug === "video" && <PlayIcon />}
                      </div>
                    </Link>
                    <div className="col-span-2">
                      {story?.highlight && (
                        <div className="text-lg text-red2 mb-1">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: story?.highlight,
                            }}
                          />
                        </div>
                      )}
                      <Title
                        className="text-xl mb-1"
                        href={getStoryDetailsTypeHref(story)}
                        display_tags={story?.display_tags}
                        isLiveActive={story?.is_live_news}
                      >
                        {story?.title}
                      </Title>
                      <Caption
                        href={getStoryDetailsTypeHref(story)}
                        className="hidden lg:block lg:line-clamp-2"
                      >
                        {story?.excerpt}
                      </Caption>
                    </div>
                  </div>
                  {index + 1 === 6 && (

                    <div className="flex lg:justify-end mt-6 lg:mr-10">
                      <AdR addId={"Section_R1"} />
                    </div>
                  )}
                </div>
              ))}

              <div className="w-full flex justify-end gap-8">
                {categoriesData?.previous && (
                  <Link href={`${path}?page=${currentPageNo - 1}`} className="">
                    <FaAnglesLeft color="#006563" size={24} />
                  </Link>
                )}

                {categoriesData?.next && (
                  <Link href={`${path}?page=${currentPageNo + 1}`} className="">
                    <FaAnglesRight color="#006563" size={24} />
                  </Link>
                )}
              </div>
            </div>
            <div>
              <div className="container flex justify-center">
                <AdR addId={"Section_R2"} />
              </div>
            </div>
          </div>
        )}
        <div className="mt-6">{/* <GoogleAdsense970x90/> */}</div>
      </div>
      <AnchorAd adId={"Anchor_Ad_Section"} />
    </Section>
  );
}

export default CategoryPage;
