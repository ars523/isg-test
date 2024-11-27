import React from 'react'
import Section from '../common/Section'
import StoriesWithTopCard from '../common/StoriesWithTopCard'
import { ITemplate } from '@/config/interfaces/interfaces';
import SectionBottomAdd from '../common/SectionBottomAdd';

interface IStoriesWithEightCategoriesProps {
    templates: ITemplate[];
}
function StoriesWithEightCategories({ templates }: IStoriesWithEightCategoriesProps) {
    return (
        <Section>
            <div className="container">
                <div className='flex flex-col gap-[16px]'>
                    <div className='grid grid-cols-1 lg:grid-cols-4 gap-9 border-bottom before:-bottom-[16px]'>
                        {
                            templates.slice(0, 4).map((item, index) => (
                                <StoriesWithTopCard key={index} stories={item.stories} title={item.category.name} category={item.category} />
                            ))
                        }
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-4 gap-9'>
                        {
                            templates.slice(4, 8).map((item, index) => (
                                <StoriesWithTopCard key={index} stories={item.stories} title={item.category.name} category={item.category} />
                            ))
                        }
                    </div>
                </div>
            </div>
            {/* <SectionBottomAdd /> */}
        </Section>
    )
}

export default StoriesWithEightCategories