import Section from "@/Components/common/Section";
import Image from "next/image";
import Link from "next/link";
import StoryWithTitleExcerptTime from "@/Components/common/StoryWithTitleExcerptTime";
import { baseURL } from "@/config/api/api";
import { IFeatured, IStoryDetails, ITag } from "@/config/interfaces/interfaces";
import { getStoryDate } from "@/utils";
import Panel from "@/Components/common/Panel";
import AreaFilter from "@/Components/common/AreaFilter";
import StoryList from "@/Components/common/StoryList";
import { getStoryDetailsTypeHref } from "@/lib/href";
import ClientPrintWrapper from "./ClientPrintWrapper";
import { headers } from "next/headers";
import SocialShareButtons from "./SocialShareButtons";
import { notFound } from "next/navigation";
import CopyUrl from "./CopyUrl";
import PathView from "./PathView";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import cn from "@/lib/cn";
import RightClickDisabler from "./RightClickDisabler";
import AdT from "../adManager/AdT";
import AdR from "../adManager/AdR";
import parse, { domToReact } from "html-react-parser";
import LiveDetails from "./LiveDetails";
import googleNewsIcon from "@/assets/images/social/googleNewsLogo.png";
import AnchorAd from "../AddComponents/AnchorAd";
import BDAxisAd from "../BDAxisAd/BDAxisAd";
import PhotoContent from "./PhotoContent";
import RITSadWrapper from "../RITSad/RITSadWrapper";
import BDAxisAdWrapper from "../BDAxisAd/BDAxisAdWrapper";
// import TextToSpeech from "./TextToSpeech";

dayjs.extend(utc);
dayjs.extend(timezone);

const getUrlPartAccordingToCategory = (category: string) => {
  if (category === "video") {
    return "videos";
  }
  if (category === "picture") {
    return "photos";
  }
  return "home";
};

async function fetchStory(slug: string, category: string) {
  const res = await fetch(
    `${baseURL}/api/v2/${getUrlPartAccordingToCategory(
      category
    )}?news_slug=${slug?.toLowerCase()}&fields=*`
  );
  return res.json();
}

async function fetchRelatedStories(category: string) {
  const res = await fetch(
    `${baseURL}/api/v2/${getUrlPartAccordingToCategory(
      category
    )}?category_slug=${category}`
  );
  return res.json();
}

const fetchReaderInterest = async () => {
  const res = await fetch(`${baseURL}/api/v2/home?tags=পাঠকের আগ্রহ`);
  const data = await res.json();
  return data;
};

const fetchLatest = async () => {
  const res = await fetch(`${baseURL}/api/v2/home`);
  const data = await res.json();
  return data;
};

const fetchTemplate = async () => {
  const res = await fetch(`${baseURL}/api/v2/collections`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    return {
      error: "An error occurred while fetching data",
    };
  }
  return res.json();
};

function cleanHTML(html: string) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const text = doc.body.textContent || '';
  return text.trim();
}

const insertAds = (htmlContent: string) => {
  let adInsertedCount = 0;

  const options = {
    replace: (domNode: any) => {
      if (
        domNode.attribs &&
        domNode.attribs.class &&
        domNode.attribs.class.includes("block-full_richtext")
      ) {
        adInsertedCount++;
        if (adInsertedCount === 1) {
          return (
            <>
              <div className={domNode.attribs.class}>
                {domToReact(domNode.children, options)}
              </div>
              <div className="flex justify-center">
                <BDAxisAdWrapper adId={"ajkerpatrika.com_1731305220834"} />
                {/* <AdR addId="In_Article_1" /> */}
              </div>
            </>
          );
        } else if (adInsertedCount === 2) {
          return (
            <>
              <div className={domNode.attribs.class}>
                {domToReact(domNode.children, options)}
              </div>
              <div className="">
                <RITSadWrapper adId={"pw_43462"} className={"hidden justify-center md:flex w-[728px] h-[250px] mt-3 "} />
                <div className="flex justify-center md:hidden">
                  <RITSadWrapper adId={"pw_43460"} className={"w-[300px] h-[250px] mt-3 "} />
                </div>

                {/* <AdR addId="In_Article_2" /> */}
              </div>
            </>
          );
        } else if (adInsertedCount === 3) {
          return (
            <>
              <div className={domNode.attribs.class}>
                {domToReact(domNode.children, options)}
              </div>
              <div className="flex justify-center">
                <AdR addId="In_Article_3" />
              </div>
            </>
          );
        }
      }
    },
  };

  return parse(htmlContent, options);
};

