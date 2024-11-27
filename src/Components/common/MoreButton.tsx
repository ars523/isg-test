import cn from '@/lib/cn'
import { ClassValue } from 'clsx'
import Link from 'next/link'
import React from 'react'
import { FaAnglesRight } from 'react-icons/fa6'

function MoreButton({ href, className }: { href: string, className?: ClassValue }) {
    return (
        <div className={cn('absolute right-0 -bottom-10 hidden lg:block', className)}>
            <div className="relative group inline-block">
                <Link
                    href={href}
                    className="focus:outline-none inline-block"
                >
                    <FaAnglesRight color='#006563' size={32} />
                </Link>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 hidden group-hover:block bg-[#00878a] text-white text-sm font-semibold rounded py-1 px-2 whitespace-nowrap">
                    আরো
                </div>
            </div >
        </div>
    )
}

export default MoreButton