import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link';
import { ClassValue } from 'clsx';
import cn from '@/lib/cn';
import { TDisplayTag, TStory } from '@/config/interfaces/interfaces';
import PlayIcon from './PlayIcon';
import Title from './Title';
import Time from './Time';

interface IStoryListProps {
    title: string;
    imageUrl: string | StaticImageData;
    slug: string;
    imageAlt?: string;
    className?: ClassValue;
    classImageContainer?: ClassValue;
    classTextContainer?: ClassValue;
    storyType?: TStory;
    href?: string;
    display_tags?: TDisplayTag[];
    isLiveActive?: boolean;
    reverseOrder?: boolean;
    publishedTime?: string;
    classContainer?: ClassValue;
}

function StoryList({ classContainer, publishedTime, reverseOrder, title, display_tags, isLiveActive, imageUrl, slug, imageAlt, className, classImageContainer, classTextContainer, storyType, href }: IStoryListProps) {
    return (
        <div

            className={cn('group', classContainer)}
        >
            <div className={cn('grid grid-cols-2 gap-3', className)}>
                <div className={cn({ 'lg:order-2': reverseOrder === true })}>
                    <Link
                        href={href || ""} scroll={false}
                    >
                        <div className={cn('aspect-video relative w-full', classImageContainer)}>
                            <Image
                                className='w-full h-full object-cover'
                                src={imageUrl}
                                alt={imageAlt || title}
                                fill={true}
                            />
                            {
                                storyType === 'Video Story' && (
                                    <PlayIcon size={16} />
                                )
                            }
                        </div>
                    </Link>
                </div>

                <div className={cn({ 'lg:order-1': reverseOrder === true }, classTextContainer)}>
                    <Title
                        size="large"
                        href={href || ""}
                        display_tags={display_tags}
                        isLiveActive={isLiveActive}
                    >
                        {title}
                    </Title>
                    <Time className='mt-3'>{publishedTime}</Time>
                </div>
            </div>
        </div>
    )
}

export default StoryList