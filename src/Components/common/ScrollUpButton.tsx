import React from 'react'
import { FaAngleUp } from 'react-icons/fa6'

function ScrollUpButton() {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Optional for smooth scrolling effect
        });
    };
    return (
        <button
            onClick={handleScrollToTop}
            className='z-[1000] w-10 h-10 bg-gray-100 rounded-full fixed right-5 bottom-5 flex items-center justify-center hover:bg-gray-200'
        >
            <FaAngleUp size={18} className='text-[#006563]' />
        </button>
    )
}

export default ScrollUpButton