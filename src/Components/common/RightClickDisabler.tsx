'use client'
import React from 'react'

function RightClickDisabler({ children, isDisabledCopy }: { children: React.ReactNode, isDisabledCopy: boolean }) {
    return (
        <div
            onContextMenu={(e) => {
                if (isDisabledCopy) {
                    e.preventDefault()
                }
            }}
        >
            {children}
        </div>
    )
}

export default RightClickDisabler