import { TDisplayTag } from "@/config/interfaces/interfaces";
import cn from "@/lib/cn";
import { ClassValue } from "clsx";
import Link from "next/link";
import React from "react";

interface TitleProps {
  children: React.ReactNode;
  className?: ClassValue;
  size?: "small" | "medium" | "large" | "extra-large" | 'extra-extra-large';
  display_tags?: TDisplayTag[];
  featuredDisplayTag?: string;
  href?: string;
  isLiveActive?: boolean;
}

function Title({
  isLiveActive,
  children,
  href,
  className,
  size = "medium",
  display_tags,
  featuredDisplayTag,
}: TitleProps) {
  return (
    <h2
      className={cn(
        "text-contrast1  group-hover:text-golden1 hover:text-golden1",
        {
          "text-base font-bold": size === "small",
          "text-lg font-bold": size === "medium",
          "text-xl font-bold": size === "large",
          "text-2xl font-bold": size === "extra-large",
          "text-[28px] leading-[38px] font-bold": size === "extra-extra-large"
        },
        className
      )}
    >
      {
        isLiveActive && (
          <div className="inline-flex items-center mr-2">
            <div
              className={
                cn("inline-flex justify-center items-center w-5 h-5 rounded-full border-2 border-red-600")
              }
            >
              {/* Inner Circle */}
              <div
                className={
                  cn(
                    "w-3 h-3 bg-red-600 rounded-full blink-animation",

                  )
                }
              ></div>
            </div>
            <span className="ml-2 text-red-600">সরাসরি</span>
          </div>
        )
      }
      {display_tags && display_tags.length > 0 && (
        <Link
          className={
            cn("mr-1 hover:text-red-500  text-[#007aff] inline-block", {
              'mr-2': size === 'extra-large',
            })
          }
          href={`/display-topic/${display_tags[0]?.name}`}
          scroll={false}>
          {display_tags[0]?.name ?? ""}{" /"}
        </Link>
      )}
      {featuredDisplayTag && (
        <Link
          className={
            cn("mr-1 hover:text-red-500  text-[#007aff] inline-block", {
              'mr-2': size === 'extra-large',
            })
          }
          href={`/display-topic/${featuredDisplayTag}`}
          scroll={false}>
          {featuredDisplayTag}{" /"}
        </Link>
      )}
      <Link className="inline" href={href || ""}>{children}</Link>
    </h2>
  );
}

export default Title;
