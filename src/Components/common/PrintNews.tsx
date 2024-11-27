'use client';

import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { useReactToPrint } from 'react-to-print';
import Image from 'next/image';
import { IStoryDetails } from '@/config/interfaces/interfaces';
import logo from '@/assets/images/logo.svg';
import { getStoryDate } from '@/utils';

interface PrintNewsProps {
    story: IStoryDetails;
}

const PrintNews = forwardRef(({ story }: PrintNewsProps, ref) => {
    const componentRef = useRef<HTMLDivElement>(null);

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    useImperativeHandle(ref, () => ({
        print: handlePrint,
        componentRef,
    }));

    return (
        <div>
            <div ref={componentRef} className="p-10 print-content">
                <div className='mb-6'>
                <Image
                                    className='h-10 w-auto'
                                    src={logo} alt='logo'
                                    width={160}
                                />
                </div>
                <h1 className="text-3xl font-bold mb-2">{story.title}</h1>
                {
                                story.blog_authors && (
                                    <p className="text-xl text-[#292929] mb-1">{story?.blog_authors[0]?.author_name}</p>
                                )
                            }
                            <div className="mb-[10px] text-base text-[#333]">প্রকাশ : {getStoryDate(new Date(story.meta?.first_published_at), true)}</div>
                {story?.blog_image?.download_url && (
                    <Image
                        className="w-full h-auto mb-4"
                        src={story?.blog_image?.download_url || ''}
                        alt=""
                        width={300}
                        height={250}
                    />
                )}
                {story?.blog_image?.caption && (
                    <div className="text-gray-600 text-lg bg-gray-200 p-2 mb-4">{story?.blog_image?.caption}</div>
                )}
                {story.content && (
                    <div className="text-xl leading-8 text-black my-8 story-details">
                        <div dangerouslySetInnerHTML={{ __html: story.content }} />
                    </div>
                )}
                    {
                            story?.content2 && (
                                <div className="text-xl leading-[30px] text-[#000000] mb-8 story-details">
                                    <div dangerouslySetInnerHTML={{ __html: story?.content2 }} />
                                </div>
                            )
                        }
            </div>
        </div>
    );
});

PrintNews.displayName = 'PrintNews';

export default PrintNews;