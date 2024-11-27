import React from 'react'
import { FaPlay } from 'react-icons/fa6'

function PlayIcon({ size = 16, color = '#fff' }: { size?: number; color?: string }) {
    return (
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-950 bg-opacity-60 p-2 rounded-full'>
            <FaPlay color={color} size={size} />
        </div>
    )
}

export default PlayIcon