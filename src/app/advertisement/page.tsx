import TopAdd from "@/Components/common/TopAdd";
import Link from "next/link";
import React from "react";
import { TiHome } from "react-icons/ti";

function Advertisement() {
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
          <Link href={`/advertisement`} className="hover:underline">
            <span> advertisement </span>
          </Link>
        </div>
      </div>
      <div className="text-xl pb-8 pt-6">
        <h2 className="font-bold pb-3">বিজ্ঞাপন</h2>
        <p className="pb-4">
          পাঠকের জন্য প্রিন্ট ও ডিজিটাল মাধ্যমে বস্তুনিষ্ঠ ও প্রাসঙ্গিক কনটেন্ট
          পরিবেশন করার লক্ষ্য নিয়ে আজকের পত্রিকা ২৭ জুন, ২০২১ তারিখে যাত্রা শুরু
          করে। প্রকাশের মাত্র তিন মাসের মধ্যে আজকের পত্রিকা দেশের তৃতীয় সর্বাধিক
          প্রচারিত দৈনিক হয়ে উঠেছে, যা বাংলাদেশের প্রিন্ট নিউজ মিডিয়ার ইতিহাসে
          এক অভূতপূর্ব ঘটনা।
        </p>
        <p className="pb-4">
          ‘সারা দেশের স্থানীয় দৈনিক’ স্লোগান নিয়ে দেশের সব জেলা এবং অধিকাংশ
          উপজেলায় অবস্থিত সংবাদকর্মী নিয়ে আমরা বাংলাদেশের আনাচ-কানাচের খবর তুলে
          ধরছি প্রতিদিন, কনটেন্টের সংখ্যা ও বিষয়বৈচিত্র্যে যা দেশের অন্য যেকোনো
          সংবাদমাধ্যমের তুলনায় ভিন্ন।
        </p>
        <p className="pb-4">
          নতুন ধরনের পৃষ্ঠাসজ্জা ও ভিন্ন ভিন্ন পাঠক শ্রেণির জন্য ভিন্ন ভিন্ন
          কনটেন্ট দিয়ে আজকের পত্রিকা এমনভাবে সাজানো হয়েছে, যেন এটি পরিবারের
          সবার পত্রিকা হয়ে উঠতে পারে। তাই এক পত্রিকার মাধ্যমে বিভিন্ন বয়স,
          আর্থসামাজিক শ্রেণি ও পেশার পাঠকের কাছে পৌঁছানো যায় সহজেই। উপরন্তু,
          আজকের পত্রিকার স্থানীয় সংস্করণের মাধ্যমে অত্যন্ত সাশ্রয়ী মূল্যে
          বিভিন্ন এলাকার সুনির্দিষ্ট জনগোষ্ঠীর কাছে যেকোনো পণ্য, সেবা বা
          ব্র্যান্ডকে তুলে ধরার অনন্য সুযোগ থাকছে বিজ্ঞাপনদাতাদের জন্য।
        </p>
        <p className="pb-4">
          সর্বশেষ খবর, বিশ্লেষণ, ফিচার, ছবি আর ভিডিও দিয়ে সাজানো হয়েছে আজকের
          পত্রিকার অনলাইন পোর্টাল, যা ল্যাপটপ ও মোবাইল ফোন সহ যেকোনো ধরনের
          ডিভাইসে পড়া যায়। এর পাশাপাশি রয়েছে ই-পেপার সাইট, যেখানে পাঠকরা
          প্রতিদিন আজকের পত্রিকার সব আঞ্চলিক সংস্করণগুলো পড়তে পারেন খুব সহজেই।
          কাঙ্ক্ষিত গ্রাহকের কাছে পৌঁছানোর জন্য আজকের পত্রিকার ডিজিটাল
          প্ল্যাটফর্মগুলোতে বিভিন্ন ফরম্যাটে, সময়ে, অবস্থানে, পরিসরে ও আকারে
          বিজ্ঞাপন দেওয়ার সুবিধা রয়েছে।
        </p>
        <p className="pb-[10px]">
          আজকের পত্রিকার ছাপা সংস্করণে প্রকাশের জন্য বিজ্ঞাপনের মূল্য তালিকা
          <Link
            href={`https://ajpbucket.ideahubbd.com/documents/AJP_Ad_Rate_Card_Print_2022-08-22_F.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="ml-4 py-[7px] px-2 text-sm font-sans text-white rounded-[3px] bg-cyan-600 opacity-90">
              Download Rate Card of Print Edition
            </button>
          </Link>
        </p>
        <p className="pb-7">
          আজকের পত্রিকার ডিজিটাল সংস্করণে প্রকাশের জন্য বিজ্ঞাপনের মূল্য তালিকা
          <Link
            href={`https://ajpbucket.ideahubbd.com/documents/AJP_Ad_Rate_Card_Digital_28_January_2023.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="ml-4 py-[7px] px-2 text-sm font-sans text-white rounded-[3px] bg-cyan-600 opacity-90">
              Download Rate Card of Digital Edition
            </button>
          </Link>
        </p>

        <h2 className="font-bold pb-3">যোগাযোগ</h2>
        <p className="pb-3">
          আজকের পত্রিকা, বাড়ি ৮, রোড ২, ব্লক সি, বনশ্রী, রামপুরা, ঢাকা-১২১৯
        </p>
        <p className="pb-3">
          ওয়েবসাইট: ajkerpatrika.com, ই-পেপার: eajkerpatrika.com
        </p>
        <p className="pb-3">মোবাইল: +৮৮ ০১৩২৩ ২৩২৩২৯, ফোন: + ৮৮ ০৯৬৪৩ ১১১৩৩৩</p>
        <p className="pb-8">ই-মেইল: adsales@ajkerpatrika.com</p>

        <h2 className="font-bold pb-3">Advertisement</h2>
        <p className="pb-4">
          With the commitment to provide credible and relevant contents for
          readers through both print and digital platforms, Ajker Patrika began
          its journey on 27 June, 2021. Ajker Patrika has become the 3rd highest
          circulated newspaper of the country within only three months of
          launching, a feat unheard of in the history of the print newsmedia of
          Bangladesh.
        </p>
        <p className="pb-4">
          Founded on ‘Country’s Local Newspaper’ motto, Ajker Patrika caters
          news from every nook and cranny of Bangladesh for the readers through
          its dedicated legion of journalists and correspondents stationed in
          all the districts and most of the sub-districts of the country.
        </p>
        <p className="pb-4">
          Ajker Patrika has been designed with unique pagination theme and
          target group-based contents to be a newspaper for all the members of a
          family. Therefore, reaching out to consumers of different ages,
          occupations and socio-economic classes (SECs) can be done effectively
          with Ajker Patrika. On top of that, Ajker Patrika ensures
          location-based targeting through its regional editions.
        </p>
        <p className="pb-4">
          The online portal of Ajker Patrika, which fits well into all sizes of
          screen, caters updated news, views, articles, images and videos.
          Besides, the e-paper site allows visitor to conveniently read any
          regional edition. The digital platforms of Ajker Patrika offers broad
          range of solutions – in terms of size, placement, timing, format,
          targeting, etc. – to the advertisers for reaching the target
          audiences.
        </p>
        <p className="pb-[10px]">
          Advertisement rate card for print edition can be downloaded from here
          <Link
            href={`https://ajpbucket.ideahubbd.com/documents/AJP_Ad_Rate_Card_Print_2022-08-22_F.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="ml-4 py-[7px] px-2 text-sm font-sans text-white rounded-[3px] bg-cyan-600 opacity-90">
              Download Rate Card of Print Edition
            </button>
          </Link>
        </p>
        <p className="pb-7">
          Advertisement rate card for digital edition can be downloaded from
          here
          <Link
            href={`https://ajpbucket.ideahubbd.com/documents/AJP_Rate_Card_Digital_01.01.2022.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="ml-4 py-[7px] px-2 text-sm font-sans text-white rounded-[3px] bg-cyan-600 opacity-90">
              Download Rate Card of Digital Edition
            </button>
          </Link>
        </p>

        <h2 className="font-bold pb-3">Contact Us</h2>
        <p className="pb-3">
          Ajker Patrika, House 8, Road 2, Block C, Banasree, Rampura, Dhaka-1219
        </p>
        <p className="pb-3">
          Website: ajkerpatrika.com, E-paper: eajkerpatrika.com
        </p>
        <p className="pb-3">
          Mobile: +88 01323 232329, Phone: +88 09643 111333
        </p>
        <p className="pb-3">E-mail: adsales@ajkerpatrika.com</p>
      </div>
    </div>
  );
}

export default Advertisement;
