import Ad970x100 from "@/Components/AddComponents/Ad970x100";
import StaticAdComponent from "@/Components/AddComponents/StaticAdComponent";
import TenOpinionStoryOneBig from "@/Components/common/TenOpinionStoryOneBig";
import TopAdd from "@/Components/common/TopAdd";
import FiveStoriesOneBigOneAdd from "@/Components/sections/FiveStoriesOneBigOneAdd";
import FourPhotoStoriesWithOneBig from "@/Components/sections/FourPhotoStoriesWithOneBig";
import FourStoriesRightAdd from "@/Components/sections/FourStoriesRightAdd";
import FourStoriesWithCards from "@/Components/sections/FourStoriesWithCards";
import FourStoriesWithSquareImage from "@/Components/sections/FourStoriesWithSquareImage";
import LeadSection from "@/Components/sections/LeadSection";
import NineStoriesWithOneVideo from "@/Components/sections/NineStoriesWithOneVideo";
import SevenStoriesOneBig from "@/Components/sections/SevenStoriesOneBig";
import SevenStoriesWithVideoAndAd from "@/Components/sections/SevenStoriesWithVideoAndAd";
import SixStoriesWithRightList from "@/Components/sections/SixStoriesWithRightList";
import StoriesWithEightCategories from "@/Components/sections/StoriesWithEightCategories";
import TenStoriesOneBig from "@/Components/sections/TenStoriesOneBig";
import ThreeStoriesWithFiltering from "@/Components/sections/ThreeStoriesWithFiltering";
import WebStories from "@/Components/sections/WebStories";
import { baseURL } from "@/config/api/api";
import easternDesktop from "@/assets/ads/easternDesktopjpeg.jpeg"
import easternMobile from "@/assets/ads/easternMobilejpeg.jpeg"
import {
  ICategory,
  IFeatured,
  IStory,
  IStoryDetails,
  ITemplate,
} from "@/config/interfaces/interfaces";
// import Script from "next/script";
// import AdSlot from "@/Components/AddComponents/AdSlot";
// import Ad from "@/Components/adManager/Ad";
import AdT from "@/Components/adManager/AdT";
import Election from "@/Components/special/Election";
import FourTagStoriesWithCards from "@/Components/sections/FourTagStoriesWithCards";
import AnchorAd from "@/Components/AddComponents/AnchorAd";


const fetchTemplate = async () => {
  const res = await fetch(`${baseURL}/api/v2/collections`);
  if (!res.ok) {
    return {
      error: "An error occurred while fetching data",
    };
  }
  return res.json();
};

const fetchMostReads = async () => {
  const res = await fetch(`${baseURL}/api/v2/most-read-stories`);
  return res.json();
};

const fetchReaderInterest = async () => {
  const res = await fetch(`${baseURL}/api/v2/home?tags=পাঠকের আগ্রহ`);
  return res.json();
};
const fetchSportsHighlightVideo = async () => {
  const res = await fetch(`${baseURL}/api/v2/videos?tags=খেলা-ভিডিও`);
  return res.json();
};
const fetchEntertainmentHighlightVideo = async () => {
  const res = await fetch(`${baseURL}/api/v2/videos?tags=বিনোদন-ভিডিও`);
  return res.json();
};

const fetchPrintStories = async () => {
  const res = await fetch(`${baseURL}/api/v2/home?tags=ছাপা সংস্করণ`);
  return res.json();
}

