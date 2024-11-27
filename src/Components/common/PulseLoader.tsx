import Image from 'next/image'
import React from 'react'
import logo from '@/assets/images/logo.svg'
import ScrollToTop from './ScrollTop'
import cn from '@/lib/cn'
import { ClassValue } from 'clsx'
function PulseLoader({ className }: { className?: ClassValue }) {
    return (
        // <div className='flex justify-center items-center py-4 pb-6 md:py-10'>
        //     <Image src={logo} alt='logo' className='animate-pulse h-6 lg:h-12' />
        // </div>
        <>
            <ScrollToTop />
            <div className={cn('flex justify-center items-center h-[calc(100vh-146px)] lg:h-[calc(100vh-166px)]', className)}>
                <span className="loader relative block w-12 h-12 rounded-full border-t-4 border-[#006563] border-r-4 border-r-transparent box-border after:content-[''] after:absolute after:inset-0 after:w-full after:h-full after:rounded-full after:border-b-4 after:border-b-golden1 after:border-l-4 after:border-l-transparent animate-spin"></span>
            </div>
        </>
    )
}

export default PulseLoader