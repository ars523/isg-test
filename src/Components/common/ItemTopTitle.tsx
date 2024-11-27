import cn from '@/lib/cn';
import { ClassValue } from 'clsx';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import PlayIcon from './PlayIcon';
import { TStory } from '@/config/interfaces/interfaces';
import Title from './Title';
import Time from './Time';

interface IItemTopTitleProps {
    image: string;
    title: string;
    excerpt: string;
    link: string;
    className?: ClassValue;
    storyType?: TStory;
    featuredDisplayTag?: string;
    isLiveActive?: boolean;
    publishedTime?: string;
    highlight?: string;
}

function ItemTopTitle(
    {
        highlight,
        publishedTime,
        image,
        title,
        excerpt,
        link,
        className,
        storyType,
        featuredDisplayTag,
        isLiveActive }: IItemTopTitleProps) {
    return (
        <div
            className={cn('block', className)}
        >
            {
                highlight && (
                    <div className="text-lg text-red2 mb-1">
                        <div dangerouslySetInnerHTML={{ __html: highlight }} />
                    </div>
                )
            }
            <Title
                href={link}
                className='mb-2'
                featuredDisplayTag={featuredDisplayTag}
                isLiveActive={isLiveActive}
                size='large'
            >
                {title}
            </Title>
            <div className='grid grid-cols-10 gap-3'>
                <Link className='col-span-4' href={link}>
                    <div className='relative w-full aspect-video'>
                        <Image
                            className='w-full h-full object-cover mb-3'
                            src={image}
                            alt="Lead image"
                            fill={true}
                        />
                        {storyType === 'Video Story' && <PlayIcon size={16} />}
                    </div>
                </Link>
                <div className='col-span-6'>
                    <Link href={link}>
                        <p className='line-clamp-3 text-base'>{excerpt}</p>
                    </Link>
                    <Time className='mt-2'>{publishedTime}</Time>
                </div>

            </div>
        </div>
    )
}

export default ItemTopTitle