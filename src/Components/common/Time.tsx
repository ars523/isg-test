import cn from '@/lib/cn'
import { ClassValue } from 'clsx'
import React from 'react'
import { IoMdTime } from 'react-icons/io'

function Time({ children, className }: { children: React.ReactNode, className?: ClassValue }) {
    return (
        <>
            {
                children && (
                    <div className={cn('text-sm text-gray-600 flex items-center gap-1', className)}>
                        <IoMdTime size={14} />
                        {children}
                    </div>)
            }
        </>
    )
}

export default Time