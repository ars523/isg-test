"use client";
import React from 'react';
import { ImLink } from "react-icons/im";


const CopyUrl = () => {
    const handleCopyUrl = () => {
        const currentUrl = window.location.href;
        navigator.clipboard.writeText(currentUrl)
    };

    return (
        <button onClick={handleCopyUrl} className="bg-[#006563] p-[0.4rem] rounded-full ">
            <ImLink size={18} color='#ffffff' />

        </button>
    );
};

export default CopyUrl