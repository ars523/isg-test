import cn from '@/lib/cn'
import { ClassValue } from 'clsx'
import Link from 'next/link'
import React from 'react'

function Caption({ children, className, href }: { children: React.ReactNode, className?: ClassValue, href?: string }) {
    if (href) {
        return (
            <div className={cn('text-[17px] leading-[26px] text-contrast2 line-clamp-2 lg:line-clamp-none', className)}>
                <Link href={href}>
                    {children}
                </Link>
            </div>
        )

    }
    else {
        return (
            <div className={cn('text-[17px] leading-[26px] text-contrast2 line-clamp-2 lg:line-clamp-none', className)}>
                {children}
            </div>
        )
    }
}

export default Caption