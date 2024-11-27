/* eslint-disable react/no-unescaped-entities */
import TopAdd from "@/Components/common/TopAdd";
import Link from "next/link";
import React from "react";
import { TiHome } from "react-icons/ti";

function AboutUsPage() {
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
          <Link href={`/about-us`} className="hover:underline">
            <span> আজকের পত্রিকা </span>
          </Link>
        </div>
      </div>

      <div className="text-xl pb-8 pt-6">
        <h2 className="font-bold pb-4">আমাদের সম্পর্কে</h2>
        <p className="pb-4">
          বাংলা ভাষার জাতীয় দৈনিক{" "}
          <Link
            href={`/`}
            target="_blank"
            rel="noopener norefferer"
            className="text-blue-500 hover:text-red-500"
          >
            আজকের পত্রিকার
          </Link>{" "}
          পথচলা শুরু ২০২১ সালের ২৭ জুন। প্রিন্ট ও ডিজিটাল মাধ্যমে বস্তুনিষ্ঠ ও
          প্রাসঙ্গিক কনটেন্ট পরিবেশন করে দেশের শীর্ষস্থানীয় নিউজ মিডিয়া
          ব্র্যান্ড হওয়ার লক্ষ্য নিয়ে আমরা যাত্রা শুরু করেছি। ‘সারা দেশের
          স্থানীয় দৈনিক’ স্লোগান নিয়ে দেশের সব জেলা এবং অধিকাংশ উপজেলায় অবস্থিত
          সংবাদকর্মী নিয়ে আমরা বাংলাদেশের আনাচ-কানাচের খবর তুলে ধরছি প্রতিদিন,
          কনটেন্টের সংখ্যা ও বিষয়বৈচিত্র্যে যা দেশের অন্য যেকোনো সংবাদমাধ্যমের
          তুলনায় ভিন্ন।
        </p>
        <p className="pb-4">
          আজকের পত্রিকার সঙ্গে আছেন একদল তরুণ ও উদ্যমী সাংবাদিক এবং কর্মী। আর এই
          পুরো দলকে নেতৃত্ব দিচ্ছেন সংবাদমাধ্যমের অভিজ্ঞ ব্যক্তিবর্গ, যাঁদের
          রয়েছে এই ক্ষেত্র সম্পর্কে বহু বছরের সঞ্চিত জ্ঞান ও অভিজ্ঞতা। আজকের
          পত্রিকার সম্পাদক অধ্যাপক ড. মো. গোলাম রহমান বাংলাদেশের একজন
          শীর্ষস্থানীয় শিক্ষাবিদ, গণমাধ্যম গবেষক এবং যোগাযোগ বিশেষজ্ঞ। তিনি
          বাংলাদেশ সরকারের তথ্য কমিশনের প্রধান তথ্য কমিশনার হিসেবে দায়িত্ব পালন
          করেছেন। বাংলাদেশ সংবাদ সংস্থার (বাসস) চেয়ারম্যানও ছিলেন তিনি। এ ছাড়া
          তিনি ঢাকা বিশ্ববিদ্যালয়ের গণযোগাযোগ ও সাংবাদিকতা বিভাগের চেয়ারম্যান
          হিসেবেও দায়িত্ব পালন করেন।
        </p>
        <p className="pb-4">
          আজকের পত্রিকা সার্কুলেশন বা প্রচারসংখ্যার দিক দিয়ে দেশের সব
          সংবাদপত্রের মধ্যে এখন তৃতীয়। তিন ধরনের মলাটে ভিন্ন আঙ্গিকে আমাদের
          পত্রিকা এমনভাবে সাজানো হয়েছে, যেন এটি পরিবারের সবার পত্রিকা হয়ে উঠতে
          পারে। তাই এক পত্রিকার মাধ্যমে ভিন্ন ভিন্ন বয়স, শ্রেণি ও পেশার পাঠকের
          কাছে পৌঁছানো যায় সহজেই। উপরন্তু, আজকের পত্রিকার স্থানীয় সংস্করণের
          মাধ্যমে অত্যন্ত সাশ্রয়ী মূল্যে বিভিন্ন এলাকার সুনির্দিষ্ট জনগোষ্ঠীর
          কাছে যেকোনো পণ্য, সেবা বা ব্র্যান্ডকে তুলে ধরার অনন্য সুযোগ থাকছে।
          পাশাপাশি সুবিন্যস্ত ও নজরকাড়া ওয়েবসাইটের সঙ্গে সব স্থানীয় সংস্করণ নিয়ে
          সাজানো ই-পেপার সাইট তো রয়েছেই।
        </p>
        <p className="pb-4">
          ইউএস-বাংলা গ্রুপের পৃষ্ঠপোষকতায় আজকের পত্রিকা প্রকাশিত হচ্ছে ঢাকা ও
          বগুড়ায় অবস্থিত ছাপাখানা থেকে। অনন্যতাকে সঙ্গী করে নির্ভরযোগ্য ও
          প্রাসঙ্গিক কনটেন্ট পরিবেশনের পাশাপাশি আমরা খবরের ভেতরের খবর তুলে ধরার
          চেষ্টা করি, যেন তা পাঠকের চিন্তাধারাকে পুনরুজ্জীবিত করে এবং তাঁর
          দৈনন্দিন জীবনকে আরও সমৃদ্ধ করে তোলে।
        </p>
        <h2 className="font-bold pb-4">About Us</h2>
        <p className="pb-4">
          <Link
            href={`/`}
            target="_blank"
            rel="noopener norefferer"
            className="text-blue-500 hover:text-red-500"
          >
            Ajker Patrika
          </Link>{" "}
          is a prominent newsmedia in Bangladesh with print newspaper and
          digital portal. Founded on ‘Country's Local Newspaper’ motto, Ajker
          Patrika started its journey on 27 June, 2021. With the commitment to
          leading the newsmedia space with credible and relevant contents, Ajker
          Patrika caters news from every nook and cranny of Bangladesh for the
          readers through its dedicated legion of journalists and correspondents
          stationed in all the districts and most of the sub-districts of the
          country. At present, Ajker Patrika is the 3rd largest newspaper of
          Bangladesh in terms of circulation number.
        </p>
        <p className="pb-4">
          A group of young and enthusiastic journalists and business
          professionals have joined our ranks and are led by industry veterans
          with many years of domain knowledge and experience. The Editor of
          Ajker Patrika, Professor. Dr. Md. Golam Rahman, is Bangladesh's
          leading educationist, media researcher, and communication expert. He
          has served as the Chief Information Commissioner of the Information
          Commission of the Government of Bangladesh, as the Chairman of
          Bangladesh Sangbad Sangstha (BSS) and the Department of Mass
          Communication and Journalism of the University of Dhaka.
        </p>
        <p className="pb-4">
          With a blend of innovation and uniqueness, we aim to provide
          trustworthy and pertinent news, information and contents to help
          enriching the lives of our readers.
        </p>
        <h2 className="font-bold">Editor</h2>
        <p className="pb-4">D. Md. Golam Rahman</p>
        <h2 className="font-bold">Managing Editor</h2>
        <p className="pb-4">Kamrul Hasan</p>
        <h2 className="font-bold">Fact-Checking Policy</h2>
        <p className="pb-4">
          Ajker Patrika adopts a multilevel fact-checking process. The written
          news and stories collected by the reporters of Ajker Patrika are
          thoroughly reviewed and cross-checked by the department heads and
          veteran sub-editors. Our sub-editors collaborate with our reporters to
          ensure that all concerned parties have been approached for statements
          and also to confirm the overall authenticity of the news before
          publishing it on the print or digital platform. However, further
          extensive fact-checking procedures are initiated if any type of
          irregularities is found in the information. Senior editors’
          involvement varies on factors like complexity and sensitivity of the
          topic and the availability of time.
        </p>
        <h2 className="font-bold">Ethics Policy</h2>
        <p className="pb-4">
          Ajker Patrika is committed to providing accurate and relevant news to
          the readers. We continuously evaluate our policy to ensure the best
          ethical practices to serve the readers with credible news and
          information. From political point of view, we adopt non-partisan and
          impartial stance. We are steadfast in making sure that our national
          interests, rule of law, human rights, gender and children related
          issues, and freedom of the press are not violated by any means.
        </p>
        <h2 className="font-bold">Corrections Policy</h2>
        <p className="pb-4">
          Even though we try our best to provide accurate news and information
          all the time but sometimes unintentional mistakes can happen. We do
          not shy away from addressing our mistakes and correcting it. Whenever
          a mistake is identified we make necessary correction and inform our
          readers as soon as possible. We try to provide essential information
          to our readers so that they can understand how and why a mistake
          happened.
        </p>
        <h2 className="font-bold">Ownership & Funding Info</h2>
        <p className="pb-4">
          Ajker Patrika is owned by Bijoy Bangla Media Limited (BBML). BBML is a
          concern of US-Bangla Group. US-Bangla group, which started its journey
          back in 2009, is currently operating in real estate, aviation,
          education, healthcare, logistics, clothing, footwear and media
          industries.
        </p>
      </div>
    </div>
  );
}

export default AboutUsPage;
