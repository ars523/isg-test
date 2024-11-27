import { IAuthor, TDisplayTag } from '@/config/interfaces/interfaces';
import { getImageUrl } from '@/lib/imageUrl';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaUser } from 'react-icons/fa';
import Title from './Title';

interface IOpinionListProps {
    title: string;
    imageUrl: string | StaticImageData;
    slug: string;
    imageAlt?: string;
    author: IAuthor;
    href?: string;
    display_tags?: TDisplayTag[];
    isLiveActive?: boolean;
}

function OpinionList({ title, imageUrl, slug, imageAlt, author, href, display_tags, isLiveActive }: IOpinionListProps) {
    return (
        <div
            className='group'
        >
            <div
                className='flex items-center gap-4'
            >
                <div>
                    <Link
                        className='block w-20 h-20'
                        href={href || ''}
                    >
                        <Image
                            className='w-20 h-20 object-cover rounded-full'
                            src={imageUrl}
                            alt={imageAlt || title}
                            height={80}
                            width={80}
                        />
                    </Link>
                </div>
                <div>

                    <Title
                        display_tags={display_tags}
                        isLiveActive={isLiveActive}
                        href={href}
                        className='text-xl mb-4'
                    >
                        {title}
                    </Title>


                    <div className='flex items-center gap-[6px]'>
                        <FaUser size={12} />
                        <h6 className='text-sm font-semibold'>{author.author_name}</h6>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OpinionList