const StoryDetails = async ({
  slug,
  category,
}: {
  slug: string;
  category: string;
}) => {
  const dataPromise = fetchStory(slug, category);
  const relatedDataPromise = fetchRelatedStories(category);
  const readerInterestResponsePromise = fetchReaderInterest();
  const latestResponsePromise = fetchLatest();
  const templateDataPromise = fetchTemplate();

  const [
    data,
    relatedData,
    readerInterestResponse,
    latestResponse,
    templateData
  ] = await Promise.all([
    dataPromise,
    relatedDataPromise,
    readerInterestResponsePromise,
    latestResponsePromise,
    templateDataPromise,
  ]);

  const featured2: IFeatured[] = [...templateData?.sorting?.featured]
    ?.filter((item: IFeatured) => item?.featured_name === 2)
    .sort((a, b) => a.sort_order - b.sort_order);

  const story: IStoryDetails =
    (data?.items && data?.items[0]) || (data.results && data?.results[0]);

  const relatedStories: IStoryDetails[] =
    relatedData?.results || relatedData?.items || [];

  const readerInterestStories: IStoryDetails[] =
    readerInterestResponse?.results;
  const latestStories: IStoryDetails[] = latestResponse?.results;

  const contentWithAds = story?.content
    ? insertAds(story.content)
    : story?.content;

  const headersList = headers();
  const domain = headersList.get("host") || "";
  const path = headersList.get("x-current-path");
  const referer = `https://${domain}${path}`;

  const isInterview = story?.tags?.find(
    (tag: ITag) => tag.name === "সাক্ষাৎকার"
  );
  const isDisabledCopy = story?.tags?.find(
    (tag: ITag) => tag.name === "তথ্যপ্রযুক্তি" || tag.name === "ফ্যাক্টচেক"
  );

  if (!story) {
    notFound();
  }
  return (
    <Section
      className={cn("mb-6", {
        "select-none": isDisabledCopy,
      })}
    >
      <RightClickDisabler isDisabledCopy={isDisabledCopy ? true : false}>
        <div className="mt-4 mb-4 container flex justify-center">
          <AdT addId={"Article_T1"} />
        </div>

        {(story?.content ||
          story?.content2 ||
          story?.meta?.type === "blog.PhotoStory") && (
            <div className="container">
              {/* Top section for interview story */}
              {isInterview && (
                <div className="bg-[#f2f2f2] mb-6 p-4 rounded">
                  <Link href={`/topic/সাক্ষাৎকার`}>
                    <span className="font-semibold text-[#FAA61A] leading-normal">
                      সাক্ষাৎকার
                    </span>
                  </Link>
                  <h1 className="text-3xl leading-10 text-[#3c3c3c] font-bold mb-6">
                    {story?.title}
                  </h1>
                  <div className="grid grid-cols-12 gap-y-4 lg:gap-x-[43px]">
                    <div className="col-span-full lg:col-span-5 relative before:absolute lg:before:w-[3px] before:h-full before:bg-[#00878A] before:-right-[24px]">
                      {story.alternative_blog_image?.download_url ? (
                        <div className="relative aspect-video">
                          <Image
                            className="aspect-video"
                            src={story?.alternative_blog_image?.download_url}
                            alt=""
                            fill={true}
                          />
                        </div>
                      ) : story.blog_image?.download_url ? (
                        <div className="relative aspect-video">
                          <Image
                            className="aspect-video"
                            src={story?.blog_image?.download_url}
                            alt=""
                            fill={true}
                          />
                        </div>
                      ) : null}
                    </div>
                    {story?.sub_heading && (
                      <div className="col-span-full lg:col-span-7 lg:font-semibold text-xl lg:text-2xl text-gray-500 story-details sub-heading">
                        <div
                          className="interview-sub-heading leading-[1.5]"
                          dangerouslySetInnerHTML={{ __html: story?.sub_heading }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
              <div className="grid lg:grid-cols-[200px_auto_300px] gap-6 mb-6">
                <div></div>
                <div>
                  <div className="mb-3">
                    {/* Top section of story details if it is not an interview */}
                    {!isInterview && (
                      <>
                        <div className="mb-3">
                          <PathView story={story} />
                        </div>
                        {story?.highlight && (
                          <div className="text-lg text-red2 mb-1 mt-5">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: story?.highlight,
                              }}
                            />
                          </div>
                        )}
                        <h1 className="text-3xl leading-10 text-[#3c3c3c] font-bold mb-3">
                          {story.display_tags &&
                            story.display_tags.length > 0 && (
                              <Link
                                className="mr-1 text-[#007aff] hover:text-golden1"
                                href={`/display-topic/${story?.display_tags[0].name}`}
                              >
                                {story?.display_tags[0].name}
                                {" /"}
                              </Link>
                            )}
                          {story?.title}
                        </h1>
                        {story?.sub_heading && (
                          <div className="text-xl leading-[1.7] story-details sub-heading">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: story?.sub_heading,
                              }}
                            />
                          </div>
                        )}
                        {story?.blog_authors && (
                          <div className="text-xl text-[#292929] mb-2 lg:mb-2">
                            {story?.blog_authors.map((author, i) => {
                              if (author.author_status) {
                                return (
                                  <>
                                    <Link
                                      key={author.id}
                                      href={`/author/${author.author_name}`}
                                      className="hover:text-golden1"
                                    >
                                      {author.author_name}
                                    </Link>
                                    {i + 1 < story.blog_authors.length && (
                                      <span> ও </span>
                                    )}
                                  </>
                                );
                              } else {
                                return (
                                  <>
                                    <span key={author.id}>
                                      {author.author_name}
                                    </span>
                                    {i + 1 < story.blog_authors.length && (
                                      <span> ও </span>
                                    )}
                                  </>
                                );
                              }
                            })}
                          </div>
                        )}
                        <div className="mb-4 flex flex-col lg:flex-row lg:items-center gap-x-6 gap-y-1">
                          <div className="text-sm lg:text-base text-[#333]">
                            প্রকাশ :{" "}
                            {getStoryDate(
                              dayjs(story.meta?.first_published_at),
                              true
                            )}
                          </div>
                          {
                            dayjs(story?.meta?.first_published_at).isSame(dayjs(story?.meta?.last_published_at), 'second') ? (
                              null
                            ) : (
                              <div className="text-sm lg:text-base text-[#333]">
                                আপডেট :{" "}
                                {getStoryDate(
                                  dayjs(story.meta?.last_published_at),
                                  true
                                )}
                              </div>
                            )
                          }
                        </div>
                      </>
                    )}

                    {/* Share and print buttons */}
                    <div className=" flex items-center gap-x-2 mb-8">
                      <CopyUrl />
                      <SocialShareButtons
                        shareUrl={referer || ""}
                        title={story?.title}
                      />
                      <ClientPrintWrapper story={story} />
                      {/* <TextToSpeech story={story} /> */}
                    </div>

                    {/* Thumbnail image and caption for blog story */}
                    {!isInterview &&
                      !(story?.meta?.type === "blog.PhotoStory") && (
                        <div>
                          {story?.alternative_blog_image?.download_url ? (
                            <Image
                              className="w-full h-auto"
                              src={story?.alternative_blog_image?.download_url}
                              alt=""
                              width={728}
                              height={250}
                            />
                          ) : story?.blog_image?.download_url ? (
                            <Image
                              className="w-full h-auto"
                              src={story?.blog_image?.download_url}
                              alt=""
                              width={728}
                              height={250}
                            />
                          ) : null}
                          {story?.alternative_blog_image?.caption ? (
                            <div className="text-[#757575] text-lg bg-[#F0F0ED] pt-1 pb-1 px-2 border-gray-300 border-b">
                              {story?.alternative_blog_image?.caption}
                            </div>
                          ) : story?.blog_image?.caption ? (
                            <div className="text-[#757575] text-lg bg-[#F0F0ED] pt-1 pb-1 px-2 border-gray-300 border-b">
                              {story?.blog_image?.caption}
                            </div>
                          ) : null}

                          {/* -------Rits ad Tags-------- */}
                          <RITSadWrapper
                            adId={"pw_43461"}
                            className={"hidden justify-center md:block w-[728px] h-[90px] mt-3 "}
                          />
                          <div className="flex justify-center md:hidden">
                            <RITSadWrapper
                              adId={"pw_43459"}
                              className={" w-[320px] h-[100px] mt-3 "}
                            />
                          </div>
                          {/* -------Rits ad Tags-------- */}
                        </div>
                      )}
                  </div>

                  {/* ------Content story------- */}
                  {story?.content &&
                    !(story?.meta?.type === "blog.PhotoStory") && (
                      <div className="text-lg lg:text-[19px] leading-[1.7] text-[#000000] mb-8 story-details">
                        <div>{contentWithAds}</div>
                      </div>
                    )}

                  {/* ------Content video------- */}
                  {story?.content2 && (
                    <div className="text-lg lg:text-[19px] leading-[1.7] text-[#000000] mb-8 story-details">
                      <div dangerouslySetInnerHTML={{ __html: story.content2 }} />
                    </div>
                  )}

                  {/* ------Content photo------- */}
                  {story?.meta?.type === "blog.PhotoStory" && (
                    <div className="mb-8">
                      <PhotoContent story={story} referer={referer} />
                    </div>
                  )}

                  {/* ------Reminder for fact check category news------- */}
                  {category === "fact-check" && (
                    <div className="container bg-[#f3f8f7] py-2 border-y-2 border-[#006563] mb-10 text-lg lg:text-[19px] leading-[1.7]">
                      সামাজিক যোগাযোগমাধ্যম, সংবাদমাধ্যম বা যেকোনো মাধ্যমে
                      প্রচারিত কোনো ছবি, ভিডিও বা তথ্য বিভ্রান্তিকর মনে হলে তার
                      স্ক্রিনশট বা লিংক কিংবা সে সম্পর্কিত বিস্তারিত তথ্য আমাদের
                      ই-মেইল করুন। আমাদের ই-মেইল ঠিকানা{" "}
                      <a
                        href="mailto:factcheck@ajkerpatrika.com"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-red-500"
                      >
                        factcheck@ajkerpatrika.com
                      </a>
                    </div>
                  )}

                  {/* -------Tags-------- */}

                  {/* -------Rits ad Tags-------- */}
                  <RITSadWrapper
                    adId={"pw_43463"}
                    className={"hidden justify-center md:block w-[728px] h-[90px] mb-[18px] "}
                  />
                  <div className="flex justify-center md:hidden">
                    <RITSadWrapper
                      adId={"pw_43458"}
                      className={"w-[300px] h-[250px] mb-[18px] "}
                    />
                  </div>
                  {/* -------Rits ad Tags-------- */}

                  <div className="flex items-center gap-4 text-xl mb-4 flex-wrap">
                    <h4 className="text-[#666666]">বিষয়: </h4>
                    {story?.tags.map((tag) => (
                      <Link
                        key={tag.slug}
                        href={`/topic/${tag?.name}`}
                        className="bg-[#eeeeee] text-[#000000] px-2 rounded-[3px] hover:text-golden1 whitespace-nowrap"
                      >
                        {tag.name}
                      </Link>
                    ))}
                  </div>

                  {/* Google News button */}
                  <Link
                    href={
                      "https://news.google.com/publications/CAAqBwgKMNW6qQswx8XBAw?hl=en-US&gl=US&ceid=US%3Aen"
                    }
                    className="mb-10 block"
                  >
                    <div className="flex gap-2 items-center justify-center bg-[#e9faff] py-[10px] group">
                      <Image
                        src={googleNewsIcon}
                        className="w-[30px] h-[26px]"
                        alt=""
                        width={30}
                        height={26}
                      />
                      <h4 className="font-bold text-lg text-[#1e88e5] text-center group-hover:text-[#f11865]">
                        সর্বশেষ খবর পেতে Google News ফিড ফলো করুন
                      </h4>
                    </div>
                  </Link>

                  {/* Comments */}
                  {/* <div className="text-lg text-[#333333] flex justify-center mb-4">
                    মন্তব্য করতে
                    <Link
                      href={"/"}
                      className="bg-red1 text-white inline-block mx-2 px-3 rounded"
                    >
                      লগইন
                    </Link>
                    করুন অথবা
                    <Link
                      href={"/"}
                      className="inline-block mx-2 text-[#1e88e5] font-semibold"
                    >
                      নিবন্ধন
                    </Link>
                    করুন
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-lg text-[#333333]">
                      মন্তব্য
                    </span>
                    <input
                      type="text"
                      className="w-full border border-[#e0e0e0] rounded p-2"
                    />
                  </div> */}
                </div>

                {/* Right Column */}
                <div>
                  <div className="mb-4 flex justify-center">
                    {/* <R2GoogleAdsense300x250 /> */}
                    <AdR addId={"Article_R1"}></AdR>
                    {/* <Ad300x250>
                    <div id="div-gpt-ad-8687054-9">
                      <Script
                        id="div-gpt-ad-8687054-9"
                        dangerouslySetInnerHTML={{
                          __html: `googletag.cmd.push(function() { googletag.display('div-gpt-ad-8687054-9'); });`,
                        }}
                      ></Script>
                    </div>
                  </Ad300x250> */}
                    {/* <AddSquare
                    add={{
                      image: sq1,
                      link: "",
                      alt: "",
                    }}
                  /> */}
                  </div>
                  <Panel mostRead={featured2} latest={latestStories} />
                  <div className="mb-9" />

                  <div className="flex justify-center">
                    <AdR addId={"Article_R2"} />
                  </div>

                  <div className="mb-4" />
                  <AreaFilter />
                  <div className="mb-9" />
                  <div className="">
                    <h4 className="text-[#006563] font-bold text-2xl mb-2">
                      পাঠকের আগ্রহ
                    </h4>
                    <div className="flex flex-col gap-3">
                      {readerInterestStories.slice(0, 5).map((story, index) => (
                        <div
                          key={index}
                          className="pb-3 last:pb-0 border-b last:border-b-0 border-[#d3d3d3]"
                        >
                          <Link
                            href={getStoryDetailsTypeHref(story)}
                            className="flex gap-3 group"
                          >
                            <div className="relative w-24 h-24 lg:w-16 lg:h-16">
                              <Image
                                src={story.blog_image?.download_url || ""}
                                alt={story.title}
                                fill={true}
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <h2 className=" line-clamp-3 text-contrast1 text-xl lg:text-base font-bold lg:font-semibold group-hover:text-golden1">
                                {story.alternative_title || story.title}
                              </h2>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4" />
                  {/* <R2GoogleAdsense300x250 /> */}
                  {/* <Ad300x250>
                  <div id="div-gpt-ad-8687054-11">
                    <Script
                      id="div-gpt-ad-8687054-11"
                      dangerouslySetInnerHTML={{
                        __html: `googletag.cmd.push(function() { googletag.display('div-gpt-ad-8687054-11'); });`,
                      }}
                    ></Script>
                  </div>
                {/* <AddSquare
                  add={{
                    image: sq1,
                    link: "",
                    alt: "",
                  }}
                /> */}
                </div>
              </div>

              <div className="mb-10">
                {/* <GoogleAdsense970x90 /> */}
                {/* <Ad970x100 className="mt-5 mb-2 lg:mt-5 lg:mb-5 ">
                <div id="div-gpt-ad-8687054-12">
                  <Script
                    id="div-gpt-ad-8687054-12"
                    dangerouslySetInnerHTML={{
                      __html: `googletag.cmd.push(function() { googletag.display('div-gpt-ad-8687054-12'); });`,
                    }}
                  ></Script>
                </div>
              </Ad970x100> */}
              </div>

              {/* Related Stories */}
              <div>
                <h2 className="font-bold text-2xl mb-3 text-red1">সম্পর্কিত</h2>
                <div className="hidden lg:grid grid-cols-4 gap-6">
                  {relatedStories
                    .filter((story) => story.news_slug != slug)
                    .slice(0, 4)
                    .map((story, index) => (
                      <StoryWithTitleExcerptTime
                        key={index}
                        title={story.title || ""}
                        excerpt={story.excerpt}
                        time={getStoryDate(
                          new Date(story.meta?.first_published_at),
                          false
                        )}
                        imageUrl={
                          story.blog_image?.download_url ||
                          story?.video_thumbnail?.url ||
                          story?.photo_thumbnail?.download_url ||
                          ""
                        }
                        storyType={story.story_type}
                        href={getStoryDetailsTypeHref(story)}
                        display_tags={story.display_tags}
                      />
                    ))}
                </div>
                <div className="grid grid-cols-1 gap-9 lg:hidden">
                  {relatedStories.slice(0, 4).map((story, index) => (
                    <div key={index} className="border-bottom">
                      <StoryList
                        title={story.title || ""}
                        imageUrl={
                          story.blog_image?.download_url ||
                          story?.video_thumbnail?.url ||
                          story?.photo_thumbnail?.download_url ||
                          ""
                        }
                        slug=""
                        className="grid-cols-3 gap-3"
                        classImageContainer="col-span-1"
                        classTextContainer="col-span-2"
                        storyType={story.story_type}
                        href={getStoryDetailsTypeHref(story)}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-10">
                {/* <GoogleAdsense970x90/> */}
                {/* <Ad970x100 className="mt-5 mb-2 lg:mt-5 lg:mb-5 ">
                <div id="div-gpt-ad-8687054-13">
                  <Script
                    id="div-gpt-ad-8687054-13"
                    dangerouslySetInnerHTML={{
                      __html: `   googletag.cmd.push(function() { googletag.display('div-gpt-ad-8687054-13'); });`,
                    }}
                  ></Script>
                </div>
              </Ad970x100> */}
              </div>
            </div>
          )}

        {/*
         ****************************************
         ************Live news content***********
         ****************************************
         */}
        {story?.live_news_content_story?.length &&
          story?.live_news_content_story?.length > 0 ? (
          <LiveDetails story={story} referer={referer} />
        ) : null}
      </RightClickDisabler>
      <AnchorAd adId={"Anchor_ad"} />
    </Section>
  );
};

export default StoryDetails;
