import cn from '@/lib/cn'
import { ClassValue } from 'clsx'
import React from 'react'

function Divider({ className, children }: { className?: ClassValue, children?: React.ReactNode }) {
    return (
        <div className={cn('grid grid-cols-4 md:gap-8 gap-6', className)}>
            {children}
        </div>
    )
}

export default Divider