import React from 'react'
import WebStories from './WebStories'
import { IWebStory } from '@/config/interfaces/interfaces'

function WebStoryBlock({ webStories }: { webStories: IWebStory[] }) {
    return (
        <div className='container'>
            <div className='hidden md:block' >
                {/* First block of stories */}
                <div className='mb-8'>
                    <div className='grid grid-cols-[auto_300px] gap-9 mb-8'>
                        <WebStories webStories={webStories?.slice(0, 11)} />
                        <div className='w-[300px] h-[250px] bg-gray-100'>

                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='w-[970px] h-[90px] bg-gray-100'></div>
                    </div>
                </div>

                {/* Second block of stories */}
                {
                    webStories?.length > 11 && (
                        <div className='mb-8'>
                            <div className='grid grid-cols-[auto_300px] gap-9 mb-8'>
                                <WebStories webStories={webStories?.slice(11, 22)} />
                                <div className=''>

                                </div>
                            </div>
                            <div className='flex items-center'>
                                <div className='w-[970px] h-[90px] bg-gray-100'></div>
                            </div>
                        </div>
                    )
                }

                {/* Third block of stories */}
                {
                    webStories?.length > 22 && (
                        <div>
                            <div className='grid grid-cols-[auto_300px] gap-9 mb-8'>
                                <WebStories webStories={webStories?.slice(22, 33)} />
                                <div className=''>

                                </div>
                            </div>
                            <div className='flex items-center'>
                                <div className='w-[970px] h-[90px] bg-gray-100'></div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className='block md:hidden mb-20'>
                <WebStories webStories={webStories} />
            </div>
        </div>
    )
}

export default WebStoryBlock