"use client";

import Section from "@/Components/common/Section";
import { baseURL } from "@/config/api/api";
import { IStoryDetails } from "@/config/interfaces/interfaces";
import React, { useState, useEffect } from "react";
import { getStoryDetailsTypeHref } from "@/lib/href";
import StoryCard from "@/Components/common/StoryCard";
import { getStoryDetailsImageUrl } from "@/lib/imageUrl";
import ArchiveCalendar from "../../Components/Archive/ArchiveCalendar";
import NotFound from "@/Components/common/NotFound";
import TopAdd from "@/Components/common/TopAdd";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import PulseLoader from "@/Components/common/PulseLoader";

const ArchivePage = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const [currentPageNo, setCurrentPageNo] = useState(
        searchParams?.get("page") ? parseInt(searchParams.get("page") || '') : 1
    );
    const [date, setDate] = useState(searchParams?.get("date") || "");
    const [latestStories, setLatestStories] = useState<IStoryDetails[]>([]);
    const [hasNextPage, setHasNextPage] = useState(false);
    const [hasPreviousPage, setHasPreviousPage] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLatestStories = async () => {
            try {
                const res = await fetch(
                    `${baseURL}/api/v2/home?from_date=${date}&to_date=${date}&page=${currentPageNo}&page_size=18`
                );
                const data = await res.json();
                setLatestStories(data.results);
                setHasNextPage(data.next ? true : false);
                setHasPreviousPage(data.previous ? true : false);
            } catch (error) {
                console.log(error)
            }
            finally {
                setLoading(false);
            }
        };
        fetchLatestStories();
    }, [currentPageNo, date]);

    const handlePageChange = (buttonType: "next" | "previous") => {
        const newPage = buttonType === "next" ? currentPageNo + 1 : currentPageNo - 1;
        setCurrentPageNo(newPage);
        router.push(`/archive?date=${date}&page=${newPage}`);
    };

    return (
        <Section>
            <TopAdd />
            <div className="container">
                {
                    loading ? (
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
                                                        slug=""
                                                        href={getStoryDetailsTypeHref(data)}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                        <div className="w-full flex justify-end gap-8 mt-7">
                                            {hasPreviousPage && (
                                                <button onClick={() => handlePageChange("previous")}>
                                                    <FaAnglesLeft color="#006563" size={24} />
                                                </button>
                                            )}
                                            {hasNextPage && (
                                                <button onClick={() => handlePageChange("next")}>
                                                    <FaAnglesRight color="#006563" size={24} />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="col-span-12 lg:col-span-3">
                                <ArchiveCalendar key={date} />
                            </div>
                        </div>
                    ) : (
                        <PulseLoader />
                    )
                }
            </div>
        </Section>
    );
};

export default ArchivePage;
