"use client";
import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.svg";
import Image from "next/image";
import { IoClose, IoMenuSharp, IoSearch } from "react-icons/io5";
import Link from "next/link";
import {
  MdArrowDropDown,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import cn from "@/lib/cn";
import { FaUser } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { useParams } from "next/navigation";
import { today } from "@/utils";

import facebook from "@/assets/images/social/facebook.png";
import twitter from "@/assets/images/social/twitter.png";
import youtube from "@/assets/images/social/youtube.png";
import linkedin from "@/assets/images/social/linkedin.png";
import instagram from "@/assets/images/social/instagram.png";
import pinterest from "@/assets/images/social/pinterest.png";
import tiktok from "@/assets/images/social/tiktok.png";
import google from "@/assets/images/social/google.png";
import { useInView } from "react-intersection-observer";
import ScrollUpButton from "../common/ScrollUpButton";
import { IMenu } from "@/config/interfaces/interfaces";


function Header({ menuItems, drawerItems }: { menuItems: IMenu | undefined, drawerItems: IMenu | undefined }) {
  const [open, setOpen] = useState(false);
  const { category, slug1 } = useParams();
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

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

  return (
    <>
      <header ref={ref} className="relative z-[200] bg-white">
        <div className="container">
          <div className="grid grid-cols-[1fr_auto_1fr] py-6">
            <div className="hidden md:flex items-center justify-start text-sm font-semibold">
              {today()}
            </div>
            <div className="md:hidden flex items-center justify-start text-xs font-bold text-gray-600">
              {
                open ? (
                  <IoClose size={30} onClick={handleMenu} />
                ) : (
                  <IoMenuSharp size={24} onClick={handleMenu} />
                )
              }
            </div>
            <div className="flex justify-center items-center">
              <Link href="/">
                <Image
                  className="h-9 lg:h-14 w-auto"
                  src={logo}
                  alt="logo"
                />
              </Link>
            </div>
            <div className="flex justify-end items-center">
              <button>
                <IoSearch size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="sticky top-0 bg-white z-[200]">
        <div className="container">
          <nav className="md:flex border-b border-t border-[#BEBDBD]  justify-between items-center overflow-x-scroll lg:overflow-x-visible">
            <button onClick={handleMenu} className="hidden lg:block">
              {
                open ? (
                  <IoClose size={30} />

                ) : (
                  <RxHamburgerMenu size={22} />
                )
              }
            </button>
            <ul className="text-lg font-semibold flex items-center gap-6 text-contrast1">
              <li className="relative group">
                <Link
                  href={`/archive`}
                  className={cn("flex items-center hover:text-golden1 py-4", {
                    "text-golden1": category === "archive",
                  })}
                >
                  <span className="inline-block text-nowrap">
                    সর্বশেষ
                  </span>
                </Link>
              </li>
              {menuItems?.menu_items?.map((item, index) => (
                <li key={index} className="relative group">
                  <Link
                    href={`/${item?.category?.slug}`}
                    className={cn("flex items-center hover:text-golden1 py-4", {
                      "text-golden1": category === item?.category?.slug,
                    })}
                  >
                    <span className="inline-block text-nowrap">
                      {item.category.name}
                    </span>
                    {item?.menu_subcategories?.length > 0 && (
                      <div className="hidden lg:block">
                        <MdArrowDropDown className="" size={20} />
                      </div>
                    )}
                  </Link>
                  {item?.menu_subcategories?.length > 0 && (
                    <ul className="absolute bg-[#fff] py-2 text-[17px] rounded-lg border top-[50px] -left-2 lg:group-hover:block hidden w-40">
                      {item?.menu_subcategories?.map((child, index) => (
                        <li key={index} className="px-3 py-1 flex">
                          <Link
                            href={`/${item.category.slug}/${child.subcategory.slug}`}
                            className={cn(
                              "text-[#000] hover:text-golden1 w-full",
                              {
                                "text-golden1": slug1 === child.subcategory.slug,
                              }
                            )}
                          >
                            <span>{child.subcategory.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="group">
                <Link
                  href={"https://epaper.ajkerpatrika.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center hover:text-[#000] py-4 ml-6 group"
                  )}
                >
                  <span className="inline-block text-[#006563] group-hover:text-golden1">
                    ইপেপার
                  </span>
                </Link>
              </li>
              <li className="group">
                <Link
                  href={"/"}
                  className={cn(
                    "flex items-center hover:text-[#000] py-4 gap-[6px] group"
                  )}
                >
                  <FaUser size={14} className="group-hover:text-golden1" />
                  <span className="text-sm group-hover:text-golden1">
                    Login
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {open && (
        <div className="fixed left-0 top-0 right-0 bg-black bg-opacity-85 w-full z-[100] h-screen overflow-y-scroll">
          <div className="container">
            <div
              className={cn("mt-[62px] py-6", {
                "mt-[88px] lg:mt-[150px]": inView === true,
              })}
            >
              {/* 150/62 */}
              <div className="mb-8 flex flex-col lg:flex-row gap-4 items-center">
                <h6 className="text-white text-xl">অনুসরণ করুন</h6>
                <ul className="flex gap-4">
                  {socials.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={item.icon}
                          alt={item.title}
                          className="h-6 w-6 lg:h-[30px] lg:w-[30px]"
                          width={30}
                          height={30}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h6 className="text-golden1 text-4xl mb-5">সেকশন</h6>
                <ul className="flex flex-col gap-5">
                  {drawerItems?.menu_items.map((item, index) => (
                    <li
                      key={index}
                      className="flex flex-col lg:flex-row lg:items-center mb-4 lg:mb-0"
                    >
                      <div className="flex items-center gap-4 w-56">
                        <div className="bg-golden1 h-[10px] w-[10px] rounded-full" />
                        <button
                          className="text-white text-2xl lg:text-3xl hover:text-golden1"
                          onClick={handleMenu}
                        >
                          <Link
                            href={item.link_url ? `${item?.link_url}` : `/${item?.category?.slug}`}
                          >
                            {item.link_title || item?.category?.name}
                          </Link>
                        </button>
                      </div>
                      <div>
                        {item?.menu_subcategories?.length > 0 && (
                          <div className="flex gap-2 lg:gap-4 items-start lg:items-center mt-4 lg:mt-0 ml-6 lg:ml-0">
                            <div className="hidden lg:block">
                              <MdOutlineKeyboardDoubleArrowRight
                                className="text-golden1"
                                size={30}
                              />
                            </div>
                            <div className="lg:hidden">
                              <MdOutlineKeyboardDoubleArrowRight
                                className="text-golden1 mt-1"
                                size={24}
                              />
                            </div>
                            <div className="flex items-center flex-wrap gap-x-8 gap-y-4">
                              {item?.menu_subcategories?.map((child, index) => (
                                <div className="" key={index}>
                                  <button
                                    className="text-white text-xl lg:text-2xl hover:text-golden1"
                                    onClick={handleMenu}
                                  >
                                    <Link href={`/${item?.category?.slug}/${child?.subcategory?.slug}`}>
                                      {child?.subcategory?.name}
                                    </Link>
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="fixed top-0 left-0 right-0">

      </div>
      {
        !inView && (
          <ScrollUpButton />
        )
      }
    </>
  );
}

export default Header;
