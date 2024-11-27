import { TDisplayTag, TStory } from '@/config/interfaces/interfaces';
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link';
import React from 'react'
import PlayIcon from './PlayIcon';
import Title from './Title';

interface IStoryWithTitleExcerptTime {
    title: string;
    excerpt: string;
    time: string;
    imageUrl: string | StaticImageData;
    storyType?: TStory;
    href?: string;
    display_tags?: TDisplayTag[];
}

function StoryWithTitleExcerptTime({ title, excerpt, time, imageUrl, storyType, href, display_tags }: IStoryWithTitleExcerptTime) {
    return (
        <div>
            <Link
                href={href || ''}
            >
                <div className='mb-2 w-full aspect-video relative'>
                    <Image src={imageUrl} alt="" fill className='object-cover' />
                    {
                        storyType === 'Video Story' && (
                            <PlayIcon size={22} />
                        )
                    }
                </div>
            </Link>
            <Title
                href={href || ''}
                className='text-lg font-bold mb-2'
                display_tags={display_tags}
            >
                {title}
            </Title>
            <p className='line-clamp-2 mb-4'>{excerpt}</p>
            <span className='text-sm'>{time}</span>
        </div>
    )
}

export default StoryWithTitleExcerptTime