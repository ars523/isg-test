import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsYoutube } from 'react-icons/bs'
import PlayIcon from './PlayIcon';
import Time from './Time';
import Caption from './Caption';

interface IStoryCardProps {
    title: string;
    imageUrl: string | StaticImageData;
    slug: string;
    imageAlt?: string;
    publishedTime?: string;
    caption?: string;
}

function VideoCard({ title, imageUrl, slug, imageAlt, publishedTime, caption }: IStoryCardProps) {
    return (
        <Link
            href={`/video/${slug}`}
            className='group'
            scroll={false}
        >
            <div className='aspect-video mb-3 relative'>
                <div className='relative w-full aspect-video'>
                    <Image
                        className='w-full h-full object-cover'
                        src={imageUrl}
                        alt="Lead image"
                        fill={true}
                    />
                    <PlayIcon size={22} />
                </div>
            </div>
            <div>
                <h3 className='text-xl font-bold group-hover:text-golden1'>
                    {title}
                </h3>
            </div>
            <div className='my-1'>
                <Caption>{caption}</Caption>
            </div>
            <div>

            </div>
            <Time className='mt-2'>{publishedTime}</Time>
        </Link>
    )
}

export default VideoCard