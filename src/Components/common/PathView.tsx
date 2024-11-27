import { IStoryDetails } from "@/config/interfaces/interfaces";
import Link from "next/link";
import React from "react";
import { TiHome } from "react-icons/ti";

interface PathViewProps {
  story: IStoryDetails;
}

const PathView = ({ story }: PathViewProps) => {
  return (
    <div className="flex flex-row gap-x-2 items-center cursor-pointer text-gray-700">
      <div>
        <TiHome size={18} className="mb-2" color="#6c757d" />
      </div>
      {story?.categories?.length > 0 && (
        <Link href={`/${story?.categories[0]?.slug}`}>
          <div>
            <span> {">"} </span>
            <span> {story?.categories[0]?.name} </span>
          </div>
        </Link>
      )}
      {story?.subcategories?.length > 0 && (
        <Link href={`/${story?.categories[0]?.slug}/${story?.subcategories[0]?.slug}`}>
          <div>
            <span> {">"} </span>
            <span> {story?.subcategories[0]?.name} </span>
          </div>
        </Link>
      )}
    </div>
  );
};

export default PathView;
