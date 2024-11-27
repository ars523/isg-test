import cn from '@/lib/cn'
import { ClassValue } from 'clsx'
import Link from 'next/link'
import React from 'react'

function SectionHeading({ className, children, href, multipleLink = false }: { className?: ClassValue, children: React.ReactNode, href?: string, multipleLink?: boolean }) {
    return (
        <h2
            className={
                cn(
                    `
                    text-center font-bold text-[26px] text-[#006563] py-4 mb-2 flex items-center gap-4 whitespace-nowrap
                    before:h-[1px] before:bg-[#000000] before:block before:w-full
                    after:h-[1px] after:bg-[#000000] after:block after:w-full
                    sticky top-[96px] lg:top-[61px] bg-white z-40
                   `, className
                )
            }
        >
            {
                multipleLink ? (
                    <div className='flex gap-2 items-center'>
                        {children}
                    </div>
                ) : (
                    <Link href={href || ''} className='hover:text-golden1'>
                        {children}
                    </Link>
                )
            }

        </h2>
    )
}

export default SectionHeading