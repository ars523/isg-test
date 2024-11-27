import Image from "next/image";

import facebook from "@/assets/images/social/facebook.png";
import twitter from "@/assets/images/social/twitter.png";
import youtube from "@/assets/images/social/youtube.png";
import linkedin from "@/assets/images/social/linkedin.png";
import instagram from "@/assets/images/social/instagram.png";
import pinterest from "@/assets/images/social/pinterest.png";
import tiktok from "@/assets/images/social/tiktok.png";
import google from "@/assets/images/social/google.png";
import Link from "next/link";
import { IMenu } from "@/config/interfaces/interfaces";
// import socialsList from "../../assets/data/socialsList"

function Footer({ footerItems }: { footerItems: IMenu | undefined }) {
  const socials = [
    {
      title: "facebook",
      icon: facebook,
      link: "https://www.facebook.com/ajpbd",
    },
    {
      title: "twitter",
      icon: twitter,
      link: "https://x.com/ajkerpatrikabd?mx=2",
    },
    {
      title: "tiktok",
      icon: tiktok,
      link: "https://www.tiktok.com/@ajkerpatrika",
    },
    {
      title: "pinterest",
      icon: pinterest,
      link: "https://www.pinterest.com/ajkerpatrikabd/",
    },
    {
      title: "youtube",
      icon: youtube,
      link: "https://www.youtube.com/c/ajkerpatrikabd",
    },
    {
      title: "linkedin",
      icon: linkedin,
      link: "https://www.linkedin.com/company/ajpbd/",
    },
    {
      title: "instagram",
      icon: instagram,
      link: "https://www.instagram.com/ajkerpatrikabd/",
    },
    {
      title: "google",
      icon: google,
      link: "https://news.google.com/publications/CAAqBwgKMNW6qQswx8XBAw?hl=en-US&gl=US&ceid=US%3Aen",
    },
  ];

  const footerPages = [
    {
      title: "আজেকর পত্রিকা",
      link: "about-us",
    },
    {
      title: "বিজ্ঞাপন",
      link: "advertisement",
    },
    {
      title: "সার্কুলেশন",
      link: "circulation",
    },
    {
      title: "যোগাযোগ",
      link: "contact",
    },
    {
      title: "নীতিমালা",
      link: "user-terms-and-conditions",
    },
    {
      title: "গোপনীয়তা নীতি",
      link: "privacy",
    },
  ];

  return (
    <footer className="font-semibold">
      <div className=" border-t-2 border-[#006563] pt-3 pb-10">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center space-x-4 mb-4 md:mb-0">
            {footerItems?.menu_items?.map((item, index) => (
              <Link
                key={index}
                href={
                  item?.link_url
                    ? `${item?.link_url}`
                    : `/${item?.category?.slug}`
                }
                target={item?.open_in_new_tab ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="pt-[10px] pb-[2px] pr-3"
              >
                {item?.link_title || item?.category?.name}
              </Link>
            ))}
          </div>
          <div className="flex space-x-4">
            {socials.map((social, index) => (
              <Link
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={social.icon}
                  alt={social.title}
                  width={24}
                  height={24}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* Arrow Button */}
      {/* <div className="flex justify-center md:justify-end">
            <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="bg-cyan-700 text-white p-2 rounded-full md:mb-4">
            ↑
            </button>
            </div> */}
      <div className="flex border-t border-gray-300 py-1 lg:py-3 justify-center md:justify-start text-center md:text-left ">
        <div className="container">
          <span>
            স্বত্ব: ©️{" "}
            <Link href={`/`} className="text-blue-500 hover:text-red-500">
              আজকের পত্রিকা
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
