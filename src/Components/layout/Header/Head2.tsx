"use client";
import React, { useState, useEffect, useRef } from "react";

import logo from "@/assets/images/logo.svg";
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
import ScrollUpButton from "../../common/ScrollUpButton";
import { IMenu } from "@/config/interfaces/interfaces";
import useResponsive from "@/hooks/useResponsive";
import { useRouter } from "next/navigation";

const Head2 = ({
  menuItems,
  drawerItems,
}: {
  menuItems: IMenu | undefined;
  drawerItems: IMenu | undefined;
}) => {
  const router = useRouter();
  const { width } = useResponsive();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);
  const [showScrollUpButton, setShowScrollUpButton] = useState(false);
  const [boxShadow, setBoxShadow] = useState(false);

  const [menuVisible, setMenuVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchBoxOpen, setSearchBoxOpen] = useState(false);
  const { category, slug1 } = useParams();
  const [searchValue, setSearchValue] = useState("");

  const factCheckAllStaticPages = [
    {
      title: "আমাদের সম্পর্কে",
      slug: "/what-we-are",
    },
    {
      title: "ফ্যাক্টচেক টিম",
      slug: "/fact-check-team",
    },
    {
      title: "রেটিং",
      slug: "/rating",
    },
    {
      title: "অনুরোধ",
      slug: "/fact-check-request",
    },
  ];

  const handleInputSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (searchValue) {
      setSearchBoxOpen(false);
      router.push(`/search?q=${searchValue}`);
    }
    e.preventDefault();
  };

  const handleSearchButtonClick = () => {
    if (searchValue) {
      setSearchBoxOpen(false);
      router.push(`/search?q=${searchValue}`);
    }
  };

  // Scroll event to handle header animation
  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      const elem1 = document.querySelector(".elem1");
      const row1Height = elem1 ? (elem1 as HTMLElement).offsetHeight : 0;

      if (st > lastScrollTop && st > row1Height && width > 769) {
        // Scrolling down
        setHeaderTop(-row1Height);
      } else {
        // Scrolling up
        setHeaderTop(0);
      }

      if (st > 0) {
        setBoxShadow(true);
        setSearchBoxOpen(false);
      } else {
        setBoxShadow(false);
      }
      if (st > 200) {
        setShowScrollUpButton(true);
      } else {
        setShowScrollUpButton(false);
      }
      setLastScrollTop(st <= 0 ? 0 : st); // Prevent negative scrolling
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup
    };
  }, [lastScrollTop, width]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  }, [searchBoxOpen]);

  useEffect(() => {
    setLastScrollTop(0)
  }, [])

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

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
      <div
        className={cn("wrapper z-[999] bg-white", {
          "shadow-headerShadow": boxShadow === true,
        })}
        style={{
          top: `${headerTop}px`,
          transition: "top 0.4s ease-in-out",
          position: "fixed",
          width: "100%",
        }}
      >
        <div className="elem1">
          <header className="">
            <div className="container">
              <div className="grid grid-cols-[1fr_auto_1fr] py-3 lg:py-6">
                <div className="hidden md:flex items-center justify-start text-sm font-semibold">
                  {today()}
                </div>
                <div className="md:hidden flex items-center justify-start text-xs font-bold text-gray-600">
                  {open ? (
                    <IoClose size={30} onClick={handleMenu} />
                  ) : (
                    <IoMenuSharp size={24} onClick={handleMenu} />
                  )}
                </div>
                <div className="flex justify-center items-center">
                  <button
                    onClick={() => {
                      window.location.href = "/";
                      setOpen(false);
                    }}
                  >
                    <Image
                      className="h-7 lg:h-14 w-auto"
                      src={logo}
                      alt="logo"
                    />
                  </button>
                </div>
                <div className="flex justify-end items-center gap-3">
                  {/* <Link className="block lg:hidden" href={"/"}>
                    <FaUser size={16} className="group-hover:text-golden1" />
                  </Link> */}
                  <button onClick={() => setSearchBoxOpen(true)}>
                    <IoSearch size={20} />
                  </button>
                </div>
              </div>
            </div>
          </header>
        </div>
        <div className="">
          <div className="container">
            <nav
              className={cn(
                "md:flex border-t border-[#BEBDBD]  justify-between items-center overflow-x-scroll lg:overflow-x-visible",
                {
                  "border-b": boxShadow === false,
                }
              )}
            >
              <button onClick={handleMenu} className="hidden lg:block">
                {open ? <IoClose size={30} /> : <RxHamburgerMenu size={22} />}
              </button>
              <ul className="text-xl font-semibold flex items-center gap-6 text-contrast1 px-1 lg:px-0">
                <li className="group lg:hidden block">
                  <Link
                    href={"https://epaper.ajkerpatrika.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex items-center hover:text-[#000] py-2 lg:py-4 group"
                    )}
                  >
                    <span className="inline-block text-[#006563] font-bold group-hover:text-golden1">
                      ইপেপার
                    </span>
                  </Link>
                </li>
                {menuItems?.menu_items?.map((item, index) => (
                  <li key={index} className="relative group">
                    <Link
                      href={
                        item?.link_url
                          ? `${item?.link_url}`
                          : `/${item?.category?.slug}`
                      }
                      target={item?.open_in_new_tab ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className={cn(
                        "flex items-center hover:text-golden1 py-2 lg:py-4",
                        {
                          "text-golden1":
                            item?.category && category === item?.category?.slug,
                        }
                      )}
                    >
                      <span
                        className={cn("inline-block text-nowrap",
                          // {
                          //   'text-[#faa61a]': item?.link_title && item?.link_title === "সর্বশেষ"
                          // }
                        )}
                      >
                        {item?.link_title || item?.category?.name}
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
                              href={`/${item.category.slug}/${child?.subcategory?.slug}`}
                              className={cn(
                                "text-[#000] hover:text-golden1 w-full",
                                {
                                  "text-golden1":
                                    slug1 === child?.subcategory?.slug,
                                }
                              )}
                            >
                              <span>{child?.subcategory?.name}</span>
                            </Link>
                          </li>
                        ))}

                        {item?.category?.name === "ফ্যাক্টচেক" ? (
                          factCheckAllStaticPages.map((child, index) => (
                            <li key={index} className="px-3 py-1 flex">
                              <Link
                                href={`${child?.slug}`}
                                className={cn(
                                  "text-[#000] hover:text-golden1 w-full",
                                  {
                                    "text-golden1": slug1 === child?.slug,
                                  }
                                )}
                              >
                                <span>{child?.title}</span>
                              </Link>
                            </li>
                          ))
                        ) : (
                          <></>
                        )}
                      </ul>
                    )}
                  </li>
                ))}
                <li className="group hidden lg:block">
                  <Link
                    href={"https://epaper.ajkerpatrika.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex items-center hover:text-[#000] py-2 lg:py-4 ml-6 group"
                    )}
                  >
                    <span className="inline-block text-[#006563] group-hover:text-golden1">
                      ইপেপার
                    </span>
                  </Link>
                </li>
                {/* <li className="group">
                  <Link
                    href={"/"}
                    className={cn(
                      "flex items-center hover:text-[#000] py-2 lg:py-4 gap-[6px] group"
                    )}
                  >
                    <FaUser size={14} className="group-hover:text-golden1" />
                    <span className="text-sm group-hover:text-golden1">
                      Login
                    </span>
                  </Link>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="h-[98px] lg:h-[166px]"></div>
      {open && (
        <div className="fixed left-0 top-0 right-0 bg-black bg-opacity-85 w-full z-[100] h-screen overflow-y-scroll">
          <div className="container">
            <div
              className={cn("mt-[62px] py-6", {
                "mt-[88px] lg:mt-[170px]": headerTop === 0,
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
                          className="text-white text-[22px] hover:text-golden1"
                          onClick={handleMenu}
                        >
                          <Link
                            href={
                              item?.link_url
                                ? `${item?.link_url}`
                                : `/${item?.category?.slug}`
                            }
                            target={item?.open_in_new_tab ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                          >
                            {item?.link_title || item?.category?.name}
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
                                    className="text-white text-xl hover:text-golden1"
                                    onClick={handleMenu}
                                  >
                                    <Link
                                      href={`/${item?.category?.slug}/${child?.subcategory?.slug}`}
                                    >
                                      {child?.subcategory?.name}
                                    </Link>
                                  </button>
                                </div>
                              ))}
                              {item?.category?.name === "ফ্যাক্টচেক" ? (
                                factCheckAllStaticPages.map((child, index) => (
                                  <div className="" key={index}>
                                    <button
                                      className="text-white text-xl hover:text-golden1"
                                      onClick={handleMenu}
                                    >
                                      <Link
                                        href={`${child?.slug}`}
                                      >
                                        {child?.title}
                                      </Link>
                                    </button>
                                  </div>
                                ))
                              ) : (
                                <></>
                              )}
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

      <div
        className={cn(
          "h-[56px] lg:h-[110px] border-b transition-all duration-200 border-[#BEBDBD] bg-gray-200 fixed left-0 right-0 z-[999] flex items-center",
          {
            "top-0": searchBoxOpen,
            "top-[-113px]": !searchBoxOpen,
          }
        )}
      >
        <div className="container flex">
          <form
            className="flex-1 border-r border-gray-300"
            onSubmit={handleInputSubmit}
          >
            <input
              ref={inputRef}
              type="text"
              placeholder="কী খুঁজতে চান?"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="bg-white w-full px-3 py-2 text-xl lg:text-3xl rounded-sm outline-none"
            />
          </form>
          <div className="border-r border-gray-300 flex items-center justify-center px-2">
            <button
              className="disabled:cursor-not-allowed"
              onClick={handleSearchButtonClick}
              disabled={!searchValue}
            >
              <IoSearch size={26} />
            </button>
          </div>
          <div className="flex items-center justify-center pl-2">
            <button>
              <IoClose size={30} onClick={() => setSearchBoxOpen(false)} />
            </button>
          </div>
        </div>
      </div>

      {showScrollUpButton && <ScrollUpButton />}
    </>
  );
};

export default Head2;
