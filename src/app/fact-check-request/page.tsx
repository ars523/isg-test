import PathView from "@/Components/common/PathView";
import Link from "next/link";
import React from "react";
import { TiHome } from "react-icons/ti";

const FactcheckRequestPage = () => {
  return (
    <div className="container">
      <div className="flex flex-row gap-x-2 items-center cursor-pointer text-gray-700 pb-1 pt-2 border-b-[1px] border-[#BEBDBD]">
        <div>
          <Link href={`/`} className=" hover:underline">
            <TiHome size={18} className="mb-2" color="#6c757d" />
          </Link>
        </div>
        <div>
          <span> {">"} </span>
          <Link href={`/fact-check`} className="hover:underline">
            <span> ফ্যাক্টচেক </span>
          </Link>
          <span> {">"} </span>
          <Link href={`/fact-check-request`} className="hover:underline">
            <span> অনুরোধ </span>
          </Link>
        </div>
      </div>
      <div className=" text-xl">
        <p className="pb-4 pt-6">
          সামাজিক যোগাযোগমাধ্যম, সংবাদমাধ্যম বা যেকোনো মাধ্যমে প্রচারিত কোনো
          ছবি, ভিডিও বা তথ্য নিয়ে সন্দেহ হলে তার স্ক্রিনশট বা লিংক কিংবা সে
          সম্পর্কিত বিস্তারিত তথ্য আমাদের পাঠাতে যোগাযোগের মাধ্যম।
        </p>
        <p className="pb-4">
          <span className="font-bold">হোয়াটস অ্যাপ: </span>
          01324293880, 01324293883
        </p>
        <p className="pb-4">
          <span className="font-bold">ইমেইল: </span>
          <a
            href="mailto:factcheck@ajkerpatrika.com"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-red-500"
          >
            factcheck@ajkerpatrika.com
          </a>
        </p>
        <p className="pb-9">
          <span className="font-bold">ফেসবুক পেজ: </span>
          <Link
            href="https://www.facebook.com/ajpbd"
            className="text-blue-500 hover:text-red-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.facebook.com/ajpbd
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FactcheckRequestPage;
