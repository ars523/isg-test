import { IStory } from '@/config/interfaces/interfaces'
import React from 'react'
import Title from './Title'

interface StoryCardWithGradientBgProps {
    story: IStory,
    size?: 'small' | 'medium' | 'large'
}

function StoryCardWithGradientBg({ story, size = 'large' }: StoryCardWithGradientBgProps) {
    return (
        <div
            className="relative w-full h-full flex flex-col justify-end"
            style={{
                backgroundImage: `url(${story.story_thumbnail?.url || story.blog_image?.url || story.photo_thumbnail?.url || ''})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="h-1/2 w-full bg-gradient-to-t to-gradient-black-light from-black flex items-end">
                <div className="w-full h-fit p-6">
                    <Title size={size} className={'text-white'}>{story.title}</Title>
                </div>
            </div>
        </div>
    )
}

export default StoryCardWithGradientBg