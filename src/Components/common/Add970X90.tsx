import React from 'react'
import add970 from '@/assets/images/adds/add970.gif'
import Image from 'next/image'
function Add970X90() {
    return (
        <div className='container flex justify-center'>
            <Image
                className='w-[970px] h-[90px] object-cover'
                src={add970}
                alt='Add'
                width={970}
                height={90}
            />
        </div>
    )
}

export default Add970X90