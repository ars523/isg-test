import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { IoPlayCircleOutline } from 'react-icons/io5'
import Title from './Title'
import cn from '@/lib/cn'

interface IBigStoryProps {
    image: string | StaticImageData;
    title: string;
    showTitleBg?: boolean;
    type: string;
    showTitle?: boolean;

}


function BigStory({ image, title, showTitleBg = false, showTitle = true, type }: IBigStoryProps) {
    return (
        <div className={cn(
            'w-full h-full flex flex-col',
            {
                'gap-2': showTitleBg === false,
                'gap-0': showTitleBg === true,
            },
            {
                'bg-gray-100': showTitleBg === true,
            }
        )}>
            <div className='relative w-full'>
                <Image
                    className='w-full h-auto object-cover'
                    src={image} alt={''}
                />
                {
                    type === 'video' && (<IoPlayCircleOutline size={48} color='white' className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />)
                }
            </div >
            {
                showTitle && (
                    <div className={
                        cn(
                            'w-full',
                            {
                                'bg-gray-100 px-2 py-4': showTitleBg === true,
                            }
                        )
                    }>
                        <Title size='large'>{title}</Title>
                    </div>
                )
            }


        </div >
    )
}

export default BigStory