// SocialShareButtons.tsx
"use client";

import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  ViberShareButton,
  ViberIcon,
} from "next-share";


interface SocialShareButtonsProps {
  shareUrl: string;
  title: string
}

const SocialShareButtons = ({
  shareUrl, title
}: SocialShareButtonsProps) => {
  return (
    <div className="flex flex-row gap-x-2 ">
      <FacebookShareButton
        url={shareUrl}
        quote={
          title
        }
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <WhatsappShareButton
        url={shareUrl}
        title={
          title
        }
        separator="::"
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <LinkedinShareButton url={shareUrl}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <TwitterShareButton
        url={shareUrl}
        title={title}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </div>
  );
};

export default SocialShareButtons;