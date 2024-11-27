/* eslint-disable react/no-unescaped-entities */
import Section from "@/Components/common/Section";
import TopAdd from "@/Components/common/TopAdd";
import Link from "next/link";
import React from "react";
import { TiHome } from "react-icons/ti";

function Privacy() {
  return (
    <Section>
      <div className="container">
        <div className="mt-4 flex flex-row gap-x-2 items-center cursor-pointer text-gray-700 pb-1 pt-2 border-b-[1px] border-[#BEBDBD]">
          <div>
            <Link href={`/`} className=" hover:underline">
              <TiHome size={18} className="mb-2" color="#6c757d" />
            </Link>
          </div>
          <div>
            <span> {">"} </span>
            <Link href={`/privacy`} className="hover:underline">
              <span> গোপনীয়তার নীতি
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-xl container">
        <h2 className="font-bold py-4">গোপনীয়তার নীতি</h2>
        <p className="pb-4">
          আজকের পত্রিকার প্রধান দায়িত্ব হলো এর ওয়েবসাইট বা অ্যাপ্লিকেশন ব্যবহার
          করার সময় আপনার ব্যক্তিগত তথ্য সুরক্ষিত রাখা। এই গোপনীয় নীতি ওয়েবসাইট
          বা অ্যাপ্লিকেশনটির পাঠক বা ব্যবহারকারীদের কাছ থেকে সংগ্রহ করা কোনো
          ব্যক্তিগত তথ্য ব্যবহারের সঙ্গে সম্পর্কিত অথবা
        </p>
        <p className="pb-4">
          * আজকের পত্রিকার যেকোনো ওয়েবসাইটের জন্য এই গোপনীয়তা ও কুকিজ নীতি
          প্রযোজ্য। * সামাজিক যোগাযোগমাধ্যম বা অন্য কোনো ওয়েবসাইটে আজকের
          পত্রিকার কনটেন্টের জন্য এই নীতি প্রযোজ্য। * মোবাইলের অ্যাপ্লিকেশনের
          জন্যও এই গোপনীয়তার নীতি প্রযোজ্য। ওপরে বর্ণিত সব পরিষেবার ক্ষেত্রে এই
          গোপনীয়তার নীতি তখনই প্রযুক্ত হবে, যদি সেখানে আজকের পত্রিকার কনটেন্ট
          ব্যবহৃত হয়। আজকের পত্রিকা বিভিন্ন কারণে তার ব্যবহারকারীদের সম্পর্কে
          তথ্য সংগ্রহ বা গ্রহণ করে। এ ক্ষেত্রে উদাহরণ হিসেবে ব্যবহারকারীদের সেবা
          দিতে সেবাসমূহের পরিকল্পনা করার জন্য, সেবাসমূহকে আরও উন্নত করার জন্য,
          বিপণন বা বিজ্ঞাপনের জন্য গ্রাহকদের তথ্য সংগ্রহের কথা উল্লেখ করা যায়।
        </p>
        <p className="pb-4">
          এই তথ্যগুলোর মধ্যে আপনার নাম, ঠিকানা, ফোন নম্বর, ই–মেইল, বয়স, সামাজিক
          যোগাযোগমাধ্যমের অ্যাকাউন্ট ইত্যাদি থাকতে পারে। www.ajkerpatrika.com–এর
          সরবরাহ করা কিছু পরিষেবার ক্ষেত্রে আরও কিছু গোপনীয়তার নীতি প্রযোজ্য
          হতে পারে। আজকের পত্রিকা অ্যাপ্লিকেশন এবং ওয়েবসাইটের মাধ্যমে সরবরাহ
          করা এই পরিষেবাগুলো ডাউনলোড বা সাবস্ক্রাইব করার সময় ব্যবহারকারীদের এসব
          তথ্য পাঠের অনুরোধ জানাচ্ছে। ব্যবহারকারী/ পাঠক/ দর্শকদের কাছ থেকে
          প্রাপ্ত তথ্যগুলো সুরক্ষিত ও সংরক্ষণ করার লক্ষ্যে এটি আজকের পত্রিকার
          একটি উদ্যোগ।
        </p>
        <p className="pb-4">
          আজকের পত্রিকা তার ব্যবহারকারী/ পাঠকদের গোপনীয়তার প্রতি শ্রদ্ধা জানায়
          এবং সংগৃহীত তথ্য কেবল যে উদ্দেশ্যে নেওয়া হয়েছে, সেই উদ্দেশ্যেই তা
          ব্যবহারের নিশ্চয়তা দেয়।
        </p>
        <h2 className="font-bold pb-4">
          ক. আজকের পত্রিকার তথ্য সংগ্রহের পদ্ধতি
        </h2>
        <p className="pb-4">
          নির্দিষ্ট ব্যবহারকারীর তথ্য সংগ্রহের বিষয়টি আজকের পত্রিকা অ্যাপ্লিকেশন
          এবং ওয়েবসাইটটিতে ব্যবহারকারীর প্রবেশের পন্থার ওপর নির্ভর করে—
        </p>
        <p className="pb-4">
          ১। ওয়েবসাইট অথবা অ্যাপ্লিকেশনে রেজিস্ট্রেশন করলে ২। নিউজলেটার
          সাবস্ক্রাইব করার মাধ্যমে ৩। কোনো জরিপ অথবা প্রতিযোগিতায় অংশ নেওয়ার
          মাধ্যমে ৪। আজকের পত্রিকার কোনো সাইট অথবা পেজে লগইনের মাধ্যমে
        </p>
        <h2 className="font-bold pb-4">খ. সংগৃহীত তথ্য প্রকাশের নীতি</h2>
        <p className="pb-4">
          ওয়েবসাইট বা অ্যাপ্লিকেশন পরিচালনা বা এর ব্যবসা ও সেবার ব্যবস্থাপনার
          সঙ্গে জড়িতদের ছাড়া আজকের পত্রিকা কোনো ব্যবহারকারীর ব্যক্তিগত
          উল্লেখযোগ্য কোনো তথ্য কারও কাছে বিক্রি অথবা সরবরাহ করে না। তবে কোন
          ধরনের পাঠক আসছে, তাদের সংখ্যা কত, সেই সংখ্যা বৃদ্ধি বা পাঠকদের
          সম্পৃক্ততা আরও বাড়ানোর লক্ষ্যে এসব তথ্য অভ্যন্তরীণ পরিসরে শেয়ার করতে
          পারে।
        </p>
        <p className="pb-4">
          যদি বাংলাদেশ সরকারের আইন মেনে চলতে গিয়ে ব্যবহারকারীদের শনাক্ত করা যায়
          এমন ব্যক্তিগত তথ্য উন্মুক্ত করতে হয়, তাহলে আজকের পত্রিকা সেটি করতে
          পারে। যদি ভিন্ন কারণে আজকের পত্রিকাকে পাঠকদের ব্যক্তিগত তথ্য ব্যবহার
          করতে হয়, তাহলে প্রতিষ্ঠানটি ব্যবহারকারীদের কাছ থেকে এর জন্য সম্মতি
          চাইবে। কিন্তু এই গোপনীয়তার নীতি থাকা সত্ত্বেও আজকের পত্রিকা পাঠকদের
          ব্যক্তিগত তথ্যসহ সব তথ্য এর ব্যবসার সঙ্গে জড়িত সব কোম্পানি,
          পরামর্শদাতা, সহযোগী জড়িতদের কাছে উন্মুক্ত করে দিতে পারে। আজকের পত্রিকা
          কোনো আইনি প্রক্রিয়া অথবা কোনো ফোরামে নিজের স্বার্থ সংরক্ষণের জন্যও এই
          তথ্যগুলো প্রদান করতে পারে।
        </p>
        <p className="pb-4">
          সম্ভাব্য অবৈধ কার্যক্রম প্রতিরোধ, তদন্ত, কোনো ব্যক্তি বা আমাদের
          পরিষেবা, নীতিমালা, শর্তাবলিতে উল্লিখিত বিধি ইত্যাদির ওপর সম্ভাব্য
          ঝুঁকির পরিস্থিতি তৈরি হলে নিজেদের নীতিমালা অক্ষুণ্ন রাখার স্বার্থে
          পাঠকদের ব্যক্তিগত তথ্য ব্যবহার করতে পারে আজকের পত্রিকা।
        </p>
        <p className="pb-4">
          ব্যবহারকারী/ পাঠকদের কাছে বিভিন্ন পণ্য ও পরিষেবা পৌঁছে দিতে বা এসবের
          সুপারিশ করার জন্যও তথ্যগুলো প্রকাশ করা যেতে পারে। তবে উল্লিখিত প্রতিটি
          ক্ষেত্রে এবং অন্য যেকোনো ক্ষেত্রেই ব্যবহারকারীদের ব্যক্তিগত তথ্য
          প্রকাশের পরিস্থিতি তৈরি হলে আজকের পত্রিকা তা না করার সর্বোচ্চ চেষ্টা
          করবে। তার পরও এমন তথ্য প্রকাশের প্রয়োজন হলে যতটুকু না হলেই নয়, ঠিক
          ততটুকুই তথ্য প্রকাশ করবে।
        </p>
        <h2 className="font-bold pb-4">গ. তথ্য সংরক্ষণ</h2>
        <p className="pb-4">
          আজকের পত্রিকা তার নিজস্ব অভ্যন্তরীণ তথ্য সংরক্ষণের নীতি অনুসারে
          নির্দিষ্ট সময়ের জন্য পাঠকদের তথ্য সংরক্ষণ করতে পারবে। আজকের পত্রিকা
          অ্যাকাউন্টের মেয়াদ ফুরিয়ে গেলে ব্যবহারকারী বা পাঠকদের ব্যক্তিগত তথ্য
          মুছে ফেলা হবে। উল্লেখ্য, কখনো কখনো এ ক্ষেত্রে নির্দিষ্ট সময়ের চেয়ে
          বেশি লাগতে পারে। তবে এর দায়ভার আজকের পত্রিকা নেবে না।
        </p>
        <h2 className="font-bold pb-4">ঘ. বিজ্ঞাপন</h2>
        <p className="pb-4">
          আজকের পত্রিকা ওয়েবসাইট ও মোবাইল অ্যাপ্লিকেশনে অন্তর্ভুক্ত
          বিজ্ঞাপনগুলো থার্ড পার্টি ও বিজ্ঞাপন নেটওয়ার্কগুলোর কাছ থেকে স্বাধীন
          বিজ্ঞাপন ট্যাগের মাধ্যমে আসে, যা ব্যবহারকারীদের সম্পর্কে তথ্য সংগ্রহ
          করতে পারে। তবে এ ক্ষেত্রে এসব তৃতীয় পক্ষ বা বিজ্ঞাপন নেটওয়ার্কগুলোর
          সংগৃহীত তথ্যের দায় আজকের পত্রিকা নেবে না। আজকের পত্রিকায় প্রদর্শিত
          বিজ্ঞাপন-সংশ্লিষ্ট কোনো ঘটনার দায়ভার আজকের পত্রিকা নেবে না।
        </p>
        <h2 className="font-bold pb-4">ঙ. তৃতীয় পক্ষের বিজ্ঞাপন ও লিংক</h2>
        <p className="pb-4">
          আজকের পত্রিকা বিবেচনার ভিত্তিতে নিজেদের ওয়েবসাইট বা অ্যাপ্লিকেশনে এমন
          অনেক তৃতীয় পক্ষের কাছ থেকে বিজ্ঞাপন নিতে পারে, যাদের স্বতন্ত্র
          গোপনীয়তার নীতি রয়েছে। আজকের পত্রিকা বিজ্ঞাপনের বিষয়বস্তু, কোনো ভুল,
          অযথার্থতা বা এড়িয়ে যাওয়ার মতো বিজ্ঞাপন-সংশ্লিষ্ট কোনো ভুলের দায় বহন
          করে না। আজকের পত্রিকা কোনো ওয়েবসাইটের লিংকের মাধ্যমে বা পত্রিকার
          উপাদানে পৃথক লিংক, অ্যাপ্লিকেশন বা ওয়েবসাইটে প্রবেশের কারণে কোনো তথ্য
          ফাঁসের ক্ষেত্রে কোনো দায়ভার গ্রহণ করবে না।
        </p>
        <h2 className="font-bold pb-4">চ. কুকিজের ব্যবহার</h2>
        <p className="pb-4">
          আজকের পত্রিকা কুকিজের ওপর ভিত্তি করে কোনো ব্যবহারকারীর ব্যক্তিগত তথ্য
          সংগ্রহ করে না, জমাও রাখে না। আবার আজকের পত্রিকা ওয়েবসাইটের সঙ্গে যুক্ত
          কোনো তৃতীয় পক্ষ কুকিজের মাধ্যমে তথ্য সংগ্রহ করলে তা নিয়ন্ত্রণও করে না।
          সুতরাং, তৃতীয় পক্ষের ওয়েবসাইটে প্রবেশের আগে ভালোভাবে দেখে নিন।
        </p>
        <h2 className="font-bold pb-4">ছ. অবস্থান ও ক্রয়-সম্পর্কিত তথ্য</h2>
        <p className="pb-4">
          সুনির্দিষ্ট পাঠকের কাছে পৌঁছাতে এবং প্রচারের জন্য আজকের পত্রিকা
          বিভিন্ন মাধ্যম থেকে পাঠকের তথ্য সংগ্রহ করে। এ ক্ষেত্রে আমাদের
          ওয়েবসাইটে পাঠকের প্রবণতা শনাক্ত করতে আমরা গুগল অ্যানালাইটিকসসহ বিভিন্ন
          মাধ্যম থেকে তথ্য নিই। তবে প্রদর্শিত বিজ্ঞাপনের জন্য আপনি গুগল
          অ্যানালাইটিকস থেকে বেরিয়ে যেতে পারেন এবং গুগলের সরবরাহ করা বিজ্ঞাপন
          সেটিংস ব্যবহার করে গুগল ডিসপ্লে নেটওয়ার্কের বিজ্ঞাপনগুলো কাস্টমাইজ করে
          নিতে পারেন।
        </p>
        <h2 className="font-bold pb-4">
          জ. পাঠকের সঙ্গে আজকের পত্রিকার যোগাযোগ
        </h2>
        <p className="pb-4">
          ব্যবহারকারী/ পাঠকদের কাছ থেকে প্রাপ্ত তথ্যের ভিত্তিতে আজকের পত্রিকা
          কর্তৃক আয়োজিত প্রচার কার্যক্রম/ প্রতিযোগিতা, প্রতিক্রিয়া, জরিপ
          ইত্যাদিতে অংশ নেওয়ার জন্য আমন্ত্রণ জানাতে ই–মেইল, ফোন বা এসএমএসের
          মাধ্যমে তার ব্যবহারকারীদের সঙ্গে যোগাযোগ করতে পারে।
        </p>
        <h2 className="font-bold pb-4">
          ঝ. বাংলাদেশের বাইরে থেকে আজকের পত্রিকার অ্যাপ্লিকেশন ও ওয়েবসাইট
          ব্যবহার
        </h2>
        <p className="pb-4">
          বাংলাদেশের বাইরে থেকে আজকের পত্রিকার অ্যাপ্লিকেশন ও ওয়েবসাইটে প্রবেশের
          ক্ষেত্রে ব্যবহারকারী/ পাঠকদের ব্যক্তিগত তথ্য ব্যবহারের ক্ষেত্রেও একই
          শর্তাবলি ও গোপনীয়তার নীতি প্রযোজ্য হবে।
        </p>
        <h2 className="font-bold pb-4">ঞ. সরকারি আইন</h2>
        <p className="pb-4">
          আজকের পত্রিকার গোপনীয়তার নীতি এবং ব্যবহারকারীর সঙ্গে এর সম্পর্ক
          পরিচালনার নীতিগুলো বাংলাদেশের সংবিধান ও আইন অনুসরণ করে তৈরি করা হয়েছে।
          তথ্য বা তারিখের ব্যবহার, এর সঞ্চয়, প্রকাশ, ফাঁস বা প্রচার-সম্পর্কিত
          যেকোনো বিরোধ কেবল বাংলাদেশের আদালতেই উত্থাপিত হতে পারে, যা এ বিষয়ে
          সিদ্ধান্ত দেওয়ার একচেটিয়া এখতিয়ার সংরক্ষণ করে। জাতীয়তা, অবস্থান,
          বাসস্থান বা ব্যবসায়ের স্থান যা-ই হোক না কেন, আজকের পত্রিকার ওয়েবসাইটে
          যিনিই প্রবেশ করবেন বা এর অ্যাপ্লিকেশন বা সেবা যিনি ব্যবহার করবেন, তাঁর
          জন্যই এই পুরো গোপনীয়তার নীতি প্রযোজ্য হবে।
        </p>
        <h2 className="font-bold pb-4">ট. গোপনীয়তার নীতি পরিবর্তন</h2>
        <p className="pb-4">
          আজকের পত্রিকা যেকোনো সময় গোপনীয়তার নীতিতে যেকোনো শর্ত সংশোধন, পরিবর্তন
          বা বাদ দেওয়ার অধিকার রাখে। তবে এ ক্ষেত্রে পরিবর্তিত নীতিটি অবিলম্বে
          ওয়েবসাইটে আপলোড বা আপডেট করা হবে। নীতিগত যেকোনো পরিবর্তনের পর আমাদের
          পরিষেবা ব্যবহার অব্যাহত রাখার অর্থ হচ্ছে সংশ্লিষ্ট ব্যক্তি আমাদের
          গোপনীয়তার নীতিতে আসা পরিবর্তনগুলো মেনে নিয়েছেন এবং সেই সূত্রে তিনি এই
          নীতি মেনে চলতে বাধ্য। এ জন্য আমরা পাঠকদের নিয়মিত বিরতিতে এই নীতিমালা
          পাঠের পরামর্শ দিচ্ছি, যাতে তাঁরা সব সময় জানতে পারেন, আমরা কী ধরনের
          তথ্য সংগ্রহ করি, তা কীভাবে ব্যবহার করি এবং কার সঙ্গে তা শেয়ার করি।
        </p>
        <h2 className="font-bold pb-4">ঠ. সংযোগ-বিচ্ছিন্নের পদ্ধতি</h2>
        <p className="pb-4">
          যদি কোনো ব্যবহারকারী আমাদের কাছ থেকে বিপণনের তথ্যসংবলিত ই–মেইল না
          পাওয়ার সিদ্ধান্ত নেন, তাহলে সংশ্লিষ্ট ব্যবহারকারী মেইলটি
          আন-সাবস্ক্রাইব করতে পারবেন। এর জন্য প্রতিটি মেইলের নিচেই
          আন-সাবস্ক্রাইব অপশনটি থাকে। ওয়েবসাইটে থাকা নিজের অ্যাকাউন্টটি বাতিল
          করতে হলে (info@ajkerpatrika.com) ঠিকানায় একটি ই-মেইল পাঠালেই হবে।
        </p>
        <h2 className="font-bold pb-4">PRIVACY POLICY</h2>
        <p className="pb-4">
          It is the foremost obligation of Ajker Patrika to protect your
          personal information while you are using the website or the
          application. This Privacy Policy, therefore, relates to the usage of
          any personal information that is collected from the visitors or the
          users of the website or the application or
        </p>
        <ul className="pb-4 list-disc list-inside">
          <li className="pb-4">
            any Ajker Patrika website that links to this privacy and cookies
            policy;
          </li>
          <li className="pb-4">
            social media or official Ajker Patrika content on other websites; •
            mobile device and/or applications (“Apps”)
          </li>
        </ul>
        <p className="pb-4">
          In all the services stated above, the Privacy Policy shall be applied
          only when the application, website or contents therein are generated
          by Ajker Patrika. Ajker Patrika collects or receives information about
          its users for many purposes; for instance, to provide services
          designed to serve the user, to monitor and improve the services
          offerings, for marketing or targeting advertisement etc. Such
          information may include your name, address, phone number, email
          address, age, social network account etc. (“the Information”). There
          may be other privacy policies that apply to certain services provided
          by www.ajkerpatrika.com. Users are entreated to read these while
          downloading or subscribing to these services provided by the
          application and the website . It is the venture of Ajker Patrika to
          safeguard and preserve the information received from its
          users/readers/visitors. Ajker Patrika respects the privacy of its
          users/readers and renders its absolute effort to assure that the
          information collected is used only for the finite purpose for which it
          was received.
        </p>
        <h2 className="font-bold pb-4">
          A. How Ajker Patrika collects the information
        </h2>
        <p className="pb-4">
          The collection of the data of a particular user is dependent upon the
          user’s access to the Ajker Patrika application and website while
        </p>
        <p className="pb-4">
          (i) registering to the site or application. (ii) subscribing to the
          newsletter. (iii) responding to a survey or participating in a
          competition (iv) logging in to a site or page, etc.
        </p>
        <h2 className="font-bold pb-4">
          B. Disclosure of Information Collected
        </h2>
        <p className="pb-4">
          Ajker Patrika does not sell, trade or otherwise provide personally
          identifiable information to any other parties except for those aiding
          Ajker Patrika in managing or operating its application and/or the
          website, conducting or supervising the business and contributing to
          the service of the users. It may share user's/reader's personal
          information internally in order to interpret or understand the user
          base, expand the number of users and increase the overall user
          engagement.
        </p>
        <p className="pb-4">
          Ajker Patrika may be required to liberate personally identifiable
          information if it is demanded in case of complying with the law of
          Bangladesh. In the event of Ajker Patrika using such personal
          information in a different way than it is described above it shall
          seek consent of the individual concerned. Notwithstanding anything
          contained in this Privacy Policy, Ajker Patrika may disclose or share
          the collected information including personal information to the
          service providers, affiliate companies, consultants or advisors or
          Partners that it have been engaged to perform functions related to
          business ventures on its behalf. Ajker Patrika may also share the
          information as a response to legal process, or to protect its interest
          in any forum. The information may also be used for investigating or
          preventing potentially illegal activities, or situations involving
          potential threats to any person, us, or the services, or violations of
          our policies, the law or our Terms of Use as well as to verify or
          enforce compliance with the policies governing our Services. The
          information might also be shared to extend or recommend market
          products or services to the users/readers. However, in all these cases
          or any other event when a personal information is shared or disclosed,
          Ajker Patrika shall be obliged to contribute its best endeavors to
          resist the disclosure and shall only share to such extent as it is
          required to meet the purpose.
        </p>
        <h2 className="font-bold pb-4">C. Data Retention</h2>
        <p className="pb-4">
          Ajker Patrika may retain data for a further period as per its own
          internal data retention policy. User's/reader's personal information
          shall be deleted upon the expiry of Ajker Patrika account. Please note
          that there may be events when the eradication of information may take
          a bit more time than usual, and Ajker Patrika shall not hold any
          responsibility for such occasions.
        </p>
        <h2 className="font-bold pb-4">D. Advertisement</h2>
        <p className="pb-4">
          The advertisements included in the Ajker Patrika website and mobile
          application are by third-party companies & ad networks through
          independent ad tags, which may collect information about users and
          Ajker Patrika shall not be held responsible for collecting and/or
          sharing such information with any other party. Ajker Patrika should
          not be held liable not for the occurrence that may arise as a result
          of any content of any advertisement that may appear on the Ajker
          Patrika.
        </p>
        <h2 className="font-bold pb-4">
          E. Third Party Advertisements and links
        </h2>
        <p className="pb-4">
          At the discretion of Ajker Patrika, the website or application may
          display or allow advertisements of third party services or products
          which may have separate and independent privacy policies. Ajker
          Patrika accepts no responsibility or liability for the content of
          advertising material, including any error, omission or inaccuracy
          therein. Ajker Patrika will not be taking any responsibility in case
          of the leakage of any information due to the independent access to a
          separate link, application or website, of the users whether through a
          link in the website or contents of Ajker Patrika.
        </p>
        <h2 className="font-bold pb-4">F. Use of Cookies</h2>
        <p className="v">
          The data collection process by Ajker Patrika is not based on cookies,
          neither does it store any sort of information that may be personal to
          the user. If a third party associated with Ajker Patrika collects user
          cookies upon the usage of Ajker Patrika, it should be remarked in such
          cases that Ajker Patrika does not control the use of these cookies and
          therefore the relevant third-party website should be checked.
        </p>
        <h2 className="font-bold pb-4">
          G. Demographic and purchase information:
        </h2>
        <p className="pb-4">
          We may reference other sources of demographic and other information to
          provide you with more targeted communications and promotions. We use
          Google Analytics, among others, to track the user behavior on our
          website. You can opt-out of Google Analytics for Display Advertising
          and customize Google Display Network ads using the Ads Settings
          options provided by Google.
        </p>
        <h2 className="font-bold pb-4">
          H. Interpersonal Communication by Ajker Patrika
        </h2>
        <p className="pb-4">
          Ajker Patrika may contact its users via e-mail, phone or SMS for
          invitation for participation in campaigns/competitions organized by
          Ajker Patrika, feedback, survey etc, based on the information it had
          received from the users.
        </p>
        <h2 className="font-bold pb-4">
          I. Using the application and accessing the website from outside of
          Bangladesh
        </h2>
        <p className="pb-4">
          All personal information submitted by users outside Bangladesh will be
          processed in accordance with these Terms of Use and Privacy Policy.
        </p>
        <h2 className="font-bold pb-4">J. Governing Law</h2>
        <p className="pb-4">
          The laws that govern the Privacy Policy of Ajker Patrika and its
          relationship with the user is according to the constitution and laws
          of Bangladesh and any dispute regarding the use, retention,
          disclosure, leakage or dissemination of the information or date can
          only be raised before the courts of Bangladesh which shall have
          exclusive jurisdiction on this matter. The entire Privacy Policy shall
          apply to all who enters the website, receives service or uses
          application from Ajker Patrika regardless of their nationality,
          location, residence or place of business.
        </p>
        <h2 className="font-bold pb-4">K. Modification of Privacy Policy</h2>
        <p className="pb-4">
          Ajker Patrika reserves the right to amend, modify, alter, or omit any
          terms in the Privacy Policy at any time but the changed policy shall
          be immediately uploaded or updated in the website. By continuing to
          use our services after any changes are made, you accept those changes
          and will be bound by them. We encourage you to periodically check back
          and review this policy so that visitors/readers will always know what
          information we collect, how we use it, and with whom we share it.
        </p>
        <h2 className="font-bold pb-4">L. Opt-out</h2>
        <p className="pb-4">
          If, at any time, the users decide not to receive email containing
          marketing information from us, then the user can simply follow the
          unsubscribe options at the bottom of each email. If the users no
          longer wish to have a registered account, the user may terminate the
          account by sending an email to the following address:
          info@ajkerpatrika.com
        </p>
      </div>
    </Section>
  );
}

export default Privacy;
