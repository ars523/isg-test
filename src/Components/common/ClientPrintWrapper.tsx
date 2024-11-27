'use client';

import React, { useRef } from 'react';
import PrintNews from './PrintNews';
import { BsPrinterFill } from "react-icons/bs";
import { IStoryDetails } from '@/config/interfaces/interfaces';

interface ClientPrintWrapperProps {
    story: IStoryDetails;
}

const ClientPrintWrapper: React.FC<ClientPrintWrapperProps> = ({ story }) => {
    const printNewsRef = useRef<{ print: () => void; componentRef: React.RefObject<HTMLDivElement> }>(null);

    const handlePrintClick = () => {
        if (printNewsRef.current) {
            printNewsRef.current.print();
        }
    };

    return (
        <div>
            <div className='hidden cursor-pointer' >
            <PrintNews ref={printNewsRef} story={story} />
            </div>
            
            {/* <button
                onClick={handlePrintClick}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
                Print News
            </button> */}
            <BsPrinterFill className='cursor-pointer'  onClick={handlePrintClick} size={30} />

        </div>
    );
};

export default ClientPrintWrapper;