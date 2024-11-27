import cn from '@/lib/cn'
import React from 'react'

function WebstoryLoader() {
    return (
        <div className="grid grid-cols-5 md:grid-cols-12 gap-[10px] md:gap-4 animate-pulse mb-5">
            {
                [1, 2, 3, 4, 5, 6].map((e) => (
                    <div
                        className={cn(
                            "col-span-2 h-48 md:h-72 bg-gray-200 dark:bg-gray-300 rounded-lg last:col-span-1 md:last:col-span-2",
                            {
                                'hidden md:block': e === 4 || e === 5 || e === 3,
                            }
                        )}
                        key={e}
                    />
                ))
            }
        </div>
    )
}

export default WebstoryLoader