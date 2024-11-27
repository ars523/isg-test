'use client'
import Section from '@/Components/common/Section'
import StorySlider from '@/Components/common/StorySlider'

import { IStory, ITemplate } from '@/config/interfaces/interfaces'
import SectionHeading from '../common/SectionHeading';
import SectionBottomAdd from '../common/SectionBottomAdd';


interface IWebStoriesProps {
    stories: IStory[];
}

function WebStories({ stories }: IWebStoriesProps) {
    return (
        <Section>
            <div className='container'>
                <SectionHeading>
                    ওয়েব স্টোরি
                </SectionHeading>
                <StorySlider items={stories} />
                {/* <SectionBottomAdd /> */}
            </div>
        </Section>
    )
}

export default WebStories