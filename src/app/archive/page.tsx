import Section from "@/Components/common/Section";
import { baseURL } from "@/config/api/api";
import {
  IStory,
  IStoryDetails,
} from "@/config/interfaces/interfaces";
import React from "react";
import {
  getStoryDetailsTypeHref,
  getStoryHref,
} from "@/lib/href";
import StoryCard from "@/Components/common/StoryCard";
import { getImageUrl, getStoryDetailsImageUrl } from "@/lib/imageUrl";
import ArchiveCalendar from "../../Components/Archive/ArchiveCalendar";
import NotFound from "@/Components/common/NotFound";
import TopAdd from "@/Components/common/TopAdd";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import Link from "next/link";
import AdT from "@/Components/adManager/AdT";

function buildHomeApiUrl(date: string | undefined, currentPageNo: number, pageSize = '18') {
  const url = new URL(`${baseURL}/api/v2/home`);

  // Add query parameters only if they have valid values
  if (date) url.searchParams.append("from_date", date);
  if (date) url.searchParams.append("to_date", date);
  if (currentPageNo) url.searchParams.append("page", currentPageNo + '');
  if (pageSize) url.searchParams.append("page_size", pageSize);

  return url.toString();
}


const fetchLatestStories = async (currentPageNo: number, date?: string,) => {
  console.log('xyz', buildHomeApiUrl(date, currentPageNo))
  const res = await fetch(buildHomeApiUrl(date, currentPageNo));
  return res.json();

};

const ArchivePage = async ({ searchParams }: { searchParams: { date?: string; page: string } }) => {
  const currentPageNo = searchParams?.page ? parseInt(searchParams.page) : 1;
  const data = await fetchLatestStories(currentPageNo, searchParams?.date);
  const latestStories = data.results

  const getHref = (buttonType: 'next' | 'previous') => {
    let href = '';
    if (searchParams?.date) {
      href = `/archive?date=${searchParams.date}&page=${buttonType === 'next' ? currentPageNo + 1 : currentPageNo - 1}`
    } else {
      href = `/archive?page=${buttonType === 'next' ? currentPageNo + 1 : currentPageNo - 1}`
    }
    return href;
  }
  return (
    <Section>
      <div className="container flex justify-center my-4">
        <AdT addId={"Section_T1"} />
      </div>
      <div className="container">
        <div className="grid grid-cols-12 gap-x-8 gap-y-6">
          <div className="col-span-12 lg:col-span-9">
            {latestStories?.length === 0 ? (
              <NotFound />
            ) : (
              <div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
                  {latestStories?.map((data: IStoryDetails, index: number) => (
                    <div key={index}>
                      <StoryCard
                        title={data.title}
                        imageUrl={getStoryDetailsImageUrl(data)}
                        slug={""}
                        href={getStoryDetailsTypeHref(data)}
                        display_tags={data?.display_tags}
                      />
                    </div>
                  ))}
                </div>
                <div className="w-full flex justify-end gap-8 mt-7">
                  {data?.previous && (
                    <Link href={getHref("previous")} className="">
                      <FaAnglesLeft color="#006563" size={24} />
                    </Link>
                  )}

                  {data?.next && (
                    <Link href={getHref("next")} className="">
                      <FaAnglesRight color="#006563" size={24} />
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="col-span-12 lg:col-span-3">
            <ArchiveCalendar key={searchParams.date} />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ArchivePage;
