'use client';
import cn from '@/lib/cn';
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton, ViberIcon, ViberShareButton, WhatsappIcon, WhatsappShareButton } from 'next-share';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { FaShareAlt } from 'react-icons/fa';

function PhotoItem({ hadlePhotoItemClick, thumbnail, caption, content, title, shareUrl }: { thumbnail: string, caption: string, content: string, title: string, shareUrl: string, hadlePhotoItemClick: () => void }) {
    const [showShare, setShowShare] = React.useState(false);
    const shareRef = useRef<HTMLDivElement>(null);

    // Close share menu on outside click
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (shareRef.current && !shareRef.current.contains(event.target as Node)) {
                setShowShare(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [shareRef]);

    return (
        <div className='border-b border-gray-200 mb-3 last:border-b-0'>
            {thumbnail && (
                <div className='cursor-pointer' onClick={hadlePhotoItemClick}>
                    <Image
                        className="w-full h-auto"
                        src={thumbnail}
                        alt=""
                        width={700}
                        height={250}
                    />
                    <div className="h-3 bg-gray-100"></div>
                </div>
            )}
            {caption && (
                <div className="text-lg mt-2">
                    {caption}
                </div>
            )}
            {content && (
                <div className="text-xl leading-[30px] text-[#000000] mb-8 mt-2 story-details">
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                </div>
            )}
            <div className='flex items-center gap-1 pt-4 pb-10'>
                <FacebookShareButton
                    url={shareUrl || ""}
                    quote={title}
                >
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
                <div className='relative group' ref={shareRef}>
                    <button className='bg-gray-500 p-2 rounded-full hidden lg:block'>
                        <FaShareAlt color='white' size={15} />
                    </button>
                    <button
                        onClick={() => { setShowShare(prev => !prev) }}
                        className='bg-gray-500 p-2 rounded-full lg:hidden'
                    >
                        <FaShareAlt color='white' size={15} />
                    </button>
                    <div className={
                        cn(
                            'absolute -top-1 hidden px-2 py-1 right-0 left-auto lg:group-hover:flex gap-2 bg-[#fff] shadow-shareShadow p-1 rounded',
                            {
                                'left-10 right-auto flex': showShare === true
                            },
                        )
                    }>
                        <WhatsappShareButton
                            url={shareUrl}
                            title={title}
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
                        <ViberShareButton
                            url={shareUrl}
                            title={title}
                        >
                            <ViberIcon size={32} round />
                        </ViberShareButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhotoItem;
