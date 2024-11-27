import Section from "@/Components/common/Section";
import TopAdd from "@/Components/common/TopAdd";
import Link from "next/link";
import React from "react";
import { TiHome } from "react-icons/ti";

function Contact() {
  return (
    <Section>
      <div className="container">
        <div className=" mt-4 flex flex-row gap-x-2 items-center cursor-pointer text-gray-700 pb-1 pt-2 border-b-[1px] border-[#BEBDBD]">
          <div>
            <Link href={`/`} className=" hover:underline">
              <TiHome size={18} className="mb-2" color="#6c757d" />
            </Link>
          </div>
          <div>
            <span> {">"} </span>
            <Link href={`/contact`} className="hover:underline">
              <span> যোগাযোগ </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-xl pb-8 pt-4 container">
        <h2 className="font-bold text-2xl pt-2 pb-4">যোগাযোগ</h2>
        <ul className="pb-4 list-none">
          <li>আজকের পত্রিকা</li>
          <li>হাউস ৮, রোড ২, ব্লক সি</li>
          <li>বনশ্রী, রামপুরা, ঢাকা ১২১৯</li>
          <li>টেলিফোন: ‍+৮৮০ ৯৬৪৩ ১১১৩৩৩</li>
        </ul>
        <p className="pb-4">ই–মেইল</p>
        <ul className="pb-4 pl-3 list-disc list-inside">
          <li>
            সংবাদের জন্য:{" "}
            <Link
              href={`news@ajkerpatrika.com`}
              target="_blank"
              rel="noopener noreferrer"
            >
              news@ajkerpatrika.com
            </Link>
          </li>
          <li>
            সার্কুলেশনের জন্য:
            <Link
              href={`circulation@ajkerpatrika.com`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              circulation@ajkerpatrika.com
            </Link>
          </li>
          <li>
            বিজ্ঞাপনের জন্য:
            <Link
              href={`adsales@ajkerpatrika.com`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              adsales@ajkerpatrika.com
            </Link>
          </li>
          <li>
            যেকোনো তথ্যের জন্য:
            <Link
              href={`info@ajkerpatrika.com`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              info@ajkerpatrika.com
            </Link>
          </li>
        </ul>
        <h2 className="font-bold text-2xl pb-4">Contact Us</h2>
        <ul className="pb-4 list-inside list-none">
          <li>Ajker Patrika</li>
          <li>House 8, Road 2, Block C</li>
          <li>Banasree, Rampura, Dhaka-1219</li>
          <li>Telephone: +880 9643 111333</li>
        </ul>
        <p className="pb-4">E-mail</p>
        <ul className="pb-4 pl-3 list-inside list-disc">
          <li>News: news@ajkerpatrika.com</li>
          <li>Circulation: circulation@ajkerpatrika.com</li>
          <li>Advertisement: adsales@ajkerpatrika.com</li>
          <li>General Information: info@ajkerpatrika.com</li>
        </ul>
        <ul className="py-2 pb-0 pl-3 list-inside list-disc">
          সামাজিক যোগাযোগমাধ্যমে আমাদের সঙ্গে যুক্ত থাকুন
          <li>
            ফেসবুক:{" "}
            <Link
              href={`www.facebook.com/ajpbd`}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-blue-500 hover:text-red-500"
            >
              www.facebook.com/ajpbd
            </Link>
          </li>
          <li>
            ইউটিউব:{" "}
            <Link
              href={`www.youtube.com/c/ajkerpatrikabd`}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-blue-500 hover:text-red-500"
            >
              www.youtube.com/c/ajkerpatrikabd
            </Link>
          </li>
          <li>
            টুইটার:{" "}
            <Link
              href={`www.twitter.com/ajkerpatrikabd`}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-blue-500 hover:text-red-500"
            >
              www.twitter.com/ajkerpatrikabd
            </Link>
          </li>
          <li>
            ইনস্টাগ্রাম:{" "}
            <Link
              href={`www.instagram.com/ajkerpatrikabd`}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-blue-500 hover:text-red-500"
            >
              www.instagram.com/ajkerpatrikabd
            </Link>
          </li>
          <li>
            পিন্টারেস্ট:{" "}
            <Link
              href={`www.pinterest.com/ajkerpatrikabd`}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-blue-500 hover:text-red-500"
            >
              www.pinterest.com/ajkerpatrikabd
            </Link>
          </li>
          <li>
            লিংকডইন:{" "}
            <Link
              href={`www.linkedin.com/company/ajpbd`}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-blue-500 hover:text-red-500"
            >
              www.linkedin.com/company/ajpbd
            </Link>
          </li>
        </ul>
        <div className="w-100 mt-8 ">
          <iframe
            width="100%"
            height="500"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Ajker%20Patrika,%20Block%20C,%20House%208%20Road%202,%20Dhaka%201219+(Ajker%20Patrika)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
        <p className="py-2"></p>
      </div>
    </Section>
  );
}

export default Contact;
