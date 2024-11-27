import Section from "@/Components/common/Section";
import TopAdd from "@/Components/common/TopAdd";
import Link from "next/link";
import React from "react";
import { TiHome } from "react-icons/ti";

function Circulation() {
  return (
    <Section>
      <div className="container">
        <div className="flex flex-row gap-x-2 items-center cursor-pointer text-gray-700 pb-1 pt-2 border-b-[1px] border-[#BEBDBD]">
          <div>
            <Link href={`/`} className=" hover:underline">
              <TiHome size={18} className="mb-2" color="#6c757d" />
            </Link>
          </div>
          <div>
            <span> {">"} </span>
            <Link href={`/circulation`} className="hover:underline">
              <span> সার্কুলেশন </span>
            </Link>
          </div>
        </div>
        <div className="text-xl pt-6">
          <p className="pb-3">
            আজকের পত্রিকা ছাপা কাগজ পেতে কোনো অসুবিধা হলে, আজকের পত্রিকার এজেন্ট
            হতে চাইলে অথবা আজকের পত্রিকার পুরোনো সংখ্যা সংগ্রহ করতে যোগাযোগ
            করুন-
          </p>
          <p className="pb-3">মোবাইল: ০১৩২৩২৩২৩২৮</p>
          <p className="pb-3">ইমেইল: circulation@ajkerpatrika.com</p>
          <p className="pb-9">
            প্রধান কার্যালয়: বাড়ি-৮, রোড-২, ব্লক-সি, বনশ্রী, রামপুরা, ঢাকা-১২১৯
          </p>
          <p className="pb-3">
            If you face any difficulty in getting Ajker Patrika newspaper, or
            want to buy old copies of Ajker Patrika, please contact us{" "}
          </p>
          <p className="pb-3">Mobile: +880 13232-32328</p>
          <p className="pb-3">Email: circulation@ajkerpatrika.com</p>
          <p className="pb-3">
            Head Office: House-8, Road-2, Block-C, Banasree, Rampura, Dhaka-1219
          </p>
        </div>
      </div>
    </Section>
  );
}

export default Circulation;