export default async function Home() {
  // Config object to control repetition of templates
  const templateConfig: { [key: string]: boolean } = {
    FourStoriesWithCards: true,
  };

  const dataPromise = fetchTemplate();
  const readerInterestResponsePromise = fetchReaderInterest();
  const sportsHighlightVideoResponsePromise = fetchSportsHighlightVideo();
  const entertainmentHighlightVideoResponsePromise = fetchEntertainmentHighlightVideo();
  const printStoriesPromise = fetchPrintStories();

  const [
    data,
    readerInterestResponse,
    sportsHighlightVideoResponse,
    entertainmentHighlightVideoResponse,
    printStoriesResponse,
  ] = await Promise.all([
    dataPromise,
    readerInterestResponsePromise,
    sportsHighlightVideoResponsePromise,
    entertainmentHighlightVideoResponsePromise,
    printStoriesPromise,
  ]);

  const templates: ITemplate[] = data.results;

  const featured1: IFeatured[] = [...data?.sorting?.featured]
    ?.filter((item: IFeatured) => item?.featured_name === 0)
    .sort((a, b) => a.sort_order - b.sort_order);

  const featured2: IFeatured[] = [...data?.sorting?.featured]
    ?.filter((item: IFeatured) => item?.featured_name === 2)
    .sort((a, b) => a.sort_order - b.sort_order);

  const orderedTemplates = [...templates].sort(
    (a, b) =>
      parseInt(a.template_order_number) - parseInt(b.template_order_number)
  );

  const readerInterestStories: IStoryDetails[] =
    readerInterestResponse?.results;
  const renderedTemplateNames = new Set<string>();

  const sportsHighlightVideo: IStoryDetails =
    sportsHighlightVideoResponse?.results?.length > 0
      ? sportsHighlightVideoResponse?.results[0]
      : null;
  const entertainmentHighlightVideo: IStoryDetails =
    entertainmentHighlightVideoResponse?.results?.length > 0
      ? entertainmentHighlightVideoResponse?.results[0]
      : null;
  return (
    <>
      {/* <Ad adId={"Popup_HP"}></Ad> */}

      <div className="flex justify-center container my-4 ">
        <AdT addId={"Home_T1"} />
      </div>
      <LeadSection
        stories={featured1}
        readerInterestedStories={readerInterestStories}
      />
      {orderedTemplates.map((template) => {
        const shouldRepeat = templateConfig[template.template_name] || false;

        if (
          !shouldRepeat &&
          renderedTemplateNames.has(template.template_name)
        ) {
          return null; // Skip rendering if the template has already been rendered
        }
        renderedTemplateNames.add(template.template_name);

        switch (template.template_name) {
          case "FourStoriesRightAdd":
            return (
              <FourStoriesRightAdd
                key={template.id}
                stories={template.stories.slice(0, 4)}
                title={template?.category?.name}
                category={template.category}
              />
            );
          case "TenStoriesOneBig":
            return (
              <TenStoriesOneBig
                key={template.id}
                stories={template.stories.slice(0, 4)}
                mostReads={featured2 || []}
                title={"সর্বাধিক পঠিত ও ফ্যাক্টচেক"}
                category={template.category}
              />
            );
          case "NineStoriesWithOneVideo":
            return (
              <NineStoriesWithOneVideo
                key={template.id}
                stories={template.stories.slice(0, 11)}
                title={template?.category?.name}
                category={template.category}
                video={sportsHighlightVideo}
              />
            );
          case "FourStoriesWithCards":
            if (template?.category?.slug === "epaper") {
              return (
                <FourTagStoriesWithCards
                  key={template.id}
                  stories={printStoriesResponse?.results?.slice(0, 4)}
                  title={template?.category?.name}
                  titleRef={'/topic/ছাপা সংস্করণ'}
                />
              )
            }
            else {
              return (
                <FourStoriesWithCards
                  key={template.id}
                  stories={template.stories.slice(0, 4)}
                  title={template?.category?.name}
                  category={template.category}
                />
              );
            }
          case "ThreeStoriesWithFiltering":
            return (
              <ThreeStoriesWithFiltering
                key={template.id}
                stories={template.stories.slice(0, 4)}
                title={template?.category?.name}
                category={template.category}
              />
            );
          case "SevenStoriesWithVideoAndAd":
            return (
              <SevenStoriesWithVideoAndAd
                key={template.id}
                stories={template.stories.slice(0, 7)}
                title={template?.category?.name}
                category={template.category}
                video={entertainmentHighlightVideo}
              />
            );
          case "SevenStoriesOneBig":
            return (
              <SevenStoriesOneBig
                key={template.id}
                stories={template.stories.slice(0, 7)}
                title={template?.category?.name}
                category={template.category}
              />
            );
          case "SixStoriesWithRightList":
            return (
              <SixStoriesWithRightList
                key={template.id}
                stories={template.stories.slice(0, 7)}
                title={template?.category?.name}
                category={template.category}
              />
            );
          case "FiveStoriesOneBigOneAdd":
            return (
              <FiveStoriesOneBigOneAdd
                key={template.id}
                stories={template.stories.slice(0, 5)}
                title={template?.category?.name}
                category={template.category}
              />
            );
          case "FourStoriesWithSquareImage":
            return (
              <FourStoriesWithSquareImage
                key={template.id}
                stories={template.stories.slice(0, 4)}
                title={template?.category?.name}
                category={template.category}
              />
            );
          case "FourPhotoStoriesWithOneBig":
            return (
              <FourPhotoStoriesWithOneBig
                key={template.id}
                stories={template.stories.slice(0, 6)}
                title={template?.category?.name}
                category={template.category}
              />
            );
          case "TenOpinionStoryOneBig":
            return (
              <TenOpinionStoryOneBig
                key={template.id}
                title="মতামত ও আড্ডা"
                templates={templates.filter(
                  (t) => t.template_name === "TenOpinionStoryOneBig"
                )}
              />
            );
          case "StoriesWithEightCategories":
            return (
              <StoriesWithEightCategories
                key={template.id}
                templates={templates.filter(
                  (t) => t.template_name === "StoriesWithEightCategories"
                )}
              />
            );
          case "WebStories":
            return <WebStories stories={template.stories} />;
          default:
            return <></>;
        }
      })}
      <AnchorAd adId={"Anchor_Ad_Home"} />
    </>
  );
}
