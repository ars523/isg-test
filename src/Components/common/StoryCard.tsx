import cn from '@/lib/cn';
import { ClassValue } from 'clsx';
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import PlayIcon from './PlayIcon';
import { TDisplayTag, TStory } from '@/config/interfaces/interfaces';
import Title from './Title';
import Time from './Time';

interface IStoryCardProps {
    title: string;
    imageUrl: string | StaticImageData;
    slug: string;
    imageAlt?: string;
    imageContainerClass?: ClassValue;
    storyType?: TStory;
    href?: string;
    display_tags?: TDisplayTag[];
    isLiveActive?: boolean;
    publishedTime?: string;
    className?: ClassValue;
    classTitleContainer?: ClassValue;
}

function StoryCard(
    { className,
        classTitleContainer,
        title, isLiveActive,
        display_tags,
        imageUrl, slug,
        imageAlt,
        imageContainerClass,
        storyType,
        href,
        publishedTime
    }: IStoryCardProps) {
    return (
        <div

            className={cn('', className)}
        >
            <Link href={href || ''} >
                <div className={cn('w-full aspect-video mb-2 relative', imageContainerClass)}>
                    <Image
                        src={imageUrl}
                        alt={imageAlt || title}
                        className='w-full h-full object-cover'
                        fill={true}
                    />
                    {
                        storyType === 'Video Story' && <PlayIcon size={16} />
                    }
                </div>
            </Link>

            <div className={cn('', classTitleContainer)}>
                <Title
                    size='large'
                    display_tags={display_tags} href={href || ""}
                    className=''
                    isLiveActive={isLiveActive}
                >
                    {title}
                </Title>
            </div>
            <Time className='mt-2'>{publishedTime}</Time>
        </div>
    )
}

export default StoryCard