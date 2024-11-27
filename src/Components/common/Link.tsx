import cn from '@/lib/cn'
import { ClassValue } from 'clsx'
import Link from 'next/link'
import React from 'react'

type Props =
    {
        children: React.ReactNode,
        href: string,
        scroll?: boolean,
        className?: ClassValue
    }

function CLink({ children, href, scroll, className }: Props) {
    return (
        <Link
            href={href}
            scroll={false}
            className={cn(className)}
        >
            {
                children
            }
        </Link>
    )
}

export default CLink